<template>
    <div>
 <div class="h1">
      <p>视图接口权限</p>
    </div>
    <div class="token">
      <el-table :data="getview" style="width: 100%">
        <el-table-column prop="view_authority_text" label="视图权限名称" width="720"></el-table-column>
        <el-table-column prop="view_id" label="视图id" ></el-table-column>
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
  getview:state=>state.userPermission.views
})
    },
    methods:{
      ...mapActions({
        getviews:'userPermission/getviews'
      })

    },
    created(){
this.getviews()
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