export function Component1() {
  return <div/>;
}

export function jsx2() {
  const props = {a:1,
  b:2}
  return < a  >
     <Component1 {...props }
     a={1}
    b="2">Inline Text</Component1>
    <Component1>
      Block Text
      </Component1>
      <div>
        Mixed
            <div>Foo</div>
          Text<b > Bar</b>
        </div>
        <p>
          foo<i>bar</i><b>baz</b>
        </p>
      </ a >
}
