<template>
  <div>
    <a-menu
      v-model:openKeys="data.openKeys"
      v-model:selectedKeys="data.selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="data.collapsed"
      @click="selectedMenu"
      @openChange="openChange"
    >
      <template v-for="item in routers">
        <!-- 无子菜单 -->
        <template v-if="item.meta.hidden">
          <a-menu-item v-if="!item.children" :key="item.path">
            <router-link :to="item.path">
              <component :is="item.meta.icon" />
              <span>{{
                $t(`aside_menu.${item.meta && item.meta.language}`)
              }}</span>
            </router-link>
          </a-menu-item>
          <!-- 有子菜单 -->
          <Menu v-else :routerItem="item" :key="item.path" />
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { HomeOutlined } from "@ant-design/icons-vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import Menu from "./component/menu";
import { useStore } from "vuex";
export default {
  components: {
    Menu,
    HomeOutlined,
  },
  setup() {
    const store = useStore();
    const { options } = useRouter();
    const routers = options.routes;
    const data = reactive({
      selectedKeys: store.state.layout.selectedKeys,
      openKeys: store.state.layout.openKeys,
      collapsed: false,
    });
    const selectedMenu = ({ item, key, keyPath }) => {
      data.selectedKeys = [key];
      store.commit("layout/SET_SELECTED_KEYS", data.selectedKeys);
    };
    const openChange = (openKeys) => {
      data.openKeys = openKeys;
      store.commit("layout/SET_OPEN_KEYS", data.openKeys);
    };
    return { data, routers, openChange, selectedMenu };
  },
};
</script>

<style scoped lang="less"></style>
