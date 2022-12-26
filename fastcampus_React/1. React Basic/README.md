# 1. REACT BASIC

## createElement

```js
const rootElement = document.getElementById("root");
    const element = React.createElement (
      "h1",
      {
        className: "title",
      },
      ["Hello, world", "It`s me!", "good"]
    );
    
    ReactDOM.render(element, rootElement);
```

## JSX
- 문자도 HTML도 아닌 JavaScript의 확장 문법
- JSX : React.createElement 표현식
- Babel : JavaScript Complier
- JSX 다루기 : spread 연산자 (...)

```js
const element = <h1>Hello, world!</h1>;
```

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<script type="text/babel">

  const rootElement = document.getElementById("root");
  const element = <h1 className="title">Hello, world</h1>;
    
  ReactDOM.render(element, rootElement);
</script>
```

- spread 연산자
```js
const props = {className: titleClassName, children: text };
const customH1 = <h1 {...props} />;
// const customH1 = {props.className} children={props.children} />;
const element = customH1;

ReactDOM.render(element, rootElement);
```