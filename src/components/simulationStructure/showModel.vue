<template>
  <div style="margin-top: 50px;">
    <p style="text-align: center;margin:5px auto;">
      <span style="margin-left:200px;"><el-tag style="font-size: 22px;">Name:</el-tag>{{ devicename }}</span>
    </p>
    <div id="container" @contextmenu="showPopup" @click.stop="hidePopup" v-loading = "isReady">
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
      <div v-show="isPopupVisible" :style="{ left: popupPosition.x + 'px', top: popupPosition.y + 'px' }" class="popup">
        <ul>
          <li @click="getName">Show the data</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {showData, showModule} from "@/api/show";

export default {
  props:["path","devicename"],
  name: "showModel",
  data(){
    return {
      devices:[{}],
      isPopupVisible: false,
      popupPosition: { x: 0, y: 0 },
      length:0,
      index:0,
      data:"",
      isReady:false
    }
  },
  methods:{
    showPopup(event) {
      event.preventDefault();
      this.isPopupVisible = true;
      this.popupPosition = { x: event.clientX, y: event.clientY };
      this.data = event.target.innerText;
    },
    hidePopup() {
      this.isPopupVisible = false;
    },
    selectLonger(data){
      let res = "";
      data.forEach(item => {
        if(item.length >= res.length && item !== " ")res = item;
      })
      return res;
    },
    getName() {
      const dataArr = this.data.split(" ");
      const res = this.selectLonger(dataArr);

      this.$emit("port-update",this.path, res);
      this.hidePopup();
    },
  },
  mounted() {
    // 监听全局点击事件
    document.addEventListener('click', this.hidePopup);
  },
  beforeUnmount() {
    // 移除全局点击事件监听
    document.removeEventListener('click', this.hidePopup);
  },
  watch:{
    devicename(newVal){
      if(newVal.length > 0) {
        this.isReady = true;
        const formdata = new FormData();
        formdata.append("name", newVal);
        showModule(formdata).then(res => {
          this.devices = res.data.devices;
          ElMessage.success("showModel success");
          this.isReady = false;
        }).catch(error => {
          this.isReady = false;
          ElMessage.warning("showModel failure");
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
.popup {
  position: absolute;
  background-color: #fff;
  padding: 10px;
  border:2px outset;
  border-radius: 10px;
  box-shadow: 0 0 0 2px rgb(131, 148, 213);
}
</style>