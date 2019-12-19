// 用户权限接口文档

import request from '@/utils/request'


// 更新用户信息  
export  const updateUserMess=(params)=>request.put('/user/user',{user_id:params.user_id,user_name:params.user_name,user_pwd:params.user_pwd,identity_id:params.identity_id,avatar:params.avatar})

// 展示用户信息
export const  showUserMess =(params)=>request.get('/user/identity',{params})

// 展示身份和api权限关系
export const  showUserMessAndIP =()=>request.get('/user/identity_api_authority_relation')

// 添加用户
export const  addUserList =(params)=>request.post('/user',{user_name:params.user_name,user_pwd:params.user_pwd,identity_id:params.identity_id})

// 添加试图权限
export const  addViewId =(params)=> request.get('/user/authorityView/edit',{params})

//添加身份
export const  addUserId =(params)=> request.get('/user/identity/edit',{params})

// 添加api接口权限
export const  addApiId =(params)=> request.get('/user//user/authorityApi/edit/edit',{params})

// 给身份设定api接口权限
export const  addUserApiId =(params)=> request.get('/user/setIdentityApi',{params})

// 展示用户数据
export const  showUsserMess =()=> request.get('/user/user')

// 展示api接口权限数据
export const  showApiMess =()=> request.get('/user/api_authority')

// 获取视图权限数据
export const  showView =()=> request.get('/user/view_authority')

// 登录接口
export const  loginUser =(params)=> request.post('/user/login',{user_name:params.user_name,user_pwd:params.user_pwd})

// 获取当前用户信息
export const  getUserAddress =()=> request.get('/user/userInfo')

// 根据用户id，返回该用户的视图权限
export const  getIdUserView =()=> request.get('/user/new')

// 给身份设定视图权限
export const  setUserViewId =(params)=> request.post('/user/setIdentityView',{identity_id:params.identity_id,view_authority_id:params.view_authority_id})

// 展示身份和视图权限关系
export const  getIdUserAndView =(params)=> request.get('/user/identity_view_authority_relation',{params})




