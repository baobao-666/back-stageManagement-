<template>
    <el-container>
        <el-main>
            <h2>班级管理</h2>
            <div class="class-contniner">
                <!-- 添加按钮 -->
                <el-button type="primary" @click="open">+添加教室</el-button>
                <!-- 添加按钮 -->

                <!-- 表单弹层 -->
                 <FromMark v-if="FromFlag" ></FromMark>
                <!-- 表单弹层 -->


                <!-- 表格 -->
                <el-table
                 :data="tableData"
                 style="width: 100%">
                 <el-table-column
                   prop="date"
                   label="班级名"
                   width="180">
                 </el-table-column>
                 <el-table-column
                   prop="name"
                   label="课程名"
                   width="180">
                 </el-table-column>
                 <el-table-column
                   prop="address"
                   label="教室号">
                 </el-table-column>
                 <!-- 操作 -->
                 <el-table-column label="操作">
                   <template slot-scope="scope">
                     <el-button
                       size="mini"
                       @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                     <el-button
                       size="mini"
                       type="danger"
                       @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                   </template>
                 </el-table-column>
                 <!-- 操作 -->
                </el-table>
                <!-- 表格 -->
            </div>
        </el-main>
    </el-container>
</template>
<script>

// 表单弹层
import  FromMark from '@/components/FromMark/index'


import { mapState, mapActions } from 'vuex';
export default {
      components:{
         FromMark    
      },
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          FromFlag:false
        }
      },
      methods:{
      //编辑事件
      handleEdit(index, row) {
        console.log(index, row);
      },
     //删除事件
      handleDelete(index, row) {
        console.log(index, row);
      },
     //添加弹出蒙层
      open() {
        this.FromFlag=true
      }
      }
}
</script>
<style lang="scss" scoped>
.el-main{
    background-color:#f0f2f5;
}
.el-button{
    margin-bottom: 20px;
}
</style>