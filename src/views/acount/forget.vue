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
      >
        <a-form-item required name="username">
          <label>用户名</label>
          <a-input v-model:value="register_form.username" type="text" placeholder="" />
        </a-form-item>
        <a-form-item required name="password">
          <label>密码</label>
          <a-input v-model:value="register_form.password" type="password" placeholder="" />
        </a-form-item>
        <a-form-item required name="passwords">
          <label>确认密码</label>
          <a-input v-model:value="register_form.passwords" type="password" placeholder="" />
        </a-form-item>
        <a-form-item required name="code">
          <label>验证码</label>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-input v-model:value="register_form.code" maxlength="6"
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
        <a-form-item>
          <a-button type="primary" html-type="submit" block>重置密码</a-button>
        </a-form-item>
      </a-form>
      <div class="fs_12" style="margin:20px 0;text-align:right;">
        <router-link to="/login" class="color_white">登录</router-link>
        <span style="margin:0 10px;" class="color_white">|</span>
        <router-link to="/register" class="color_white">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import Captcha from "../../components/Captcha/index";
import { ValidateUserName, ValidatePassword, ValidateCode } from "../../utils/check";
import { message } from "ant-design-vue";
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
    // 提交
    const handleFinish = () => {};
    onMounted(() => {});
    return {
      ...data,
      ...btnData,
      handleFinish,
      getCode,
    };
  },
};
</script>

<style scoped lang="scss">
@import "./login.scss";
</style>
