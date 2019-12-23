<template>
     <div class="wrap_mark">
      <div class="mark_from">
           <div class="from-header">
              <div>添加班级</div>
             <div><i data-v-79bf621a=""  @click.self="heidenFlag" class="el-icon-close"></i></div>
           </div>
           <div class="from-main">
            <!-- 提价表单 -->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item  label="班级名"   prop="name"></el-form-item>
                       <el-input  v-model="ruleForm.Class"></el-input>
            </el-form>
            <!-- 提价表单 -->
           </div>
           <div class="from-footer">
              <el-button @click="hideenFlag" >取消</el-button>
              <el-button @click="addClass" class="submitClick" type="primary">提交</el-button>
           </div>
      </div>
   </div>
</template>

<script>
import { mapActions} from 'vuex';

export default {
  data(){
        return {
         ruleForm:{
           Class: ''
         },
         rules: {
             name: [
                 { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
        }
  },
  methods:{
    ...mapActions({
           getAllClassRoom:"setClass/getAllClassRoom",
           addClassRoom:"setClass/addClassRoom"
       }),
    heidenFlag(){
      // 箭头关闭
      this.$emit("update:FromFlag",false)
     
    },
    hideenFlag(){
      // 取消按钮关闭
       this.$emit("update:FromFlag",false)
   },
   addClass(){
    //   提交按钮
    this.addClassRoom({
        room_text:this.ruleForm.Class
    }).then(res=>{
        this.getAllClassRoom()
        this.$emit("update:FromFlag",false)
    })
   }
  }  
}
</script>
<style scoped  lang="scss">
.wrap_mark{
 position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  padding: 15% 25% 0;
  background: rgba($color: #000000, $alpha: .5)
  }
  .mark_from{
   width: 100%;
   background: #fff;
  }
  .from-header{
    display: flex;
    padding: 20px;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    div{
       font-size: 22px;
    }
  }
  .from-main{
    padding: 0 50px;
  }
  .from-footer{
    width: 100%;
    padding: 40px 0;
    display: flex;
    justify-content: center;
  }
  .submitClick{
    padding: 0 40px!important;
    border-radius: 4px!important;
    border: 0!important;
    font-size: 14px!important;
    color: #fff!important;
    background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
  }
  .el-form-item{
    margin:20px 0 0 -40px;
  }
</style>