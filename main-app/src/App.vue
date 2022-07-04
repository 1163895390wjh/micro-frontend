<script setup lang="ts">
import { onMounted } from "vue";
import { loadMicroApp } from "qiankun";
onMounted(() => {
  //路由方式加载子应用
  // registerMicroApps([
  //   {
  //     name: "nav-app", // app name registered
  //     entry: "//localhost:3001",
  //     container: "#navigatorContainer",
  //     activeRule: () => true,
  //   },
  //   {
  //     name: "dept-app",
  //     entry: "//localhost:3004",
  //     container: "#deptContainer",
  //     activeRule: () => true,
  //   },
  //   // {
  //   //   name: "footer-app",
  //   //   entry: "//localhost:3002",
  //   //   container: "#footerContainer",
  //   //   activeRule: "/footerContainer",
  //   // },
  //   {
  //     name: "user-app",
  //     entry: "//localhost:3003",
  //     container: "#userContainer",
  //     activeRule: () => true,
  //   },
  // ]);
  // start({ singular: false });

  // 手动加载子应用、
  const navApp = loadMicroApp({
    name: "nav-app", // app name registered
    entry: "//localhost:3001",
    container: "#navigatorContainer",
    props: { brand: "qiankun", name: "nav-app" },
  }).bootstrapPromise.then(() => {
    const deptApp = loadMicroApp({
      name: "dept-app",
      entry: "//localhost:3004",
      container: "#deptContainer",
      props: { brand: "qiankun", name: "dept-app" },
    }).bootstrapPromise.then(() => {
      const userApp = loadMicroApp({
        name: "user-app",
        entry: "//localhost:3003",
        container: "#userContainer",
        props: { brand: "qiankun", name: "user-app" },
      }).bootstrapPromise.then(() => {
        const footerApp = loadMicroApp({
          name: "footer-app",
          entry: "//localhost:3002",
          container: "#footerContainer",
          props: { brand: "qiankun", name: "footer-app" },
        });
      });
    });
  });
});
</script>

<template>
  <!--  <nav>-->
  <!--    <RouterLink to="/navigatorContainer">nav-app</RouterLink>-->
  <!--    &lt;!&ndash;    <RouterLink to="/footerContainer">footer-app</RouterLink>&ndash;&gt;-->
  <!--    <RouterLink to="/deptContainer">dept-app</RouterLink>-->
  <!--    &lt;!&ndash;    <RouterLink to="/">Home</RouterLink>&ndash;&gt;-->
  <!--  </nav>-->
  <div></div>
  <div class="sub-apps">
    <!--    <div><UserAppLayout /></div>-->
    <!--    <div><NavAppLayout /></div>-->
    <!--    <div><DeptAppLayout /></div>-->
    <!--    <div></div>-->
    <div id="userContainer"></div>
    <div id="deptContainer"></div>
    <div id="navigatorContainer"></div>
    <div id="footerContainer"></div>
    <!--    <RouterView />-->
  </div>
</template>

<style>
@import "./assets/base.css";
#app {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 46px 1fr;
  text-align: center;
  align-items: center;
}
nav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  line-height: 46px;
}

.sub-apps {
  display: grid;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
}
.sub-apps > div {
  //background-color: rgba(224, 185, 100, 0.89);
  //color: #f2f2f2;
  font-size: 26px;
  border: 1px solid darkgray;
  width: 100%;
  height: 100%;
}
</style>
