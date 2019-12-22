<template>
    <el-container>
        <el-main>
            <h2>班级管理</h2>
            <div class="class-contniner">
                <!-- 添加按钮 -->
                <el-button type="primary" @click="open">+添加教室</el-button>
                <!-- 添加按钮 -->

                <!-- 表单弹层 -->
                 <FromMark  v-if="FromFlag" :FromFlag.sync="FromFlag" ></FromMark>
                <!-- 表单弹层 -->


                <!-- 表格 -->
                <el-table
                 :data="classRoomList"
                 style="width: 100%">
                 <el-table-column
                   prop="grade_name"
                   label="班级名"
                   width="180">
                 </el-table-column>
                 <el-table-column
                   prop="subject_text"
                   label="课程名"
                   width="180">
                 </el-table-column>
                 <el-table-column
                   prop="room_text"
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
          FromFlag:false
        }
      },
      computed:{
       ...mapState({
         classRoomList: state=>state.StudentClassClassroomManagement.classRoomList
       })
      },
      methods:{
        ...mapActions({
          getIfClassRoom:"StudentClassClassroomManagement/getIfClassRoom",
          deleteClassRoom:"StudentClassClassroomManagement/deleteClassRoom",
          getsubject:"StudentClassClassroomManagement/getsubject", 
          getAllClassRoom:"StudentClassClassroomManagement/getAllClassRoom"      
        }),
      //编辑事件
      handleEdit(index, row) {
        console.log(index, row);
        localStorage.setItem("grade_name",row.grade_name)
        localStorage.setItem("subject_text",row.subject_text)
        localStorage.setItem("room_text",row.room_text)
        this.FromFlag=true
      },
     //删除事件
      handleDelete(index, row) {
        this.deleteClassRoom(row.grade_id)
      },
     //添加弹出蒙层
      open() {
        this.FromFlag=true
      }
      },
      created(){
        //请求全部分配教室的数据
        this.getIfClassRoom()
        // 获取全部课目
        this.getsubject()
        // 获取全部教室
        this.getAllClassRoom()
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
.class-contniner{
  padding: 24px
}
</style>