<template>
  <div>
    <a-sub-menu>
      <template #title>
        <span
          ><MailOutlined /><span>{{
            $t(`aside_menu.${routerItem.meta && routerItem.meta.language}`)
          }}</span></span
        >
      </template>
      <template v-if="routerItem.children.length">
        <template v-for="chil in routerItem.children" :key="chil.path">
          <router-link :to="chil.path">
            <a-menu-item>{{
              $t(`aside_menu.${chil.meta && chil.meta.language}`)
            }}</a-menu-item>
          </router-link>
        </template>
      </template>
    </a-sub-menu>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
export default {
  props: {
    routerItem: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const data = reactive({
      routerItem: props.routerItem,
    });
    onMounted(() => {});
    return {
      ...data,
    };
  },
};
</script>

<style scoped lang="scss">
</style>
