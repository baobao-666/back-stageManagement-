<template>
    <el-container>
        <el-main>
            <h2>班级管理</h2>
            <div class="class-contniner">
                <!-- 添加按钮 -->
                <el-button type="primary" @click="open">+添加班级</el-button>
                <!-- 添加按钮 -->
                <!-- 表格 -->
                <el-table
                 :data="AllClassRoom"
                 style="width: 100%">
                 <el-table-column
                   prop="room_text"
                   label="教室号"
                   width="600">
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
            </div>
        </el-main>
        <!-- 添加弹框组件 -->
         <OneFrom v-if="FromFlag" :FromFlag.sync="FromFlag" > </OneFrom>
        <!-- 添加弹框组件 -->
    </el-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import OneFrom from '@/components/FromMark/onde'
export default {
    components:{
           OneFrom
    },
    data(){
      return{
          FromFlag:false
       }
    },
   computed:{
    ...mapState({
        AllClassRoom: state=>state.setClass.AllClassRoom
    })
   },
   methods:{
       ...mapActions({
           getAllClassRoom:"setClass/getAllClassRoom",
           deleteClassRoom:"setClass/deleteClassRoom"
           
       }),
    open(){
       this.FromFlag = true
    },
    handleDelete(index,item){
       this.deleteClassRoom(item.room_id).then(res=>{
         this.getAllClassRoom()
       })
       
    }
   },
   created(){
       this.getAllClassRoom()
   }
}
</script>
<style scoped  lang="scss">
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