<template>
  <div class="captcha_wrap">
    <div id="captcha_dom" class="nc-container"></div>
  </div>
</template>

<script>
import "./captcha";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
export default {
  name: "captcha",
  setup() {
    const { locale } = useI18n();
    onMounted(() => {
      var nc_token = [
        "FFFF0N00000000009AF1",
        new Date().getTime(),
        Math.random(),
      ].join(":");
      var NC_Opt = {
        renderTo: "#captcha_dom",
        appkey: "FFFF0N00000000009AF1",
        scene: "nc_login",
        token: nc_token,
        customWidth: 365,
        trans: { key1: "code0" },
        elementID: ["usernameID"],
        is_Opt: 0,
        language: "cn",
        isEnabled: true,
        timeout: 3000,
        times: 5,
        apimap: {
          // 'analyze': '//a.com/nocaptcha/analyze.jsonp',
          // 'get_captcha': '//b.com/get_captcha/ver3',
          // 'get_captcha': '//pin3.aliyun.com/get_captcha/ver3'
          // 'get_img': '//c.com/get_img',
          // 'checkcode': '//d.com/captcha/checkcode.jsonp',
          // 'umid_Url': '//e.com/security/umscript/3.2.1/um.js',
          // 'uab_Url': '//aeu.alicdn.com/js/uac/909.js',
          // 'umid_serUrl': 'https://g.com/service/um.json'
        },
        callback: function (data) {
          window.console && console.log(nc_token);
          window.console && console.log(data.csessionid);
          window.console && console.log(data.sig);
        },
      };
      var nc = new noCaptcha(NC_Opt);
      nc.upLang("cn", {
        _startTEXT:
          locale.value == "ch"
            ? "请按住滑块，拖动到最右边"
            : "Slide to the far right",
        _yesTEXT: locale.value == "ch" ? "验证通过" : "Verification by",
        _error300:
          locale.value == "ch"
            ? '哎呀，出错了，点击<a href="javascript:__nc.reset()">刷新</a>再来一次'
            : 'Error,click the<a href="javascript:__nc.reset()">refresh</a>try again',
        _errorNetwork:
          locale.value == "ch"
            ? '网络不给力，请<a href="javascript:__nc.reset()">Click the refresh</a>'
            : 'The network is not good，Please<a href="javascript:__nc.reset()">Click the refresh</a>',
      });
    });
    return {};
  },
};
</script>

<style lang="scss">
.nc-container {
  margin: 20px 0 !important;
}
.nc-container #nc_1_wrapper {
  width: auto !important;
}
.nc-container .nc_scale span {
  height: auto !important;
}
.nc-container .nc_scale .btn_ok {
  line-height: 32px !important;
}
</style>
