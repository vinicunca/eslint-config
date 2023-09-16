import { type MarkdownNode, type ParsedContent } from '@nuxt/content/dist/runtime/types';
import { visit } from 'unist-util-visit';

export default defineNitroPlugin((nitroApp) => {
  // @ts-expect-error issue is resolved https://github.com/nuxt/content/issues/2177
  nitroApp.hooks.hook('content:file:afterParse', async (file: ParsedContent) => {
    if (file._id.endsWith('.md')) {
      visit(file.body, 'element', (element) => {
        parseUl(element);
        parseAnchorLinks(element);
      });
    }
  });
});

/**
 * Nuxt MDC parser removes the paragraph within li elements.
 * This function is to replace it with a span element so we can add margin to it.
 *
 * https://github.com/nuxt-modules/mdc/blob/efe923600aca22eaabd9aa04a7b93cfbb1a908ae/src/runtime/parser/compiler.ts#L27
 */
function parseUl(element: any) {
  visit(element, (n: any) => n.tag === 'ul', (nodeUl: MarkdownNode) => {
    visit(nodeUl, (n: any) => n.tag === 'li', (nodeLi: MarkdownNode) => {
      const hasBr = nodeLi.children?.some((child) => child.tag === 'br');

      if (hasBr) {
        // Wrap all children in span when there's a br element
        const copiedChildren = nodeLi.children?.slice() ?? [];
        const returnChildren: MarkdownNode[] = [];

        const brChunks = copiedChildren.reduce<MarkdownNode[][]>((acc, curr) => {
          if (curr.tag === 'br') {
            acc.push([]);
          } else {
            const lastChunk: MarkdownNode[] = acc[acc.length - 1];
            lastChunk.push(curr);
          }

          return acc;
        }, [[]]);

        brChunks.forEach((chunk) => {
          if (chunk.length === 1 && chunk[0].tag === 'strong') {
            returnChildren.push(chunk[0]);
          } else {
            returnChildren.push({
              type: 'element',
              tag: 'span',
              children: chunk,
            });
          }
        });

        nodeLi.children = returnChildren;
      }
    });
  });
}

function parseAnchorLinks(element: any) {
  visit(element, (node: any) => {
    return headingRank(node);
  }, (node: MarkdownNode) => {
    const title = node
      .children
      ?.filter((token) => token.type === 'text' || token.type === 'code_inline')
      .reduce((acc, t) => acc + t.value, '');

    const linkEl = {
      type: 'element',
      tag: 'a',
      props: Object.assign({}, node.props, {
        'className': 'header-anchor',
        'aria-label': `Permalink to "${title}"`,
        'href': `#${node.props?.id}`,
      }),
    };
    node.children?.push(linkEl);
  });
}

function headingRank(node: any) {
  const name = node.type === 'element' ? node.tag.toLowerCase() : '';
  const code
    = name.length === 2 && name.charCodeAt(0) === 104 /* `h` */
      ? name.charCodeAt(1)
      : 0;

  const codeValue = code > 48 /* `0` */ && code < 55 /* `7` */
    ? code - 48 /* `0` */
    : 0;

  return Boolean(codeValue);
}
