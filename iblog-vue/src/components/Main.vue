<template lang="html">

    <div class="art-list">
      <article-item
       v-for="item in list"
       :aid="item.id" :title="item.title" :summary="item.summary" :list="item.list" :pub_time="item.pub_time" :read_count="item.read_count"
       ></article-item>

       <button class="see-more" @click="getMore()" v-if="!infoshow">查看更多</button>
       <button class="info-show" v-if="infoshow">到底啦</button>
    </div>

</template>

<script>
import ArticleItem from './ArticleItem'
export default {
  name: 'main',
  components: {
    ArticleItem
  },
  data() {
    return {
      list: [],
      page: 0,
      size: 6,
      infoshow: false
    }
  },
  created() {
    this.fetchData(this.page,this.size)
   
  },
  methods: {
    fetchData(page,size) {
      this.$http.get(`http://182.254.211.214:9090/api/article/list?size=${size}&page=${page}&type`).then((res) => {
        console.log(res.body.list)
        if(res.body.list.length > 0){
          this.list = this.list.concat(res.body.list)
        }else{
          this.infoshow = true
          console.log('shoshowshowshow')
        }
      }).catch(function (err) {
        console.log(err)
      })
    },
    getMore(){
      this.fetchData(++this.page,this.size)
    }
  }

}
</script>

<style scoped lang="css">
.art-list {
  padding: 40px;
  font-size: 16px;
}

.see-more,.info-show {
  display: block;
  margin: 20px auto;
  padding: 4px 12px;
  color: #555;
  font-size: 14px;
  background: #fff;
  border-radius: 2px;
  border: 2px solid #555;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out 0s;
  outline: none;
}
.see-more:hover{
  background: #222;
  color: #fff;
  border-radius: 0;
  cursor: pointer;
}

</style>
