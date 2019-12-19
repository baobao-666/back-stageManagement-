<template>
    <div>
<el-container>
  <el-header>添加用户</el-header>
  <el-main>
<div class="count">
<Management/>
</div>

  </el-main>
</el-container>
    </div>
</template>
<script>
import Management from '@/components/management/management.vue'
export default {
    props:{

    },
    components:{
       Management
    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.el-header{
    background-color: #E9EEF3;
    color: #333;
    font-size: 18px;
    line-height: 60px;
  }
  
  
  
  .el-main {
   background-color: #E9EEF3;
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    .count{
        width: 100%;
border:1px solid #ccc;

    }
   
  }
  

  
  
  
 
</style>