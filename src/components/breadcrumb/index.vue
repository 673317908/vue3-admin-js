<template>
  <div class="breadcrumb">
    <a-breadcrumb>
      <a-breadcrumb-item
        v-for="(item, index) in routeArr.matched"
        :key="index"
        >{{
          $t(`aside_menu.${item.meta && item.meta.language}`)
        }}</a-breadcrumb-item
      >
    </a-breadcrumb>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const routeArr = useRoute();
    onMounted(() => {});
    return {
      routeArr,
    };
  },
};
</script>

<style scoped lang="scss">
.breadcrumb {
 margin:  16px;
}
</style>
