<template>
  <div class="useradd">
    <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick">
      <!-- 用户数据 -->
      <el-tab-pane label="用户数据" name="first">
        <div class="h1">
          <p>用户数据</p>
        </div>
        <div class="token">
          <el-table :data="userlisted" style="width: 100%">
            <el-table-column prop="user_name" label="用户名" width="180"></el-table-column>
            <el-table-column prop="user_pwd" label="密码" width="700"></el-table-column>
            <el-table-column prop="identity_text" label="身份"></el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-size="10"
            layout="total, prev, pager, next"
            :total="userlist.length"
          ></el-pagination>
        </div>
      </el-tab-pane>

      <!-- 身份数据 -->
      <el-tab-pane label="身份数据" name="second">
        <div class="h1">
          <p>身份数据</p>
        </div>
        <div class="token">
          <el-table :data="identity" style="width: 100%">
            <el-table-column prop="identity_text" label="身份名称"></el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-size="10"
            layout="total, prev, pager, next"
            :total="identity.length"
          ></el-pagination>
        </div>
      </el-tab-pane>

      <!-- api接口权限 -->
      <el-tab-pane label="api接口权限" name="third">
        <div class="h1">
          <p>api接口权限</p>
        </div>
        <div class="token">
          <el-table :data="apilisted" style="width: 100%">
            <el-table-column prop="api_authority_text" label="api权限名称" width="420"></el-table-column>
            <el-table-column prop="api_authority_url" label="api权限url" width="490"></el-table-column>
            <el-table-column prop="api_authority_method" label="api权限方法"></el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-size="10"
            layout="total, prev, pager, next"
            :total="apilist.length"
          ></el-pagination>
        </div>
      </el-tab-pane>

      <!-- 身份和api接口关系 -->
      <el-tab-pane label="身份和api接口关系" name="fourth">
        <div class="h1">
          <p>身份和api接口关系</p>
        </div>
        <div class="token">
          <el-table :data="apiIded" style="width: 100%">
            <el-table-column prop="identity_text" label="身份名称" width="320"></el-table-column>
            <el-table-column prop="api_authority_text" label="api权限名称" width="300"></el-table-column>
            <el-table-column prop="api_authority_url" label="api权限url" width="360"></el-table-column>
            <el-table-column prop="api_authority_method" label="api权限方法"></el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-size="10"
            layout="total, prev, pager, next"
            :total=" apiId.length"
          ></el-pagination>
        </div>
      </el-tab-pane>

      <!-- 视图接口权限 -->
      <el-tab-pane label="视图接口权限" name="list">
        <div class="h1">
          <p>视图接口权限</p>
        </div>
        <div class="token">
          <el-table :data="getviewed" style="width: 100%">
            <el-table-column prop="view_authority_text" label="视图权限名称" width="420"></el-table-column>
            <el-table-column prop="view_id" label="视图id"></el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-size="10"
            layout="total, prev, pager, next"
            :total="getview.length"
          ></el-pagination>
        </div>
      </el-tab-pane>

      <!-- 身份和权限关系 -->
      <el-tab-pane label="身份和权限关系" name="data">
        <div class="h1">
          <p>身份和视图权限关系</p>
        </div>
        <div class="token">
          <el-table :data="dataed" style="width: 100%">
            <el-table-column prop="identity_text" label="身份" width="400"></el-table-column>
            <el-table-column prop="view_authority_text" label="视图名称" width="350"></el-table-column>
            <el-table-column prop="view_id" label="视图id"></el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-size="10"
            layout="total, prev, pager, next"
            :total="data.length"
          ></el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      activeName2: "first"
    };
  },
  computed: {
    ...mapState({
      userlist: state => state.userPermission.userList,
      userlisted: state => state.userPermission.userListed,
      identity: state => state.userPermission.identity,
      apilist: state => state.userPermission.api,
      apilisted: state => state.userPermission.apied,
      apiId: state => state.userPermission.identity_api,
      apiIded: state => state.userPermission.identity_apied,
      getview: state => state.userPermission.views,
      getviewed: state => state.userPermission.viewsed,
      data: state => state.userPermission.view_id,
      dataed: state => state.userPermission.view_ided
    })
  },
  methods: {
    ...mapActions({
      getList: "userPermission/getList",
      getidentity: "userPermission/getidentity",
      getapi: "userPermission/getapi",
      getidentity_api: "userPermission/getidentity_api",
      getviews: "userPermission/getviews",
      getidentity_view: "userPermission/getidentity_view"
    }),
    ...mapMutations({
      handleCurrent: "userPermission/handleCurrent",
      handlePage: "userPermission/handlePage"
    }),
    handleClick(tab, event) {},

    handleSizeChange(val) {
      this.handlePage(val);
    },
    handleCurrentChange(val) {
      this.handleCurrent(val);
    }
  },
  created() {
    this.getList();
    this.getidentity();
    this.getapi();
    this.getidentity_api();
    this.getviews();
    this.getidentity_view();
  }
};
</script>
<style scoped lang="scss">
.useradd {
  width: 95%;
  flex: auto;
  min-height: 0;
  position: relative;
}
.tab {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
}
span {
  padding: 0 15px;
  font-size: 15px;
  color: #595959;
  display: inline-block;
  height: 30px;
  background: #fff;
  line-height: 30px;
  border: 1px solid #dbdbdb;
}
.active {
  color: #5339fd;
  border: 1px solid #5339fd;
}
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