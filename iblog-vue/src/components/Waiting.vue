<template lang="html">

    <div class="waiting-box">
        <span class="loading">正在加载中...</span>
    </div>

</template>

<script>
export default{}
</script>

<style scoped lang="css">
.waiting-box{
    text-align: center;
    padding: 10px;
}
.loading{
    font-size: 16px;
    display: inline-block;
    animation: w 1s ease 0s infinite;
}

@keyframes w {
    0%{transform: scale(1); color: #505050}
    20%{color: #404040}
    40%{color: #303030}
    60%{color: #202020}
    80%{color: #101010}
    100%{transform: scale(1.4); color: #000}
}
</style>
