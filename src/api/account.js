import serve from "../utils/request"

// 用户名检测
export function userNameCheck(data) {
  return serve.request({
    url: "/account/check",
    method: "POST",
    data
  })
}

// 获取验证码
export function sendCode(data) {
  return serve.request({
    url: "/getCode/",
    method: "POST",
    data
  })
}

// 注册
export function Register(data) {
  return serve.request({
    url: "/account/register",
    method: "POST",
    data
  })
}

// 登录
export function Login(data) {
  return serve.request({
    url: "/account/login",
    method: "POST",
    data
  })
}