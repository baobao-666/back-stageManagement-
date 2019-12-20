<template>
    <el-container>
        <el-main>
            <h2>班级管理</h2>
            <div class="class-contniner">
                <!-- 添加按钮 -->
                <el-button type="primary" @click="open">+添加教室</el-button>
                <!-- 添加按钮 -->
                <!-- 表格 -->
                <el-table
                 :data="AllClassRoom"
                 style="width: 100%">
                 <el-table-column
                   prop="room_text"
                   label="教室号"
                   width="1500%">
                </el-table-column>
                <!-- 操作 -->
                 <el-table-column label="操作">
                   <template slot-scope="scope">
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
import { mapActions, mapState } from 'vuex';

export default {
   computed:{
    ...mapState({
        AllClassRoom: state=>state.StudentClassClassroomManagement.AllClassRoom
    })
   },
   methods:{
       ...mapActions({
           getAllClassRoom:"StudentClassClassroomManagement/getAllClassRoom"
       })
   },
   created(){
       this.getAllClassRoom()
   }
}
</script>
<style scoped  lang="scss">

</style>