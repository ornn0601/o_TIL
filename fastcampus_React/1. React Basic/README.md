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

## 멀티 Element 생성하기
- React.Fragment : 부모로 감싸는 역할
- Fragment : React.Fragment or <></>

```js
const element = ( <React.Fragment children = {[<h1>Hi</h1>, <h3>bye</h3>, <h5>children</h5>]} /> );

const element1 = (
  <React.Fragment>
    <h1>Hi</h1>
    <h3>bye</h3>
    <h5>children</h5>
  </React.Fragment>
);

const element2 = (
  <>
    <h1>Hi</h1>
    <h3>bye</h3>
    <h5>children</h5>
  </>
);
ReactDOM.render(element, rootElement);
```

## Element 찍어내기
- Function : 재사용 가능한 Element
- Custom Element : Upper case
- Children 제한 : 없음

```js
const paint = () => (
  <>
    <h1>Hi</h1>
    <h3>bye</h3>
    <h5>children</h5>
  </>
);

const element = (
  <>
    {paint()}
    {paint()}
    {paint()}
  </>
);

// 재사용 가능한 Element
const paint = (title, description) => (
  <>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </>
);
const element = (
  <>
    {paint("Good", "good")}
    {paint("Bad", "bad")}
    {paint("So so", "so so")}
  </>
);
ReactDOM.render(element, rootElement); // <h1>Good</h1><h3>good</h3> <h1>Bod</h1><h3>bod</h3> <h1>So so</h1><h3>so so</h3>

// Custom Element
const Paint = ({title, description}) => {
  return (
    <>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </>
  );
};
const element = (
  <>
    <Paint title="Good" description="good" />
    <Paint title="Bad" description="bad" />
    <Paint title="So so" description="so so" />
  </>
)
ReactDOM.render(element, rootElement);

// children
const Paint = ({title, description, children}) => {
  return (
    <>
      <h1>{title}</h1>
      <h3>{description}</h3>
      {children}
    </>
  );
};
const Good = () => <h3>Good</h3>;
const element = (
  <>
    <Paint title="Good" description="good" />
      <Good />
      <Good />
      <Good />
    </Paint>
  </>
)
ReactDOM.render(element, rootElement);
```

## js와 JSX 섞어쓰기
- Interpolation : 이미 HTML에서 쓰고 있었다.

```js
const Text = ({ text }) => {
    // text가 대문자로 시작하면 h1, 소문자로 시작하면 h3
    if(text.charAt(0) === text.charAt(0).toUpperCase()) {
      return <h1>{text}</h1>;
    } else {
      return <h3>{text}</h3>;
    }
};
const element = (
  <>
    <Text text="abc" /> 
    <Text text="ABC" />
  </>
);
ReactDOM.render(element, rootElement); // <h3>abc</h3 <h1>ABC</h1>

// Number
function Number ({ number }) {
  return number % 2 === 0 ? <h1>{number}</h1> : <h3>{number}</h3>;
}
const element = (
  <>
    <Number number={1} />
    <Number number={2} />
    <Number number={3} />
    <Number number={4} />
  </>
);
ReactDOM.render(element, rootElement); // <h3>1</h3> <h1>2</h1> <h3>3</h3> <h1>4</h1>
```

## 리액트와 리랜더링
- 바닐라 js : 변경으로 인해 Element를 다시 그린다.
- React : 변경된 부분만 다시 그린다.

---
### React의 앨리먼트는 불변객체(immutable)입니다.
- 불변객체 : 변하지 않는 객체
- 우리는 그저 ReactDOM.render(element, rootElement);로 전달할뿐
- 변경 판단 및 반영은 리액트가 알아서 한다.
- 앨리먼트 타입이 바뀌면 - 이전 앨리먼트는 버리고 새로 그린다.
- 앨리먼트 타입이 같다면 - (key를 먼저 비교하고) props를 비교해서 변경사항을 반영한다.

- 리액트의 앨리먼트 : 불변 객체
- 변경 사항 반영 : 리액트에게 일임
- 리액트의 비교 : Reconciliation
- Virtual Dom : 비교시 활용
---

## 이벤트 핸들러 써보기-1
- 바닐라JS : on{event} / addEventListener
- React : on{Event}
- 카멜케이스 표기법 사용

```js
const rootElement = document.getElementById("root");
    
const handleClick = () => {
  alert('pressed')
}

const element = (
  <button 
    onClick={handleClick}
    onMouseOut={() => alert('bye')}>
    Pressed
  </button>
  );
ReactDOM.render(element, rootElement);
```

## 이벤트 핸들러 써보기-2
- 전역변수를 통해 객체 내용을 변경하여 적용한다.

```js
const rootElement = document.getElementById("root");
const state = { keyword: "", typing: false, result: "" };
    
const App = () => {
  function handleChange(event) {
    setState({ typing: true, keyword: event.target.value });  
  }

  function handleClick() {
    setState({
      typing: false,
      result: `We find results of ${state.keyword}`
    });
  }

  return ( 
    <>
      <input onChange={handleChange} />
      <button onClick={handleClick}>search</button>
      <p>
        {state.typing ? `Looking for ${state.keyword}...` : state.result}
      </p>
    </>
  )
};

// 변화된 부분 업데이트, render 재실행
function setState(newState) {
  Object.assign(state, newState); // 출처 객체로부터 대상 객체로 속성을 복사한다.
  render();
}

function render() {
  ReactDOM.render(<App />, rootElement);
}
render();
```