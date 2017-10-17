<template lang="html">
  <div class="call-container">
      <!-- <h3 class="call-loding">与菜鸟前端聊天中</h3>  -->
      <div class="chat-box">
        <ul ref="chatlist">
            <li>Hello，欢迎来访~</li>
            <li>额，你是谁？</li>
            <li>前端菜鸟。。。 正在变大鸟的路上~</li>
            <li>Uh....</li>
            <li>
                这是我的GitHub: <a href="https://github.com/coderLius" target="_blank">https://github.com/coderLius</a><br>
                里面有一些作品，小玩意，希望得到您的认可~
            </li>
        </ul>
         
         <router-link to='/home/chatlogin'>
          <div class="btn-chat" ref="gobtn">去聊天</div>
         </router-link>
      </div>

     
  </div>
</template>

<script>
export default {
  mounted() {
    var listLi = this.$refs.chatlist.children;
    var gobtn = this.$refs.gobtn
    setTimeout(function() {
      listLi[0].style.opacity = 1;
    }, 600);
    var i = 1;
    var timer = setInterval(() => {
      listLi[i].style.opacity = 1;
      i++;
      if (i === listLi.length) {
        clearInterval(timer);
        console.log(this.$refs)
        gobtn.style.transform = 'translateX(0)';
      }
    }, 2000);
  }
}


</script>

<style scoped lang="css">
.call-container{
  padding: 60px 0;
}

h3.call-loding {
  /* text-align: center; */
  line-height: 2em;
  font-size: 20px;
}

.btn-chat {
   width: 20%;
   margin: 10px auto;
   border: 2px solid #b6d7f7; 
   background: #f5f7f9;
   color: #b6d7f7;
   text-align: center;
   font-size: 16px;
   line-height: 2em;
   border-radius: .5em;
   transform: translateX(-1000px);
   transition: all .5s ease-in-out;
} 

.btn-chat:hover{
  cursor: pointer;
  border-color: #93caff;
  color: #93caff;
}

ul {
  width: 60%;
  border: 1px solid #b6d7f7;
  overflow: auto;
  padding: 20px;
  border-radius: .5em;
  margin: 0 auto;
  list-style: none;
}

li {
  line-height: 1.2em;
  padding: 4px 12px;
  border-radius: .5em;
  margin: 8px 0;
  max-width: 80%;
  word-wrap: break-word;
  word-break: break-all;
  transition: all .5s ease-in-out;
  opacity: 0;
  font-size: 16px;
}
li.active{
  opacity: 1;
}

li:nth-child(odd) {
  float: left;
  clear: both;
  background: #b6d7f7;
}

li:nth-child(even) {
  float: right;
  clear: both;
  background: #C1FFC1;
}
</style>
