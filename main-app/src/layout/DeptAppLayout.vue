<template>
  <div id="deptContainer"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { loadMicroApp } from "qiankun";

onMounted(() => {
  const deptApp = loadMicroApp({
    name: "dept-app",
    entry: "//localhost:3004",
    container: "#deptContainer",
    props: { brand: "qiankun", name: "dept-app" },
  });
});
</script>

<style scoped></style>
