// 试题管理接口文档
import {
  getTestQuestionsType,         // 考试类型数据
  getCourseType,                // 课程类型数据
  getTopicQuestionsType,        // 题目类型数据
  addTestQuestions,              //添加试题
  getTestQuestions,               // 所有试题
  getSearchTestQuestions,          // 查询数据
  UpdateTestQuestions ,            // 更新试题
  addTestQuestionsType            // 添加试题类型
} from '@/api/TestQuestionManagement';

import {
  getUserAddress  // 获取当前用户信息 
} from '@/api/userPermission'
const state = {
    examList:[],    //  所有的 考试 类型数据
    courseList:[],  //  所有的 课程 类型数据
    topicList:[],   //  所有的 题目 类型数据 
    userAddress:{},     // 当前用户信息
    testQuestionsList:[], // 所有试题数据
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
  },

  // 所有试题数据
  setTestQuestions(state,payload){
    state.testQuestionsList = payload;
  },

  // 查询渲染 赋值查询的数据
  updateSearch(state,payload){
    state.testQuestionsList = payload;
  }
}

  
const actions = {
  // 考试类型数据
  async getTestQuestionsType({commit}){
    let res =await getTestQuestionsType();
    commit('getClassifyList',res.data)
  },

  // 课程类型数据
  async getCourseType({commit}){
    let res =await getCourseType();
    commit('getCourseList',res.data)
  },

  // 题目类型数据
  async getTopicQuestionsType({commit}){
    let res =await getTopicQuestionsType();
    commit('getTopicList',res.data)
  },

  // 获取当前用户信息  
  async getUserAddress({commit}){
    let res =await getUserAddress();
    commit('setUserAddress',res.data)
  },

  // 添加试题
  async addTestQuestions({commit},payload){
     await addTestQuestions(payload);
  },

  // 所有试题
  async getTestQuestions({commit},payload){
   let res= await getTestQuestions(payload);
    commit('setTestQuestions',res.data)
 },

  // 查询数据
  async getSearchTestQuestions({commit},payload){
    let params={};
    if(payload.questions_type_id){
      params.questions_type_id=payload.questions_type_id
    }
    if(payload.subject_id){
      params.subject_id=payload.subject_id
    }
    if(payload.exam_id){
      params.exam_id=payload.exam_id
    }
    let res= await getSearchTestQuestions(params);
     commit('setTestQuestions',res.data)
  },

  // 更新试题
  async UpdateTestQuestions({commit},payload){
    // let data = payload
    console.log('loasd',payload);
    await UpdateTestQuestions(payload);
 },

 // 添加试题类型
  async addTestQuestionsType({commit},payload){
    await addTestQuestionsType(payload);
  }
  
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }