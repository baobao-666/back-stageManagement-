<template>
  <div>
    <div class="h1">
      <p>api接口数据</p>
    </div>
    <div class="token">
      <el-table :data="apilist" style="width: 100%">
        <el-table-column prop="api_authority_text" label="api权限名称" width="180"></el-table-column>
        <el-table-column prop="api_authority_url" label="api权限url" width="300"></el-table-column>
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
          getapi:'userPermission/getapiId'
      })
  },
  created() {
      this.getapi()
  },
  
};
</script>
<style scoped lang="scss">
</style>