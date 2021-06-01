<template>
  <div>
    <a-menu
      v-model:openKeys="data.openKeys"
      v-model:selectedKeys="data.selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="data.collapsed"
    >
      <template v-for="item in routers">
        <!-- 无子菜单 -->
        <template v-if="!item.children">
          <router-link :to="item.path" :key="item.path">
            <a-menu-item v-if="item.meta.hidden">
              <span>{{
                $t(`aside_menu.${item.meta && item.meta.language}`)
              }}</span>
            </a-menu-item>
          </router-link>
        </template>
        <!-- 有子菜单 -->
        <Menu v-else :routerList="item.children" />
        <!-- <a-sub-menu>
          <template #title>
            <span
              ><MailOutlined /><span>{{
                $t(`aside_menu.${item.meta && item.meta.language}`)
              }}</span></span
            >
          </template>
          <template v-if="item.children.length">
            <template v-for="chil in item.children" :key="chil.path">
              <router-link :to="chil.path">
                <a-menu-item>{{
                  $t(`aside_menu.${chil.meta && chil.meta.language}`)
                }}</a-menu-item>
              </router-link>
            </template>
          </template>
        </a-sub-menu> -->
      </template>
    </a-menu>
  </div>
</template>

<script>
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from "@ant-design/icons-vue";
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import Menu from "./component/menu";
export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
    Menu,
  },
  setup() {
    const { options } = useRouter();
    const routers = options.routes;
    const data = reactive({
      selectedKeys: ["1"],
      openKeys: ["sub1"],
      preOpenKeys: ["sub1"],
      collapsed: false,
    });
    return { data, routers };
  },
};
</script>

<style scoped lang="less"></style>
