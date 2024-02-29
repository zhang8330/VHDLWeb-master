<template>
  <div style="margin-top: 50px;">
    <p style="text-align: center;margin:5px auto;">
      <span style="margin-left:35px;"><el-tag style="font-size: 22px;">Name:</el-tag>{{ devicename }}</span>
    </p>
    <div id="container" v-loading = "isReady">
      <div id="con_left">
        <div class="arrow-box">
          <div class="left-text" v-for="data1 in this.devices[this.index]['port_in']">
            {{'➖ ' + data1 + ' '}}
          </div>
        </div>
      </div>
      <div id="con_right">
        <div class="arrow-box">
          <div class="right-text" v-for="data2 in this.devices[this.index]['port_out']">
            {{' ' + data2 + ' ➖'}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {showExternalModule} from "@/api/show";

export default {
  props:["devicename"],
  name: "showExternalModel",
  data(){
    return {
      devices:[{}],
      length:0,
      index:0,
      data:"",
      isReady:false
    }
  },
  methods:{
  },
  mounted() {
    // 监听全局点击事件
  },
  beforeUnmount() {
    // 移除全局点击事件监听
  },
  watch:{
    devicename(newVal){
      if(newVal.length > 0) {
        this.isReady = true;
        const formdata = new FormData();
        formdata.append("name", newVal);
        showExternalModule(formdata).then(res => {
          this.devices = res.data.devices;
          ElMessage.success("success!");
          this.isReady = false;
        }).catch(error => {
          this.isReady = false;
          ElMessage.warning("failure!");
          console.log(error);
        })
      }
    }
  }
}
</script>

<style scoped>
*{
  margin:0;
  padding: 0;
  font-size: 16px;
}
ul{
  list-style-type: none;
}
li:hover{
  background-color: #ccc;
}
#container{
  display: flex;
  width:820px;
  height:300px;
  margin:0 auto;
  background-color: #cbd4de;
}
#con_left{
  display: flex;
  width:50%;
  height:100%;
  justify-content: flex-start;
  align-items: center;
}
#con_right{
  display:flex;
  width:50%;
  height:100%;
  justify-content: flex-end;
  align-items: center;
}
.left-text {
  text-align: left;
  margin-left:-10px;
}
.right-text {
  text-align: right;
  margin-right: -10px;

}
</style>