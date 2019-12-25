<template>
    <el-container>
        <h2>班级管理</h2>
        <el-header>
            <el-input  class="input" v-model="input"  style="width:180px" placeholder="输入学生姓名"></el-input>
            <el-select class="input" v-model="ruleForm.classroom" style="width:180px"  placeholder="请选择教室号">
            <el-option style="z-index:2500" v-for="(item,index) in AllClassRoom" :key="index" :label="item.room_text" :value="item.room_id"></el-option>
            </el-select>                                      
            <el-select class="input" v-model="ruleForm.subject" style="width:180px"  placeholder="班级号">
            <el-option style="z-index:2500" v-for="(item,index) in Allsubject" :key="index" :label="item.subject_text" :value="item.subject_id"></el-option>
            </el-select>                                      
            <el-button @click="search" class="el-btn" type="primary">搜索</el-button>
            <el-button @click="resolve" class="el-btn" type="primary">重置</el-button>
        </el-header>
        <el-main>
          <!-- 表格 -->
                <el-table
                 :data="pageList"
                 style="width: 100%">
                 <el-table-column
                   prop="student_name"
                   label="姓名">
                 </el-table-column>
                 <el-table-column
                   prop="student_id"
                   label="学号"
                   width="250">
                 </el-table-column>
                 <el-table-column
                   prop="subject_text"
                   label="班级">
                 </el-table-column>
                 <el-table-column
                   prop="room_text"
                   label="教室">
                 </el-table-column>
                 <el-table-column
                   prop="student_pwd"
                   label="密码">
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
                  :page-sizes="AllPage"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="AllStatude.length">
                  </el-pagination>
                <!-- 分页 -->
        </el-main> 
    </el-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
    data(){
        return {
            ruleForm:{
             classroom:"",
             subject:""
            },
            input:"",
            AllPage:[10, 20, 30, 40]
        }
    },
    computed:{
        ...mapState({
            AllStatude: state=>state.setStatude.AllStatude,
            pageList: state=>state.setStatude.pageList,
            AllClassRoom:state=>state.setClass.AllClassRoom,
            Allsubject:state=>state.StudentClassClassroomManagement.Allsubject
        })
    },
    methods:{
        ...mapActions({
           getStatude:"setStatude/getStatude",
           deleteStatude:"setStatude/deleteStatude",
           getsubject:"StudentClassClassroomManagement/getsubject", 
           getAllClassRoom:"setClass/getAllClassRoom"   
        }),
        ...mapMutations({
           setPage:"setStatude/setPage",
           setPageSize:"setStatude/setPageSize"
        }),
        handleDelete(index,item){
            console.log(item);
            this.deleteStatude(item.student_id)
        },
        handleSizeChange(val) {
        this.setPageSize(val)
        },
        handleCurrentChange(val) {
          this.setPage(val)
        },
        search(){
          
        },
        resolve(){
          this.ruleForm.classroom=""
          this.ruleForm.subject=""
          this.input=""
        }

    },
    created(){
        this.getStatude()
        this.getsubject()
        this.getAllClassRoom()
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