<template >
  <div   @contextmenu="showPopup" @click="hidePopup" style="width:80%;margin:20px;padding: 5px;" id="contentBox" v-loading="isReady">
    <p style="text-align: center;margin: 2px;"><el-tag style="font-size: 25px;">Module</el-tag></p>
    <el-tree :data="data" />
    <div v-show="isPopupVisible" :style="{ left: popupPosition.x + 'px', top: popupPosition.y + 'px' }" class="popup">
      <ul>
        <li @click="getName">Show the model</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {getModule} from "@/api/get";

export default {
  props:["devicename","path"],
  name: "getSimulationStructure",
  data(){
    return {
      test:{},
      ans:[],
      data:[],
      isReady:true,
      isPopupVisible: false,
      popupPosition: { x: 0, y: 0 },
      devicename:"",
      path:""
    }
  },
  methods: {
    showPopup(event) {
      event.preventDefault();
      this.isPopupVisible = true;
      this.popupPosition = { x: event.clientX, y: event.clientY };
       this.devicename = event.target.innerText;
    },

    hidePopup() {
      this.isPopupVisible = false;
    },
    findLabel(arr, targetLabel, parentLabels = []) {
      for (let obj of arr) {
        if (obj.label === targetLabel) {
          return [...parentLabels, obj.label].join('.');
        }

        if (obj.children) {
          const result = this.findLabel(obj.children, targetLabel, [...parentLabels, obj.label]);
          if (result) {
            return result;
          }
        }
      }

      return null;
    },
    getName() {
      this.$emit("data-update",this.path, this.devicename);
      this.hidePopup();
    }
  },
  watch:{
    devicename(newV,oldV){
      // let arr = this.findLabel(this.data, newV).split(".");
      // arr.pop();
      // this.path = arr.join(".");
      // console.log(382,this.path);
      this.path = this.findLabel(this.data, newV);
      }
  },
  mounted() {
    // 监听全局点击事件
    getModule().then( res=>{
      // console.log(res.data);
      this.data.push(res.data);
      this.isReady = false;
      ElMessage.success("acquire success");
    }).catch(error=>{
      this.isReady = false;
      ElMessage.warning("fail to get");
      console.log(error);
    })
    document.addEventListener('click', this.hidePopup);
  },
  created() {

  },
  beforeUnmount() {
    // 移除全局点击事件监听
    document.removeEventListener('click', this.hidePopup);
  },
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
#contentBox{
  border-radius: 10px;
  border:1px solid black;
}
ul{
  list-style-type: none;
}
.popup {
  position: absolute;
  background-color: #fff;
  padding: 10px;
}
li:hover{
  background-color: #ccc;
}
</style>