<!--答题游戏结束页面-->
<template>
  <div>
    <h2 style="position: absolute; top:40%; left:40%;">
      游戏结束！1号选手的得分为{{this.$route.params.score1}}，2号选手的得分为{{this.$route.params.score2}}。
    </h2>
    <br><br>
    <el-button style="position: absolute; top:10%; left:80%;" type="primary" @click="goBack">返回游戏首页</el-button>
  </div>
</template>

<script>
  export default {
    name: "end",
    methods: {
      goBack: function () {
        this.$router.push({name: 'start'});
      }
    }
  }
</script>

<style scoped>

</style>
