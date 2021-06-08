<template>
  <div>
    <a-sub-menu>
      <template #title>
        <component :is="routerItem.meta.icon" />
        <span
          ><span>{{
            $t(`aside_menu.${routerItem.meta && routerItem.meta.language}`)
          }}</span></span
        >
      </template>
      <template v-if="routerItem.children.length">
        <template v-for="chil in routerItem.children" :key="chil.path">
          <a-menu-item v-if="!chil.children" :key="chil.path">
            <router-link :to="chil.path">
              {{ $t(`aside_menu.${chil.meta && chil.meta.language}`) }}
            </router-link>
          </a-menu-item>
          <Menu v-else :routerItem="chil" :key="chil.path" />
        </template>
      </template>
    </a-sub-menu>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import {
  DashboardOutlined,
  ContainerOutlined,
  CodeSandboxOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
export default {
  name: "Menu",
  components: {
    DashboardOutlined,
    ContainerOutlined,
    CodeSandboxOutlined,
    UserOutlined,
  },
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
