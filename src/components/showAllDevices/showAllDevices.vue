<template>
<div id="container">
  <div id="con_left">
    <div class="arrow-box">
      <div class="left-text" v-for="data1 in this.devices[this.index]['port_in']">
        {{'➖' + data1}}
      </div>
    </div>
  </div>
  <div id="con_right">
    <div class="arrow-box">
      <div class="right-text" v-for="data2 in this.devices[this.index]['port_out']">
        {{data2 + '➖'}}
      </div>
    </div>
  </div>
</div>
<div id="buttonBox">
  <p>
    <span>name:{{ this.devices[index].name }}</span>
    <span>({{this.length === 0 ? 0:this.index + 1}}/{{this.length}})</span>
  </p>
  <el-button type="primary" class="elb" @click="last">last</el-button>
  <el-button type="primary" class="elb" @click="next">next</el-button>
</div>
</template>

<script>
import {showDevices} from "@/api/show";

export default {
  name: "showAllDevices",
  data(){
    return {
      index:0,
      length:0,
      devices:[{}]
    }
  },
  mounted() {
    showDevices().then(res=>{
      this.devices = res.data.devices;
      this.length = this.devices.length;
      console.log(this.devices[this.index])
    });
  },
  methods:{
    last(){
      if(this.index + 1 > 1) {
        this.index--;
      }
    },
    next(){
      if(this.index + 1 < this.length) {
        this.index++;
      }
    }
  }

}
</script>

<style scoped>
*{
  font-size: 16px;
}
div{
  margin:0;
  padding:0;
}
#container{
  display: flex;
  width:600px;
  height:250px;
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
#buttonBox{
  position:absolute;
  top:340px;
  left:80px;
  width:200px;
  height:100px;
}
.elb{
  margin:5px;
  text-align: center;
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