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
          <router-link :to="item.path">
            <a-menu-item v-if="item.meta.hidden" :key="item.path">
              <span>{{ item.meta && item.meta.title }}</span>
            </a-menu-item>
          </router-link>
        </template>
        <!-- 有子菜单 -->
        <a-sub-menu v-else :key="item.path">
          <template #title>
            <span
              ><MailOutlined /><span>{{ item.meta && item.meta.title }}</span></span
            >
          </template>
          <template v-if="item.children.length">
            <template v-for="chil in item.children" :key="chil.path">
              <router-link :to="chil.path">
                <a-menu-item>{{ chil.meta && chil.meta.title }}</a-menu-item>
              </router-link>
            </template>
          </template>
        </a-sub-menu>
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
export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
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
