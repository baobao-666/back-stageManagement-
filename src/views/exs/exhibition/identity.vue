<template>
    <div>
 <div class="h1">
      <p>身份和api接口关系</p>
    </div>
    
    <!-- <div class="token">
      <el-table :data="identity" style="width: 100%">
        <el-table-column prop="api_authority_text" label="api权限名称" width="180"></el-table-column>
        <el-table-column prop="api_authority_url" label="api权限url" width="300"></el-table-column>
        <el-table-column prop="api_authority_method" label="api权限方法"></el-table-column>
      </el-table>
    </div> -->
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
...mapState({
    identity:state=>state.userPermission.identity_api
})
    },
    methods:{
...mapActions({
    getidentity_api:'userPermission/getidentity_api'
})
    },
    created(){
this.getidentity_api()
    },
   
}
</script>
<style scoped lang="scss">

</style>