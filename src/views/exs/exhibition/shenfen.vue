<template>
  <div>
    <div class="h1">
      <p>身份数据</p>
    </div>
    <div class="token">
      <el-table :data="identity" style="width: 100%">
        <el-table-column prop="identity_text" label="身份名称" >

        </el-table-column>
        
      </el-table>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      identity: state => state.userPermission.identity
    })
  },
  methods: {
    ...mapActions({
        getidentity: "userPermission/getidentity"
    })
  
  },
  created() {
    this.getidentity();
  }
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