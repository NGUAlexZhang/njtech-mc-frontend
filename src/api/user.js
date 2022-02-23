import request from "../utils/request";

export const getInfo = () => {
    return request({
        url: '/user',
        method: 'get'
    })
}
export const logout = () => {
    return request({
        url: '/user/logout',
        method: 'get'
    })
}