// 试题管理接口文档
import {
  getTestQuestionsType,         // 考试类型数据
  getCourseType,                // 课程类型数据
  getTopicQuestionsType,        // 题目类型数据
  addTestQuestions              //添加试题
} from '@/api/TestQuestionManagement';

import {
  getUserAddress  // 获取当前用户信息 
} from '@/api/userPermission'
const state = {
    examList:[],    //  所有的 考试 类型数据
    courseList:[],  //  所有的 课程 类型数据
    topicList:[],   //  所有的 题目 类型数据 
    userAddress:{}     // 当前用户信息
}

const mutations = {
  // 考试类型数据
  getClassifyList(state,payload){
    state.examList = payload;
  },
  // 课程类型数据
  getCourseList(state,payload){
    state.courseList = payload;
  },
  // 题目类型数据
  getTopicList(state,payload){
    state.topicList = payload;
  },

  // 用户信息  
  setUserAddress(state,payload){
    state.userAddress = payload;
  }
}

  
const actions = {
  // 考试类型数据
  async getTestQuestionsType({commit}){
    let res =await getTestQuestionsType();
    console.log('ressss',res);
    commit('getClassifyList',res.data)
  },

  // 课程类型数据
  async getCourseType({commit}){
    let res =await getCourseType();
    console.log('reseeee',res);
    commit('getCourseList',res.data)
  },

  // 题目类型数据
  async getTopicQuestionsType({commit}){
    let res =await getTopicQuestionsType();
    console.log('rescccc',res);
    commit('getTopicList',res.data)
  },

  // 获取当前用户信息  
  async getUserAddress({commit}){
    let res =await getUserAddress();
    console.log('user',res);
    commit('setUserAddress',res.data)
  },

  // 添加试题
  async addTestQuestions({commit},payload){
    await addTestQuestions(payload);
  },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }