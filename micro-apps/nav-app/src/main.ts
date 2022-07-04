import "./public-path";
import { createApp } from "vue";
import { createPinia } from "pinia";
import {
  qiankunWindow,
  renderWithQiankun,
} from "vite-plugin-qiankun/dist/helper";
import App from "./App.vue";
import routes from "./router";
import type { QiankunProps } from "vite-plugin-qiankun/es/helper";
import { createRouter, createWebHistory } from "vue-router";

// const { name } = await import("../package.json");
import { name } from "../package.json";
console.log(name);

let router = null;
let instance: App = null;

function render(props: any) {
  const { container } = props;
  router = createRouter({
    history: createWebHistory(
      !qiankunWindow.__POWERED_BY_QIANKUN__ ? "/" : "/"
    ),
    routes,
  });

  instance = createApp(App);
  instance.use(router);
  instance.use(createPinia());
  console.log("===============navigatorContainer===============");
  instance.mount(
    container
      ? container.querySelector("#navigatorContainer")
      : "#navigatorContainer"
  );
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}

renderWithQiankun({
  bootstrap(): void | Promise<void> {
    // return undefined;
  },
  mount(props: QiankunProps): void | Promise<void> {
    console.log(props);
    render(props);
    // return undefined;
  },
  unmount(props: QiankunProps): void | Promise<void> {
    // return undefined;
  },
  update(props: QiankunProps): void | Promise<void> {
    // return undefined;
  },
});
