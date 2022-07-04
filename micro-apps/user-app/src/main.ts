import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import routes from "./router";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import type { QiankunProps } from "vite-plugin-qiankun/es/helper";
import { createRouter, createWebHistory } from "vue-router";

let instance: App = null;
let router = null;

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
  console.log("=============userContainer=================");
  instance.mount(
    container ? container.querySelector("#userContainer") : "#userContainer"
  );
}
// some code
renderWithQiankun({
  update(props: QiankunProps): void | Promise<void> {
    return undefined;
  },
  mount(props) {
    console.log("mount");
    render(props);
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount(props: any) {
    console.log("unmount");
    console.log(props);
    instance.unmount();
    instance.$el.innerHTML = "";
    instance = null;
    router = null;
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}

//
