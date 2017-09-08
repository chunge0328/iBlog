<template lang="html">
      <div class="art-item">
          <router-link :to="'/home/articlemain/'+aid">
                <span class="art-title">{{title}}</span>
                <div class="tag-box">
                  <span>{{list}}</span>
                </div> 
                <p class="sm">
                    <span class="pub-time">发布于{{pub_time | formatDate}}</span>
                    <span class="read-count">{{read_count}}浏览</span>
                </p>
                <!-- <p class="sm main" v-if="summary">{{summary}}</p> -->
          </router-link>
      </div>
</template>

<script>
export default {
    props: {
        aid: String,
        title: String,
        list: String,
        summary: String,
        read_count: Number,
        pub_time: String
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

.art-item>a {
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

.sm.main {
    background-color: #f8f3f3;
    margin-top: 4px;
    padding: 4px;
    border-radius: 4px;
}

.read-count {
    margin-left: 20px;
    color: #969696;
    text-decoration: underline
}
</style>
