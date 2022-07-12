<template>
  <div>
    <HelloWorld msg="123" />
    <router-view />
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld";
export default {
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss"></style>
