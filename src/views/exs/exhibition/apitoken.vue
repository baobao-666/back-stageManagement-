<template>
  <div>
    <div class="h1">
      <p>api接口数据</p>
    </div>
    <div class="token">
      <el-table :data="apilist" style="width: 100%">
        <el-table-column prop="api_authority_text" label="api权限名称" width="420"></el-table-column>
        <el-table-column prop="api_authority_url" label="api权限url" width="490"></el-table-column>
        <el-table-column prop="api_authority_method" label="api权限方法"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
      ...mapState({
          apilist:state=>state.userPermission.api
      })
  },
  methods: {
      ...mapActions({
          getapi:'userPermission/getapi'
      })
  },
  created() {
      this.getapi()
  },
  
};
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