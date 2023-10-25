<template>
  <div class="container">
    <h1 class="hint">Step 7: Generation of data visualizations<br></h1>
    <div class="button-container">
      <back-btn class="left-button" to="/simulationResult">Back</back-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
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