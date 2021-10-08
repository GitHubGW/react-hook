### React Hooks

- UseInput: input 태그에 입력 가능한 글자수를 제한하고, 특수기호 @를 포함시키지 않도록 제한하는 훅
- UseTabs: 버튼을 클릭했을 때, 버튼에 해당되는 배열의 탭을 불러오는 훅
- UseTitle: title 태그가 가지고 있는 텍스트를 바꾸는 훅
- UseClick: 버튼을 클릭했을 때 버튼의 텍스트 색깔을 바꾸는 훅
- UseConfirm: confirm()메서드를 이용해서 확인 또는 취소를 클릭했을 때 true 또는 false를 반환하는 훅
- UseBeforeLeave: 마우스가 document의 영역에 있거나 벗어나게 되면 감지해서 알려주는 훅
- UseFadeIn: 버튼을 클릭했을 때 Fade In/Out을 해주는 훅
- UseNetwork: Navigator.onLine을 통해 현재 온라인인지 오프라인인지 감지해서 알려주는 훅
- UseScroll: 윈도우에 scroll동작이 일어나게 되면 x축과 y축의 좌표를 가져와서 보여주는 훅
- UseFullScreen: 버튼을 클릭했을 때 지정한 태그를 풀스크린으로 만드는 훅
- UseNotification: 버튼을 클릭했을 때 브라우저 알림창을 띄워주는 훅

#### Class Component vs Functional Component

```
// Class Component
import React, { useState } from "react";

class App extends React.Component {
  state = {
    number: 0,
  };

  handleButton = (event) => {
    const {
      target: { name },
    } = event;

    if (name === "addBtn") {
      this.setState((state) => {
        return { number: state.number + 1 };
      });
    } else if (name === "minusBtn") {
      this.setState((state) => {
        return { number: state.number - 1 };
      });
    }
  };

  render() {
    const { number } = this.state;

    return (
      <>
        <h1>App</h1>
        <h3>{number}</h3>
        <button name="addBtn" onClick={this.handleButton}>
          더하기
        </button>
        <button name="minusBtn" onClick={this.handleButton}>
          빼기
        </button>
      </>
    );
  }
}

export default App;
```

```
// Functional Component
import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);

  const handleButton = (event) => {
    const {
      target: { name },
    } = event;

    if (name === "addBtn") {
      setNumber((number) => number + 1);
    } else if (name === "minusBtn") {
      setNumber((number) => number - 1);
    }
  };

  return (
    <>
      <h1>App</h1>
      <h3>{number}</h3>
      <button name="addBtn" onClick={handleButton}>
        더하기
      </button>
      <button name="minusBtn" onClick={handleButton}>
        빼기
      </button>
    </>
  );
};

export default App;
```
