<template>
    <div>
<div class="h1">
      <p>身份和视图权限关系</p>
    </div>
    <div class="token">
      <el-table :data="data" style="width: 100%">
        <el-table-column prop="identity_text" label="身份" width="420"></el-table-column>
        <el-table-column prop="view_authority_text" label="视图名称" width="490"></el-table-column>
        <el-table-column prop="view_id" label="视图id"></el-table-column>
      </el-table>
    </div>
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
  data:state=>state.userPermission.view_id
})
    },
    methods:{
...mapActions({
  getidentity_view:'userPermission/getidentity_view'
})
    },
    created(){
this.getidentity_view()
    },
    
    
}
</script>
<style scoped lang="scss">
.h1 {
  width: 100%;
  height: 30px;
  font-size: 30px;
}
.token {
  width: 100%;
  margin-top: 20px;
}
</style>