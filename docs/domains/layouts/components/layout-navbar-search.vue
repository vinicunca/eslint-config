<script lang="ts" setup>

</script>

<template>
  <div class="VDNavbarSearch flex items-center md:(grow-1 pl-6) lg:(pl-8)">
    <AlgoliaDocSearch />
  </div>
</template>

<style lang="postcss">
.VDNavbarSearch {
  [class*='DocSearch'] {
    --docsearch-primary-color: var(--vd-c-brand-1);
    --docsearch-highlight-color: var(--docsearch-primary-color);
    --docsearch-text-color: var(--vd-c-text-1);
    --docsearch-muted-color: var(--vd-c-text-2);
    --docsearch-searchbox-shadow: none;
    --docsearch-searchbox-background: transparent;
    --docsearch-searchbox-focus-background: transparent;
    --docsearch-key-gradient: transparent;
    --docsearch-key-shadow: none;
    --docsearch-modal-background: var(--vd-c-bg-soft);
    --docsearch-footer-background: var(--vd-c-bg);
  }

  .dark [class*='DocSearch'] {
    --docsearch-modal-shadow: none;
    --docsearch-footer-shadow: none;
    --docsearch-logo-color: var(--vd-c-text-2);
    --docsearch-hit-background: var(--vd-c-default-soft);
    --docsearch-hit-color: var(--vd-c-text-2);
    --docsearch-hit-shadow: none;
  }

  .DocSearch-Button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 48px;
    height: 55px;
    background: transparent;
    transition: border-color 0.25s;
  }

  .DocSearch-Button:hover {
    background: transparent;
  }

  .DocSearch-Button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  .DocSearch-Button:focus:not(:focus-visible) {
    outline: none !important;
  }

  @media (min-width: 768px) {
    .DocSearch-Button {
      justify-content: flex-start;
      border: 1px solid transparent;
      border-radius: 8px;
      padding: 0 10px 0 12px;
      width: 100%;
      height: 40px;
      background-color: var(--vd-c-bg-alt);
    }

    .DocSearch-Button:hover {
      border-color: var(--vd-c-brand-1);
      background: var(--vd-c-bg-alt);
    }
  }

  .DocSearch-Button .DocSearch-Button-Container {
    display: flex;
    align-items: center;
  }

  .DocSearch-Button .DocSearch-Search-Icon {
    position: relative;
    width: 16px;
    height: 16px;
    color: var(--vd-c-text-1);
    fill: currentColor;
    transition: color 0.5s;
  }

  .DocSearch-Button:hover .DocSearch-Search-Icon {
    color: var(--vd-c-text-1);
  }

  @media (min-width: 768px) {
    .DocSearch-Button .DocSearch-Search-Icon {
      top: 1px;
      margin-right: 8px;
      width: 14px;
      height: 14px;
      color: var(--vd-c-text-2);
    }
  }

  .DocSearch-Button .DocSearch-Button-Placeholder {
    display: none;
    margin-top: 2px;
    padding: 0 16px 0 0;
    font-size: 13px;
    font-weight: 500;
    color: var(--vd-c-text-2);
    transition: color 0.5s;
  }

  .DocSearch-Button:hover .DocSearch-Button-Placeholder {
    color: var(--vd-c-text-1);
  }

  @media (min-width: 768px) {
    .DocSearch-Button .DocSearch-Button-Placeholder {
      display: inline-block;
    }
  }

  .DocSearch-Button .DocSearch-Button-Keys {
    /*rtl:ignore*/
    direction: ltr;
    display: none;
    min-width: auto;
  }

  @media (min-width: 768px) {
    .DocSearch-Button .DocSearch-Button-Keys {
      display: flex;
      align-items: center;
    }
  }

  .DocSearch-Button .DocSearch-Button-Key {
    display: block;
    margin: 2px 0 0 0;
    border: 1px solid var(--vd-c-divider);
    border-right: none;
    border-radius: 4px 0 0 4px;
    padding-left: 6px;
    min-width: 0;
    width: auto;
    height: 22px;
    line-height: 22px;
    font-family: var(--vd-font-family-base);
    font-size: 12px;
    font-weight: 500;
    transition: color 0.5s, border-color 0.5s;
  }

  .DocSearch-Button .DocSearch-Button-Key + .DocSearch-Button-Key {
    border-right: 1px solid var(--vd-c-divider);
    border-left: none;
    border-radius: 0 4px 4px 0;
    padding-left: 2px;
    padding-right: 6px;
  }
}
</style>
