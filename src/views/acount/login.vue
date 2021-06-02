<template>
  <div class="account">
    <div class="form_warp">
      <a-form
        name="custom-validation"
        ref="ruleForm"
        :model="register_form"
        :rules="rulesForm"
        @finish="handleFinish"
        v-bind="layout"
        labelAlign="left"
      >
        <a-form-item required name="username" :label="$t('account.user_name')">
          <a-input
            v-model:value="register_form.username"
            type="text"
            :placeholder="$t('account.user_name_placeholder')"
          />
        </a-form-item>
        <a-form-item required name="password" :label="$t('account.password')">
          <a-input
            v-model:value="register_form.password"
            type="password"
            :placeholder="$t('account.password_placeholder')"
          />
        </a-form-item>
        <a-form-item
          required
          name="code"
          :label="$t('account.verification_code')"
        >
          <a-row :gutter="16">
            <a-col :span="12">
              <a-input
                v-model:value="register_form.code"
                maxlength="6"
                :placeholder="$t('account.verification_code_placeholder')"
            /></a-col>
            <a-col :span="12">
              <a-button type="danger" block>{{
                $t("account.get_code")
              }}</a-button>
            </a-col>
          </a-row>
        </a-form-item>
        <!-- <a-form-item> -->
        <Captcha />
        <!-- </a-form-item> -->
        <a-form-item>
          <a-button
            style="margin-left: 25%"
            type="primary"
            html-type="submit"
            block
            >{{ $t("account.login") }}</a-button
          >
        </a-form-item>
      </a-form>
      <div class="fs_12" style="margin: 20px 0;color: #eee;">
        <router-link to="/forget" class="color_gray">{{
          $t("account.forget")
        }}</router-link>
        <span style="margin: 0 10px" class="color_gray">|</span>
        <router-link to="/register" class="color_gray">{{
          $t("account.register")
        }}</router-link>
      </div>
    </div>
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
export default {
  components: {
    Captcha,
  },
  setup() {
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
        labelCol: { span: 5 },
        wrapperCol: { span: 14 },
      },
      register_form: {
        username: "",
        password: "",
        code: "",
      },
      rulesForm: {
        username: [{ validator: checkUserName, trigger: "change" }],
        password: [{ validator: checkPassword, trigger: "change" }],
        code: [{ validator: checkCode, trigger: "change" }],
      },
    });
    const data = toRefs(layoutConfig);

    // 提交
    const handleFinish = () => {};
    onMounted(() => {});
    return {
      ...data,
      handleFinish,
    };
  },
};
</script>

<style scoped lang="scss">
@import "./login.scss";
</style>
