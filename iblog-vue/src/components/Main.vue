<template lang="html">
    <div class="art-list">
      <article-item></article-item>
      <article-item></article-item>
      <article-item></article-item>
      <article-item></article-item>
      <article-item></article-item>
      {{aa}}
    </div>
</template>

<script>
import ArticleItem from './ArticleItem'
export default {
  components:{
    ArticleItem
  },
  data(){
    return{
      aa:1
    }
  }
 
}
</script>

<style scoped lang="css">
.art-list{
    padding: 40px;
    font-size: 16px;
}

</style>
