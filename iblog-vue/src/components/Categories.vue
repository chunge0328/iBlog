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
       :aid="item.id" :title="item.title" 
       ></article-item>
  </div>

</template>

<script>
import ArticleItem from './ArticleItem'
export default {
  data() {
    return {
      list: [
        {
          title: 'fdifahodis',
          id: 'sdfadf'
        }
      ],
      isActive: [false, false, false, false, false]
    }
  },
  methods: {
    handleType(e) {
      if (e.target.nodeName == 'LI') {
        this.isActive = [false, false, false, false, false]
        let index;
        console.log(e.target.innerHTML)
        switch (e.target.innerHTML) {
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
      }
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
</style>
