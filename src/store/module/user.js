import {getInfo, logout} from "../../api/user";

const state = {
    mc_id: 0,
    mc_name: '',
    name: '',
    email: ''
}
const mutations = {
    SET_MC_ID(state, mc_id) {
        state.mc_id = mc_id
    },
    SET_MC_NAME(state, mc_name) {
        state.mc_name = mc_name
    },
    SET_NAME(state, name) {
        state.name = name
    },
    SET_EMAIL(state, email) {
        state.email = email
    }
}
const actions = {
    getInfo({commit}) {
        return new Promise((resolve, reject) => {
            getInfo().then(res => {
                const {mc_id, mc_name} = res
                commit('SET_MC_ID', mc_id)
                commit('SET_MC_NAME', mc_name)
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    logout({commit}) {
        return new Promise((resolve, reject) => {
            logout().then(() => {
                commit('SET_MC_ID', 0)
                commit('SET_MC_NAME', '')
                resolve()
            }).catch(() => reject())
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}