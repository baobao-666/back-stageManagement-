import {constantRoutes,authorityRoutes}  from '@/router'

const state={
    routes:[],
    addRoutes:[]
}

const mutations={
    SER_ROUTES:(state,routes)=>{
        state.addRoutes=routes
        state.routes=constantRoutes.concat(routes)
    }
}

const actions={
    async generateRoutes({commit},viewAuthority){
        let accessedRoutes=[];
        authorityRoutes.forEach(item=>{
            let children=[],unAuthorized=[];
            item.children.forEach(val=>{
                if(viewAuthority.findIndex(view=>view.view_id===val.meta.view_id)!==-1 ){
                     children.push(val)
                }else{
                     unAuthorized.push(val)
                }
            })
            // 把有的路由重置children
            item.children=children
            accessedRoutes.push(item)
            // 把没有的路由重定向到401
            unAuthorized.forEach(value=>{
                accessedRoutes.push({
                    path:item.path+'/'+value.path,
                    redirect:'/401'
                })
            })
        })
        commit ('SET_ROUTES',accessedRoutes)
        console.log('====================================');
        console.log(accessedRoutes);
        console.log('====================================');
        return accessedRoutes
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  