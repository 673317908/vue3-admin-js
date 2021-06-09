<template>
  <div class="layout">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider
        v-model:collapsed="collapsedStatus"
        :trigger="null"
        collapsible
      >
        <div class="logo" />
        <Aside />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <Heade />
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="activeCollapsed"
          />
          <menu-fold-outlined v-else class="trigger" @click="activeCollapsed" />
        </a-layout-header>
        <Breadcrumb />
        <a-layout-content
          :style="{
            margin: '0 16px 24px',
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
import { computed, reactive, toRefs } from "vue";
import Breadcrumb from "../../components/breadcrumb/index";
import { useStore } from "vuex";
export default {
  name: "layout",
  components: {
    Aside,
    Heade,
    Main,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    Breadcrumb,
  },
  setup() {
    const store = useStore();
    const LayoutData = reactive({
      collapsed: store.state.layout.collapsedStatus,
    });
    const activeCollapsed = () => {
      LayoutData.collapsed = !LayoutData.collapsed;
      store.commit("layout/SET_COLLAPSED", LayoutData.collapsed);
    };
    const data = toRefs(LayoutData);
    const collapsedStatus = computed(() => {
      return store.state.layout.collapsedStatus;
    });
    return {
      ...data,
      activeCollapsed,
      collapsedStatus,
    };
  },
};
</script>

<style lang="scss">
.ant-layout-sider {
  flex: 0 0 260px;
  max-width: 260px;
  min-width: 260px;
  width: 260px;
}
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
