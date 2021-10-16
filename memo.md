## React Hooks

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
- UseAxios: 버튼을 클릭했을 때 Axios를 이용해 영화 API를 받아오는 훅

#### NPM에 배포하기

- 위의 훅들을 각각의 폴더로 분류한 후, npm init을 통해 각각의 폴더에 package.json파일을 초기화해준다.
- package.json은 기본적으로 index.js파일을 main 파일로 지정하기 때문에 index.js파일을 반드시 생성해줘야 한다.
- package.json에 해당 훅이 필요로 하는 패키지들을 설치해준다.
- 설치해준 후, 해당 패키지들이 이미 사용자의 컴퓨터에 설치되어 있을 수도 있기 때문에 dependencies가 아닌 peerDependencies로 변경해준다.
- 그래서 위의 훅들을 사용하기 위해 필요한 react가 이미 설치되어있다면, react를 다시 설치하지 않도록 한다.
- 위의 설정이 끝났다면 npm 홈페이지에서 organization을 생성해준다. 생성할 때 '@이름'형태로 생성해준다.
- '@이름'에서 이름 부분은 NPM에서 해당 패키지에 대한 범위같은 것을 의미하게 된다. 
- Organization을 생성했다면, npm login을 통해 로그인을 해준 후, npm publish --access public을 통해 해당 폴더와 파일들을 배포한다.

```javascript
// index.js
export { useTitle as default } from "./useTitle";

// useTitle.js
import { useEffect, useState } from "react";

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [title]);

  return setTitle;
};

// package.json
{
  "name": "@gitgw/use-title",
  "version": "1.1.0",
  "description": "React Hook to update your document's title.",
  "main": "index.js",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/GitHubGW/react-hook-npm.git"
  },
  "keywords": [
    "react",
    "react-hooks",
    "hooks",
    "title",
    "usetitle"
  ],
  "author": "GW",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/GitHubGW/react-hook-npm/issues"
  },
  "homepage": "https://github.com/GitHubGW/react-hook-npm#readme",
  "peerDependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}
```

#### Class Component vs Functional Component

```javascript
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

```javascript
// Function Component
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
