<template>
    <div class="useradd">
<div class="tab">
    <span v-for='(item,index) in list' :key='index' :class="{active:curren==index}" @click='Tab(index)'>{{item}}</span>
</div>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
list:['用户数据','身份数据','api接口数据','身份和api接口关系','视图接口权限','身份和视图权限关系'],
curren:0
        }
    },
    computed:{

    },
    methods:{
Tab(index){
this.curren=index
}
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.useradd{
  width: 95%;
  flex: auto;
  min-height: 0;

}
.tab{
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
}
span {
  padding: 0 15px;
  font-size: 15px;
  color: #595959;
  display: inline-block;
  height: 30px;
  background: #fff;
  line-height: 30px;
  border: 1px solid #dbdbdb;
}
.active {
  color: #5339fd;
  border: 1px solid #5339fd;
}
</style>