<!--整个答题游戏的首页-->
<template>
  <div>
    <h1 style="position: absolute; top: 13%; left: 45%;">游戏规则：</h1>
    <h2 style="position: absolute; top: 20%; left: 35%; width: 600px; text-align: justify;">
      1. 两个选手进行计时答题PK游戏，分别答10题（两人题目都随机），每题计时10秒，每位选手有自己的血量（初始值为100）和蓝量（初始值为20s），答错一题扣10血。
    </h2>
    <h2 style="position: absolute; top: 35%; left: 35%; width: 600px; text-align: justify;">
      2. 1号选手使用键盘上的数字键1-4选择选项，数字键5耗蓝加时（按一次续两秒）；
    </h2>
    <h2 style="position: absolute; top: 43%; left: 35%; width: 600px; text-align: justify;">
      3. 2号选手使用鼠标选择选项，另有加时按钮（点击一次续两秒）。
    </h2>
    <el-button style="position: absolute; top:10%; left:80%; " type="primary" @click="play">进入游戏</el-button>
  </div>
</template>

<script>
  export default {
    name: "start",
    methods: {
      play: function () {
        this.$router.push({name: 'game'});
      }
    }
  }
</script>

<style scoped>

</style>
