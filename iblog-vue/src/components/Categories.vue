<template lang="html">
  <div class="categ">
    <ul class="types" @click="handleType">
      <li :class="{active : isActive[0]}">JavaScript</li>
      <li :class="{active : isActive[1]}">HTML/CSS</li>
      <li :class="{active : isActive[2]}">HTTP</li>
      <li :class="{active : isActive[3]}">算法</li>
      <li :class="{active : isActive[4]}">其他</li>
    </ul>
    <hr>
      <article-item
       v-for="item in list"
        :aid="item.id" :title="item.title" :summary="item.summary" :list="item.list"
       ></article-item>

      <button class="see-more" @click="getMore()" v-if="!infoshow">查看更多</button>
       <button class="info-show" v-if="infoshow">到底啦</button>

  </div>

</template>

<script>
import ArticleItem from './ArticleItem'
export default {
  data() {
    return {
      list: [],
      page: 0,
      size: 6,
      infoshow: false,
      type: 'JavaScript',
      isActive: [true, false, false, false, false]
    }
  },
  beforeMount(){
    this.fetchData(this.page, this.size, this.type, false)
  },
  methods: {
    handleType(e) {
      if (e.target.nodeName == 'LI') {
        this.isActive = [false, false, false, false, false]
        let index;
        console.log(e.target.innerHTML)
        let type = e.target.innerHTML
        switch (type) {
          case 'JavaScript':
            index = 0
            break
          case 'HTML/CSS':
            index = 1
            break
          case 'HTTP':
            index = 2
            break
          case '算法':
            index = 3
            break
          case '其他':
            index = 4
            break
        }
        this.isActive[index] = true
        this.page = 0
        this.type = type
        this.infoshow = false
        this.list = []
        this.fetchData(this.page, this.size, this.type, false)
      }
    },
    fetchData(page, size, type, isMore) {
      this.$http.get(`http://182.254.211.214:9090/api/article/list?size=${size}&page=${page}&type=${type}`).then((res) => {
        console.log(res.body.list)
        if (isMore) {
          if (res.body.list.length > 0) {
            this.list = this.list.concat(res.body.list)
          } else {
            this.infoshow = true
          }
        } else {
          console.log('change type ...')
          if(res.body.list.length > 0){
            this.list = res.body.list
          }else{
            this.infoshow = true
          }
        }

      }).catch(function (err) {
        console.log(err)
      })
    },
    getMore() {
      this.fetchData(++this.page, this.size, this.type, true)
    }
  },
  components: {
    ArticleItem
  }
}
</script>

<style scoped lang="css">
.types {
  overflow: auto;
}


.categ {
  padding: 10px 40px 40px 40px;
  font-size: 16px;
}


.types>li {
  float: left;
  list-style: none;
  margin: 20px;
  padding: 4px 12px;
  color: #555;
  font-size: 14px;
  background: #fff;
  border-radius: 4px;
  border: 2px solid #555;
  text-decoration: none;
  -webkit-transition: background-color 0.2s ease-in-out 0s;
  transition: background-color 0.2s ease-in-out 0s;
  outline: none;
}

.types>li:hover,
.types>li.active {
  background: #222;
  color: #fff;
  border-radius: 0;
  cursor: pointer;
}

.see-more,
.info-show {
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

.see-more:hover {
  background: #222;
  color: #fff;
  border-radius: 0;
  cursor: pointer;
}
</style>
