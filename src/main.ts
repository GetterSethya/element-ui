import { mount } from "svelte";
import "./app.css";
import App from "./App.svelte";
import { init } from "@wjfe/n-savant";

init({ implicitMode: "path", full: true, trace: { routerHierarchy: true } });
const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
