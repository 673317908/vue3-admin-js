<template>
  <div class="account">
    <a-form
      name="custom-validation"
      ref="ruleForm"
      :model="register_form"
      :rules="rulesForm"
      @finish="handleFinish"
      v-bind="layout"
      class="form_warp"
    >
      <!-- class="registerForm sign-up-form" -->
      <a-form-item required name="username">
        <label>{{ $t("account.user_name") }}</label>
        <a-input
          v-model:value="register_form.username"
          :placeholder="$t('account.user_name_placeholder')"
          type="text"
        />
      </a-form-item>
      <a-form-item required name="password">
        <label>{{ $t("account.password") }}</label>
        <a-input
          v-model:value="register_form.password"
          type="password"
          :placeholder="$t('account.password_placeholder')"
        />
      </a-form-item>
      <a-form-item required name="passwords">
        <label>{{ $t("account.confirm_password") }}</label>
        <a-input v-model:value="register_form.passwords" type="password" />
      </a-form-item>
      <a-form-item required name="code">
        <label>{{ $t("account.verification_code") }}</label>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-input
              v-model:value="register_form.code"
              maxlength="6"
              :placeholder="$t('account.verification_code_placeholder')"
          /></a-col>
          <a-col :span="12">
            <a-button
              type="danger"
              block
              @click="getCode"
              :loading="btnLoading"
              :disabeld="btnDisabeld"
            >
              {{ btnText }}
            </a-button>
          </a-col>
        </a-row>
      </a-form-item>
      <a-form-item>
        <Captcha />
      </a-form-item>
      <a-form-item style="justify-content: center">
        <a-button type="primary" html-type="submit" block class="submit">{{
          $t("account.register")
        }}</a-button>
      </a-form-item>
      <div class="fs_12" style="margin: 40px 0 0; text-align: right">
        <router-link to="/forget" class="color_white">{{
          $t("account.forget")
        }}</router-link>
        <span style="margin: 0 10px" class="color_gray">|</span>
        <router-link to="/forget" class="color_white">{{
          $t("account.login")
        }}</router-link>
      </div>
    </a-form>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import Captcha from "../../components/Captcha/index";
import {
  ValidateUserName,
  ValidatePassword,
  ValidateCode,
} from "../../utils/check";
import { message } from "ant-design-vue";
export default {
  components: {
    Captcha,
  },
  setup(props, { emit }) {
    const checkUserName = async (rule, value, callback) => {
      if (!value) {
        return Promise.reject("请输入用户名");
      } else if (!ValidateUserName(value)) {
        return Promise.reject("请输入正确格式手机号码");
      } else {
        return Promise.resolve();
      }
    };
    const checkPassword = async (rule, value, callback) => {
      if (!value) {
        return Promise.reject("请输入密码");
      } else if (!ValidatePassword(value)) {
        return Promise.reject("请输入正确格式密码,6-20位数字+字母");
      } else {
        return Promise.resolve();
      }
    };
    const checkPasswords = async (rule, value, callback) => {
      if (!value) {
        return Promise.reject("请输入确认密码");
      } else if (value != layoutConfig.register_form.password) {
        return Promise.reject("两次输入的密码不一致");
      } else {
        return Promise.resolve();
      }
    };
    const checkCode = async (rule, value, callback) => {
      if (!value) {
        return Promise.reject("请输入验证码");
      } else if (!ValidateCode(value)) {
        return Promise.reject("请输入6位数字+字母验证码");
      } else {
        return Promise.resolve();
      }
    };
    const layoutConfig = reactive({
      layout: {
        wrapperCol: { span: 24 },
      },
      register_form: {
        username: "",
        password: "",
        passwords: "",
        code: "",
      },
      rulesForm: {
        username: [{ validator: checkUserName, trigger: "change" }],
        password: [{ validator: checkPassword, trigger: "change" }],
        passwords: [{ validator: checkPasswords, trigger: "change" }],
        code: [{ validator: checkCode, trigger: "change" }],
      },
    });
    const btn = reactive({
      btnText: "获取验证码",
      btnLoading: false,
      btnDisabeld: false,
      timeId: null,
    });
    const data = toRefs(layoutConfig);
    const btnData = toRefs(btn);
    // 获取验证码
    const getCode = () => {
      var time = 5;
      if (!layoutConfig.register_form.username) {
        message.error("用户民不能为空");
        return false;
      }
      if (btn.timeId) {
        clearInterval(btn.timeId);
      }
      btn.btnText = "发送中";
      btn.btnLoading = true;
      btn.timeId = setInterval(() => {
        time--;
        btn.btnText = time + "秒";
        btn.btnDisabeld = true;
        if (time == 0) {
          btn.btnText = "重新获取";
          btn.btnDisabeld = false;
          btn.btnLoading = false;
          clearInterval(btn.timeId);
        }
      }, 1000);
    };
    const login = () => {
      emit("signUpModeActive");
    };
    // 提交
    const handleFinish = () => {};
    onMounted(() => {});
    return {
      ...data,
      ...btnData,
      handleFinish,
      getCode,
      login,
    };
  },
};
</script>

<style scoped lang="scss">
@import "./login.scss";
</style>
