<template>
  <div>
    <template v-for="item in routerList" :key="item.path">
      <a-sub-menu>
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
      </a-sub-menu>
    </template>
  </div>
</template>

<script>
import { onMounted, toRefs } from "vue";
export default {
  props: {
    routerList: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const routerList = toRefs(props.routerList);
    onMounted(() => {
      console.log(props.routerList);
    });
    return {
      routerList,
    };
  },
};
</script>

<style scoped lang="scss">
</style>
