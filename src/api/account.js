import serve from "../utils/request"

export function Register(data) {
    return serve.request({
        url: "",
        method: "POST",
        data
    })
}