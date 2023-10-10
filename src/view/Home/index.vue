<template xmlns="http://www.w3.org/1999/html">
  <div class="button-container">
    <div>
        <h3>Click to jump to
        <el-button type="primary" @click="gotoPart1">Part 1</el-button>
        </h3>
    </div>
    <div>
      <h3>
        Click to jump to
      <el-button type="primary" @click="gotoPart2">Part 2</el-button>
        </h3>
    </div>
    <div>
      <h3>
        Click to jump to
      <el-button type="primary" @click="gotoPart3">Part 3</el-button>
        </h3>
    </div>
    <div>
      <h3>
        Click to jump to
      <el-button type="primary" @click="gotoPart4">Part 4</el-button>
        </h3>
    </div>
    <div>
      <h3>
        Click to jump to
      <el-button type="primary" @click="gotoPart5">Part 5</el-button>
        </h3>
    </div>
    <div>
      <h3>
        Click to jump to
      <el-button type="primary" @click="gotoPart6">Part 6</el-button>
        </h3>
    </div>
    <div>
      <h3>
        Click to jump to
      <el-button type="primary" @click="gotoPart7">Part 7</el-button>
        </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){

  },
  methods:{
    gotoPart1(){
      this.$router.push("/upload/main")
    },
    gotoPart2(){
      this.$router.push("/download")
    },
    gotoPart3(){
      this.$router.push("/BD/JudgeAndCompleteAndGenerate")
    },
    gotoPart4(){
      this.$router.push("/physical/JudgeAndCompleteAndGenerate")
    },
    gotoPart5(){
      this.$router.push("/controllerVhdl")
    },
    gotoPart6(){
      this.$router.push("/assembleSystem")
    },
    gotoPart7(){
      this.$router.push("/propertyVerification")
    }
  }
}
</script>

<style scoped>
div{
  margin-left:25px;
}
.button-container{
  display: flex;
  flex-wrap: wrap;
  width:600px;
  height:500px;
  padding:85px 40px;
}
</style>