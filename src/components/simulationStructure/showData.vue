<template>
  <div class="demo-image" v-show="isCheck" v-loading = "isloading">
    <div  class="block">
      <el-image  :src="url" :fit="fill" />
    </div>
  </div>
</template>

<script>
import {showData} from "@/api/show";

export default {
  props:["portname","path"],
  name: "showData",
  data(){
    return {
      isCheck:false,
      url:"",
      isloading:false,
    }
  },
  methods:{
    check(){
      this.isCheck = false;
    }
  },
  mounted() {
    // 监听全局点击事件
    document.addEventListener('click', this.check);

  },
  updated() {

  },
  beforeUnmount() {
    // 移除全局点击事件监听
    document.removeEventListener('click', this.check);
  },
  watch:{
    portname(newVal){
      if(newVal.length > 0){
        this.isloading = true;
        console.log("showdataName",newVal);
        console.log("showdataPath",this.path);
        const formdata = new FormData();
        //formdata.append("portname",this.portname);
        formdata.append("portname",newVal);
        formdata.append("path",this.path);
        showData(formdata).then(res=>{
          this.url = window.URL.createObjectURL(res.data);
          this.isloading = false;
          ElMessage.success("showData success");
        }).catch(error=>{
          console.log(error);
          ElMessage("showData failure");
          this.isloading = false;
        })
        this.isCheck = true;
      }
      // if(this.portname){
      //   //console.log("showdata",this.portname);
      //   const formdata = new FormData();
      //   //formdata.append("name",this.portname);
      //   formdata.append("portname","tb_test.testsun.DA14_0_out_Sun_visible_sign_acquisition_0");
      //   showData(formdata).then(res=>{
      //     console.log(66,res);
      //     ElMessage.success("success");
      //   }).catch(error=>{
      //     console.log(error);
      //     ElMessage("failed");
      //   })
      //   this.isCheck = true;
      // }
    }
  }
}
</script>

<style scoped>
.demo-image .block {
  margin:0 auto;
  border:3px inset;
  border-radius: 10px;
  box-shadow: 0 0 0 5px rgb(147,169,253);
}


</style>