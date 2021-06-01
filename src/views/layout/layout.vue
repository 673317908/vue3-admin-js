<template>
  <div class="layout">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <Aside />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <Heade />
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
        </a-layout-header>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px',
          }"
        >
          <Main />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Aside from "./aside/Aside";
import Heade from "./Header";
import Main from "./Main";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import { reactive, toRefs } from "vue";
export default {
  name: "layout",
  components: {
    Aside,
    Heade,
    Main,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
    const LayoutData = reactive({
      collapsed: true,
    });
    const data = toRefs(LayoutData);
    return {
      ...data,
    };
  },
};
</script>

<style lang="scss">
.ant-layout.ant-layout-has-sider {
  height: 100vh !important;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
