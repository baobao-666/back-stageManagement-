// 用户权限接口文档

import request from '@/utils/request'


// 更新用户信息  
export  const updateUserMess=(data)=>request.put('/user/user',data)

// 添加试图权限
export const  addViewId =(params)=> request.get('/user/authorityView/edit',{params})

// 添加api接口权限
export const  addApiId =(params)=> request.get('/user/authorityApi/edit',{params})

// 给身份设定api接口权限
export const  addUserApiId =(params)=> request.get('/user/identity/edit',{params})




// 登录接口
export const  loginUser =(params)=> request.post('/user/login',{user_name:params.user_name,user_pwd:params.user_pwd})

// 获取当前用户信息
export const  getUserAddress =()=> request.get('/user/userInfo')

// 根据用户id，返回该用户的视图权限
export const  getIdUserView =()=> request.get('/user/new')






