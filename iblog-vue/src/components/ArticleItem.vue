<template lang="html">
      <div class="art-item">
          <router-link to="">
                <h2 class="art-title">这是今日最劲爆头条</h2>
                <div class="tag-box">
                <span>算法</span>
                <span>JS</span>
                <span>HTML</span>
                </div> 
                <p class="sm">这是摘要</p>
          </router-link>
      </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="css">
.art-item {
    border-bottom: 2px dotted #ccc;
    padding: 12px;
}
.art-item:hover {
    cursor: pointer;
}

.art-item>a{
    display: block;
    width: 100%;
    height: 100%;
    color: inherit; 
}

.tag-box {
    float: right;
}

.art-title {
    float: left;
}

.tag-box span {
    float: left;
    display: block;
    padding: 4px;
    border-radius: 8px;
    border: 2px solid #ccc;
    font-size: 4px;
    margin: 4px;
}

.sm {
    clear: both;
    padding-top: 10px;
    font-size: 14px;
}
</style>
