import request from '@/utils/request'
//添加用户
export function getuser(data){
return request({
     url:'/user',
     method:'post',
     data
   })
 }
 //用户数据
 export function getList(){
   return request({
     url:'/user/user',
     method:'get'
   })
 }
 //身份id
 export function getidentity(){
   return request({
     url:'/user/identity',
     method:'get'
   })
 }
 //视图权限数据
 export function getviews(){
     return request({
         url:'/user/view_authority',
         method:'get'
     })
 }
 //api接口权限数据
 export function getapi(){
     return request({
         url:'/user/api_authority',
         method:'get'
     })
 }
 //展示身份和api权限关系
 export function getidentity_api(){
   return request({
     url:'/user/identity_api_authority_relation',
     method:'get'
   })
 }
 //展示身份和视图权限关系
 export function getidentity_view(){
   return request({
     url:'/user/identity_view_authority_relation',
     method:'get'
   })
 }