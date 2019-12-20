<template>
   <div class="wrap_mark">
      <div class="mark_from">
           <div class="from-header">
             <div>添加班级</div>
             <div><i data-v-79bf621a="" class="el-icon-close"></i></div>
           </div>
           <div class="from-main">
            <!-- 提价表单 -->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="活动名称" prop="name"></el-form-item>
                    <el-input v-model="ruleForm.name"></el-input>
                    <el-form-item label="活动区域" :label-width="formLabelWidth"></el-form-item>
                    <el-select v-model="ruleForm.region" width="100%"  placeholder="请选择活动区域">
                     <el-option label="区域一" value="shanghai"></el-option>
                     <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
            </el-form>
            <!-- 提价表单 -->
           </div>
           <div class="from-footer">
              <el-button>取消</el-button>
              <el-button class="submitClick" type="primary">提交</el-button>
           </div>
      </div>
   </div>
</template>

<script>

export default {
    data(){
        return {
          ruleForm: {
          name: '',
          region: ''
        },
        formLabelWidth: '120px' 
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
  z-index: 5000;
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
    padding: 20px;
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
</style>