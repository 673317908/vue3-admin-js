<template>
  <div>
    <a-menu mode="inline" theme="dark">
      <a-sub-menu>
        <template #title>
          <component :is="proxy.$antIcons[routerItem.meta.icon]" />
          <span class="anticon">{{
            $t(`aside_menu.${routerItem.meta && routerItem.meta.language}`)
          }}</span>
        </template>
        <template v-if="routerItem.children.length">
          <template v-for="chil in routerItem.children" :key="chil.path">
            <a-menu-item v-if="!chil.children" :key="chil.path">
              <router-link :to="chil.path">
                <span>{{
                  $t(`aside_menu.${chil.meta && chil.meta.language}`)
                }}</span>
              </router-link>
            </a-menu-item>
            <Menu v-else :routerItem="chil" :key="chil.path" />
          </template>
        </template>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted, reactive } from "vue";
export default {
  name: "Menu",
  components: {},
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
    const { proxy } = getCurrentInstance();
    onMounted(() => {});
    return {
      ...data,
      proxy,
    };
  },
};
</script>

<style scoped lang="scss">
</style>
