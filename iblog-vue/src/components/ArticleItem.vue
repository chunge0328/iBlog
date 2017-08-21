<template lang="html">
      <div class="art-item">
          <router-link :to="'/home/articlemain/'+aid">
                <span class="art-title">{{name}}</span>
                <div class="tag-box">
                <span>占位</span>
                <span>占位</span>
                <span>占位</span>
                </div> 
                <p class="sm">占位  这是摘要</p>
          </router-link>
      </div>
</template>

<script>
export default {
    props:{
        aid: String,
        name: String
    }
}
</script>

<style scoped lang="css">
.art-item {
    border-bottom: 2px dotted #ccc;
    padding: 20px 12px;

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
    font-size: 20px;
    /* text-align: center; */
    word-break: break-word;
    font-weight: 400;
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
    color: #999;
    font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
    font-size: 12px;
}
</style>
