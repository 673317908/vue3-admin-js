<template>
  <div id="header">
    <div class="header_menu">
      <a-dropdown>
        <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
          Hover me <DownOutlined />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item key="0">
              <div class="menu_item">18377729559</div>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="1">
              <div class="menu_item">
                <span
                  style="margin: 0 10px"
                  :class="languageCss == item.value ? 'current' : ''"
                  v-for="item in language"
                  :key="item.label"
                  @click="cutLanguage(item)"
                  >{{ item.label }}</span
                >
              </div>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="2">
              <div class="menu_item">
                {{ $t("header_menu.loginOut") }}
              </div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import { DownOutlined } from "@ant-design/icons-vue";
import { onMounted, reactive, toRefs } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
export default {
  components: {
    DownOutlined,
  },
  setup() {
    const store = useStore();
    const { locale } = useI18n({ useScope: "global" });
    const languageData = reactive({
      language: [
        {
          label: "中文",
          value: "ch",
        },
        {
          label: "EN",
          value: "en",
        },
      ],
      languageCss: store.state.layout.language,
    });
    const lang = toRefs(languageData);
    const cutLanguage = (item) => {
      locale.value = item.value;
      languageData.languageCss = item.value;
      store.commit("layout/SET_LANGUAGE", item.value);
    };
    onMounted(() => {
      locale.value = store.state.layout.language;
    });
    return {
      ...lang,
      cutLanguage,
    };
  },
};
</script>

<style scoped lang="scss">
#header {
  padding: 0 20px;
  .header_menu {
    float: right;
  }
}
.menu_item {
  font-family: "黑体";
  font-weight: 700;
  color: #aeaeae;
  text-align: center;
}
.current {
  color: #333333 !important;
}
</style>
