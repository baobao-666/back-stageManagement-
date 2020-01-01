// 用户权限接口文档
import { getList, getidentity, getviews, getapi, getidentity_api, getidentity_view , UpdateTheAvatar } from '@/api/userList'

const state = {
  userList: [],//原展示用户数据
  userListed: [],//展示用户数据
  //
  identity: [],//原身份数据
  identityed:[],//身份数据

  
  
  //
  api: [],//原api权限数据
  apied: [],//api权限数据
  //
  identity_api: [],//原api和身份权限关系
  identity_apied: [],//api和身份权限关系
  //
  view_id: [],//原身份和视图权限关系
  view_ided: [],//身份和视图权限关系
  page: 10, //每页的数据
  currenpage: 1 //初始页


}

const mutations = {

  //展示用户数据
  getuser(state, payload) {
    state.userList = payload
    handle(payload)


  },
  //获取身份ID
  getuserID(state, payload) {
    state.identity = payload
    creadidentity(payload)



  },
  //视图权限
  getviewID(state, payload) {
    state.views = payload
    creadeviews(payload)

  },
  //api权限数据
  getapiId(state, payload) {
    state.api = payload
    creadapi(payload)

  },
  //api和身份权限关系数据
  getidentity_api(state, payload) {
    state.identity_api = payload
    creadidentity(payload)

  },
  //身份和视图权限关系
  getview_token(state, payload) {
    state.view_id = payload
    creadeided(payload)

  },
  handleCurrent(state, payload) {
    state.currenpage = payload
    handle(state.userList)
    creadeviews(state.views)
    creadapi(state.api)
    creadidentity(state.identity_api)
    creadeided(state.view_id)
    creadshen(state.identity)



  },
  handlePage(state, payload) {
    state.page = payload
    handle(state.userList)
    creadeviews(state.views)
    creadapi(state.api)
    creadidentity(state.identity_api)
    creadeided(state.view_id)
    creadshen(state.identity)

  },
}
function handle(data) {
  state.userListed = data.slice((state.currenpage - 1) * state.page, state.page * state.currenpage)
}
function creadeviews(data) {
  state.viewsed = data.slice((state.currenpage - 1) * state.page, state.page * state.currenpage)
}
function creadapi(data) {
  state.apied = data.slice((state.currenpage - 1) * state.page, state.page * state.currenpage)
}
function creadidentity(data) {
  state.identity_apied = data.slice((state.currenpage - 1) * state.page, state.page * state.currenpage)
}
function creadeided(data) {
  state.view_ided = data.slice((state.currenpage - 1) * state.page, state.page * state.currenpage)
}
function creadshen(data){
  state.identityed = data.slice((state.currenpage - 1) * state.page, state.page * state.currenpage)
}

const actions = {
  // 
  async getList({ commit }, payload) {
    let res = await getList(payload)
    //console.log(res.data)
    commit('getuser', res.data)
  },
  // 
  async getidentity({ commit }, payload) {
    let res = await getidentity(payload)
    //console.log(res.data)
    commit('getuserID', res.data)
  },
  //
  async getviews({ commit }, payload) {
    let res = await getviews(payload)
    console.log(res.data)
    commit('getviewID', res.data)
  },
  //
  async getapi({ commit }, payload) {
    let res = await getapi(payload)
    //console.log(res.data)
    commit('getapiId', res.data)
  },
  //
  async getidentity_api({ commit }, payload) {
    let res = await getidentity_api(payload)
    //console.log(res.data)
    commit('getidentity_api', res.data)
  },
  //
  async getidentity_view({ commit }, payload) {
    let res = await getidentity_view(payload)
    // console.log(res.data)
    commit('getview_token', res.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}