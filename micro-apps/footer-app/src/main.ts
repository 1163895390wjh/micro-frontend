import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import routes from "./router";
import renderWithQiankun, {
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import type { QiankunProps } from "vite-plugin-qiankun/es/helper";
import { createRouter, createWebHistory } from "vue-router";

let router = null;
let instance = null;
// some code
renderWithQiankun({
  update(props: QiankunProps): void | Promise<void> {
    return undefined;
  },
  mount(props: QiankunProps) {
    console.log("mount");
    render(props);
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount(props: QiankunProps) {
    console.log("unmount");
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}

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
  console.log("===============footerContainer===============");
  instance.mount(
    container ? container.querySelector("#footerContainer") : "#footerContainer"
  );
}
