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
                    <el-form-item  label="班级名" prop="name"></el-form-item>
                       <el-input v-model="ruleForm.class"></el-input>
                    <el-form-item   label="教室号" prop="name"></el-form-item>
                       <el-select v-model="ruleForm.classroom" style="width:100%"  placeholder="请选择教室号">
                        <el-option style="z-index:2500" v-for="(item,index) in AllClassRoom" :key="index" :label="item.room_text" :value="item.room_text"></el-option>
                       </el-select>                                      
                    <el-form-item   label="课程名" prop="name"></el-form-item>
                       <el-select v-model="ruleForm.subject" style="width:100%"  placeholder="请选择课程名">
                         <el-option style="z-index:2500" v-for="(item,index) in Allsubject" :key="index" :label="item.subject_text" :value="item.subject_text"></el-option>
                       </el-select>
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
import { mapActions, mapState } from 'vuex'

export default {
    data(){
        return {
          ruleForm: {
          class: '',
          classroom: '',
          subject:''
        },
         rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ]
        },
        AddorSet:0
    }
  },
  computed:{
    ...mapState({
      AllClassRoom:state=>state.StudentClassClassroomManagement.AllClassRoom,
      Allsubject:state=>state.StudentClassClassroomManagement.Allsubject,
    })
  },
  methods:{
    ...mapActions({
        addStoreClass:"StudentClassClassroomManagement/addClass"
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
      // 添加教室数据
      if(this.AddorSet===1){
    
      }else{
      this.addStoreClass({
        grade_name:this.ruleForm.class,
        room_id:this.ruleForm.classroom,
        subject_id:this.ruleForm.subject
      })
      }
    
      this.$emit("update:FromFlag",false)
    },
    setruleForm(){
      if(localStorage.getItem('grade_name')&&localStorage.getItem('subject_text')&&localStorage.getItem('room_text')){
          this.ruleForm.class=localStorage.getItem('grade_name')
          this.ruleForm.classroom=localStorage.getItem('room_text')
          this.ruleForm.subject=localStorage.getItem('subject_text')
          this.AddorSet=1
      }
    }
  },
  created(){
    this.setruleForm()
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
  padding: 15% 35% 0;
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
    padding: 0 20px;
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