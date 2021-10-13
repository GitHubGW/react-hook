import React from "react";
import UseInput from "./UseInput";
import UseTabs from "./UseTabs";
import UseTitle from "./UseTitle";
import UseClick from "./UseClick";
import UseConfirm from "./UseConfirm";
import UsePreventLeave from "./UsePreventLeave";
import UseBeforeLeave from "./UseBeforeLeave";
import UseFadeIn from "./UseFadeIn";
import UseNetwork from "./UseNetwork";
import UseScroll from "./UseScroll";
import UseFullScreen from "./UseFullScreen";
import UseNotification from "./UseNotification";
import UseAxios from "./UseAxios";

const App = () => {
  return (
    <div style={{ width: "200vh", height: "150vh" }}>
      <UseInput />
      <UseTabs />
      <UseTitle />
      <UseClick />
      <UseConfirm />
      <UsePreventLeave />
      <UseBeforeLeave />
      <UseFadeIn />
      <UseNetwork />
      <UseScroll />
      <UseFullScreen />
      <UseNotification />
      <UseAxios />
    </div>
  );
};

export default App;
