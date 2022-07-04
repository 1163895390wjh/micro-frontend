<template>
  <div id="navigatorContainer"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { loadMicroApp } from "qiankun";

onMounted(() => {
  const navApp = loadMicroApp({
    name: "nav-app", // app name registered
    entry: "//localhost:3001",
    container: "#navigatorContainer",
    props: { brand: "qiankun", name: "nav-app" },
  });
});
</script>

<style scoped></style>
