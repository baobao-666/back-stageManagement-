<template>
  <div class="count">
    <div class="wrap">

      <!-- 添加用户 -->
      <div class="addUser">
        <div class="title">
          <span
            :class="{active:index==cur}"
            v-for="(item,index) in list"
            :key="index"
            @click="tab(index)"
          >{{item}}</span>
        </div>
        <!-- 内容 -->
        <div class="list">
          <!-- input -->
          <div class="addUser_input">
            <input type="text" placeholder="请输入用户名" />
          </div>
          <div class="addUser_input">
            <input type="password" placeholder="请输入密码" />
          </div>
          <!-- 下拉框 -->
          <div>
            <el-select v-model="value" placeholder="请选择身份id">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <!-- 按钮 -->
          <div class="addUser_input">
            <button class="bun">确定</button>
            <button class="reset">重置</button>
          </div>
        </div>
      </div>

      <!-- 添加身份 -->
      <div class="addUser">
        <div class="title">
          <span>添加身份</span>
        </div>
        <div class="list">
          <!-- input -->
          <div class="addUser_input">
            <input type="text" placeholder="添加身份名称" />
          </div>
          <!-- 按钮 -->
          <div class="addUser_input">
            <button class="bun">确定</button>
            <button class="reset">重置</button>
          </div>
        </div>
      </div>
      <!-- 添加api接口权限 -->
      <div class="addUser">
        <div class="addUser1">
          <div class="title">
            <span>添加api接口权限</span>
          </div>
          <div class="list">
            <!-- input -->
            <div class="addUser_input">
              <input type="text" placeholder="添加api接口权限" />
            </div>
            <div class="addUser_input">
              <input type="text" placeholder="添加api接口权限url" />
            </div>
            <div class="addUser_input">
              <input type="text" placeholder="添加api接口权限方法" />
            </div>
            <!-- 按钮 -->
            <div class="addUser_input">
              <button class="bun">确定</button>
              <button class="reset">重置</button>
            </div>
          </div>
        </div>
      </div>

      <!--  -->
      <div class="addUser">
        <div class="addUser1">
          <div class="title">
            <span>添加视口接口权限</span>
          </div>
          <div class="list">
            <!-- xiala -->
            <div>
              <el-select v-model="value" placeholder="请选择已有视口">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <!-- 按钮 -->
            <div class="addUser_input">
              <button class="bun">确定</button>
              <button class="reset">重置</button>
            </div>
          </div>
        </div>
      </div>

      
      <!--  -->
      <div class="addUser">
        <div class="addUser1">
          <div class="title">
            <span>给身份设置api接口权限</span>
          </div>
          <div class="list">
            <div>
              <el-select v-model="value" placeholder="请选择身份id">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="el">
              <el-select v-model="value" placeholder="请选择api接口权限">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>

            <!-- 按钮 -->
            <div class="addUser_input">
              <button class="bun">确定</button>
              <button class="reset">重置</button>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="addUser">
        <div class="addUser1">
          <div class="title">
            <span>给身份设置视口权限</span>
          </div>
          <div class="list">
            <div class="el-select">
              <el-select v-model="value" placeholder="请选择身份id">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="el">
              <el-select v-model="value" placeholder="请选择视图接口权限">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <!-- 按钮 -->
            <div class="addUser_input">
              <button class="bun">确定</button>
              <button class="reset">重置</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
export default {
  props: {},
  components: {},
  data() {
    return {
      list: ["添加用户", "更新用户"],
      cur: 0,
      options: [
        {
          value: "选项1",
          label: "管理者"
        },
        {
          value: "选项2",
          label: "出题者"
        },
        {
          value: "选项3",
          label: "浏览者"
        }
      ],
      value: ""
    };
  },
  computed: {
      ...mapState({
          user:state=>state.user
      })
  },
  methods: {
    tab(index) {
      this.cur = index;
    },
    ...mapActions({
        addUserList:'userPermission/getuser'
    })
  },
  created(){
      let obj={
      user_name:'zhangdongming',
      user_pwd:'Zhangdongming123!',
    //   identity_id:'浏览者',
      }
      this.addUserList(obj)

  },
 
};
</script>
<style scoped lang="scss">
.count {
  width: 95%;
  flex: auto;
  min-height: 0;
}
.wrap {
  display: flex;
  flex-wrap: wrap;
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
.addUser {
  width: 33.3%;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}
.title {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
}
span {
  padding: 0 5px;
  font-size: 15px;
  color: #999;
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
.list {
  margin-top: 20px;
}
.addUser_input {
  margin-bottom: 20px;
}
.addUser_input input {
  width: 100%;
  height: 30px;
  border: 1px solid #ccc;
}
.addUser_input {
  margin-top: 20px;
}
::-webkit-input-placeholder {
  color: #ccc;
  font-size: 14px;
}
.addUser_input button {
  height: 30px;
  padding: 0 40px;
  border-radius: 4px;
  border: 0;
  font-size: 14px;
}
.bun {
  height: 30px;
  padding: 0 40px;
  border-radius: 4px;
  border: 0;
  font-size: 14px;
  color: #fff;
  background: linear-gradient(-90deg, #4e75ff, #0139fd);
}
.reset {
  height: 30px;
  padding: 0 40px;
  border-radius: 4px;
  border: 0;
  font-size: 14px;
  color: #000;
  border: 1px solid #ccc;
}
.el {
  margin-top: 20px;
}
</style>