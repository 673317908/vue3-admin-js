/**
 * 手机号验证 
 */
export function ValidateUserName(value) {
    let regPhone = /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/;
    return regPhone.test(value)
}

/**
 * 密码验证 
 */
export function ValidatePassword(value) {
    let regPass = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
    return regPass.test(value)
}


/**
 * 验证码验证 
 */
export function ValidateCode(value) {
    let regCode = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6}$/;
    return regCode.test(value)
}