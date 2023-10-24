<template>
  <div class="container">
    <h1 class="hint">Step 5: Generation of simulation results<br></h1>
    <div class="button-container">
      <back-btn class="left-button" to="/controllerVhdl">Back</back-btn>
      <next-step-btn class="right-button" to="/">Next Step</next-step-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "getResult"
}
</script>

<style scoped>
.container{
  /*background-color: aqua;*/
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
}

.hint{
  margin: 40px 0 40px 0;
  font-size: 30px;
}

.button-container{
  margin-top:40px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}

.left-button{
  margin-right: 10px;
}

.right-button{
  margin-left: 10px;
}
</style>