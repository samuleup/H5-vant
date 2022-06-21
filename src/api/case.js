import axios from 'utils/request.js'
export const UserLogin = (data) => {
    return axios.request({
        url: "/api/admin/login",
        method: "get",
        title: "正在登录,请稍后", //设置加载title
        data
    })
}
// export const UserLogin = (data) => {
//     return axios.request({
//         url: "/admin/login",
//         method: "post",
//         headers: { 'showLoading': false }, //设置不启用接口响应加载
//         data
//     })
// }
// export const UserLogin = (data) => {
//     return axios.request({
//         url: "/admin/login",
//         method: "post",
//         title: "正在登录,请稍后", //设置加载title
//         headers: { 'loadingTarget': '#dialogContent' }, //指定位置加载
//         data
//     })
// }