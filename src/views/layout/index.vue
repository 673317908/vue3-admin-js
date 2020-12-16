<template>
  <div>
    <Aside />
    <Heade />
    <Main />
  </div>
</template>

<script>
import Aside from "./Aside";
import Heade from "./Header";
import Main from "./Main";
export default {
  name: "layout",
  components: {
    Aside,
    Heade,
    Main,
  },
};
</script>

<style scoped lang="scss"></style>
