<template>
    <el-container>
        <h2>班级管理</h2>
        <el-header>
            <el-input  class="input" v-model="input"  style="width:180px" placeholder="输入学生姓名"></el-input>
            <el-select class="input" v-model="ruleForm.classroom" style="width:180px"  placeholder="请选择教室号">
            <!-- <el-option style="z-index:2500" v-for="(item,index) in AllClassRoom" :key="index" :label="item.room_text" :value="item.room_text"></el-option> -->
            </el-select>                                      
            <el-select class="input" v-model="ruleForm.classroom" style="width:180px"  placeholder="班级号">
            <!-- <el-option style="z-index:2500" v-for="(item,index) in AllClassRoom" :key="index" :label="item.room_text" :value="item.room_text"></el-option> -->
            </el-select>                                      
            <el-button class="el-btn" type="primary">搜索</el-button>
            <el-button class="el-btn" type="primary">重置</el-button>
        </el-header>
        <el-main>
          <!-- 表格 -->
                <el-table
                 :data="classRoomList"
                 style="width: 100%">
                 <el-table-column
                   prop="grade_name"
                   label="姓名"
                   width="180">
                 </el-table-column>
                 <el-table-column
                   prop="subject_text"
                   label="学号"
                   width="180">
                 </el-table-column>
                 <el-table-column
                   prop="subject_text"
                   label="班级"
                   width="180">
                 </el-table-column>
                 <el-table-column
                   prop="subject_text"
                   label="教室"
                   width="180">
                 </el-table-column>
                 <el-table-column
                   prop="subject_text"
                   label="密码"
                   width="180">
                 </el-table-column>
                 <!-- 操作 -->
                 <el-table-column label="操作">
                   <template slot-scope="scope">
                     <span @click="handleDelete(scope.$index, scope.row)">删除</span>
                   </template>
                 </el-table-column>  
                 <!-- 操作 -->
                </el-table>
                <!-- 表格 -->    
                <!-- 分页 -->
                  <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage4"
                  :page-sizes="[100, 200, 300, 400]"
                  :page-size="100"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="400">
                  </el-pagination>
                <!-- 分页 -->




        </el-main>
    </el-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data(){
        return {
            ruleForm:{
             classroom:""
            },
            input:"",
            currentPage4: 4
        }
    },
    computed:{
        ...mapState({
            Allstudent: state=>state.StudentClassClassroomManagement.Allstudent
        })
    },
    methods:{
        ...mapActions({
           getStudent:"StudentClassClassroomManagement/getStudent"
        })
    },
    created(){
        this.getStudent()
    }
}
</script>
<style scoped  lang="scss">
.input{
    margin-right: 30px;
}
.el-btn{
    padding: 12px 50px !important;
    border-radius: 4px!important;
    border: 0!important;
    font-size: 14px!important;
    color: #fff!important;
    background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
    margin-right: 30px;
}
</style>