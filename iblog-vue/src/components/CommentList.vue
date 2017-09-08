<template lang="html">
  <div class="comment-list">
        <h3 class="comment-title">评论（{{list.length}}）</h3>
        <div class="comment-item" v-for="item in list">
            <div class="item-nav">
                <img class="img" src="https://secure.gravatar.com/avatar/e32da773074fa030e1399494a4c389c1?s=32" height="32" width="32">
                <div class="txt">
                    <span class="comment-time">{{item.time}}</span> 
                    <h5>{{item.unick}}</h5>
                   <p>{{item.content}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import bus from '../assets/eventbus'
export default {
    data(){
        return {
            list: []
        }
    },
    methods: {
        fetchData(url) {
            this.$http.get(url).then((res) => {
                var list = res.body.list
                list.reverse()
                this.list = list
            }).catch(function(err) {
                console.log('ERR',err)
            })
        }
    },
    mounted() {
        let id = this.$route.params.id
        this.fetchData(`http://182.254.211.214:9090/api/comment/list?id=${id}`)
        bus.$on('comment-add', (msg) => {
            if (msg) {
                // list 更新
                this.fetchData(`http://182.254.211.214:9090/api/comment/list?id=${id}`)
                console.log('aaa')
            }
        })
    }
}
</script>

<style scoped lang="css">
.comment-title {
    font-size: 20px;
    color: #24292e;
    font-weight: 400;
    border-bottom: 2px solid #b6d7f7;
    padding: 8px;
}

.comment-list {}

.comment-item {
    padding: 8px;
    margin: 12px 0;
    border: 1px solid #b6d7f7;
    overflow: auto;
}

.comment-item .item-nav .txt {
    float: left;
    font-size: 16px !important;
    color: #24292e;
    width: calc( 100% - 50px);
    margin-left: 12px;
}

.comment-item .item-nav h5 {
    font-size: 16px !important;
}

.comment-item .item-nav .img {
    display: block;
    float: left;
}

.comment-time {
    float: right;
    font-size: 12px;
    color: #999;
    margin-right: 12px;
}
</style>

