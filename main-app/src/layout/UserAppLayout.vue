<template>
  <div id="userContainer"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { loadMicroApp } from "qiankun";

onMounted(() => {
  const userApp = loadMicroApp({
    name: "user-app",
    entry: "//localhost:3003",
    container: "#userContainer",
    props: { brand: "qiankun", name: "dept-app" },
  });
});
</script>

<style scoped></style>
