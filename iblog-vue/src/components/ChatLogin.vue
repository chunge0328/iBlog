<template lang="html">
  <div>
    <div id="loginbox">
        <div style="width:260px;margin:200px auto;" ref="boxLogin">
            <input type="text" class="uname" placeholder="起一个名字吧" id="username" name="username" />
            <router-link to='/home/chat'>
                <input type="button" class="btn-chat" value="提交"/>
            </router-link>
        </div>
    </div>    
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        hideLogin(){
            this.$refs.boxLogin.style.display = 'none';
        }
    },
    mounted() {

    }
}    
</script>

<style scoped lang="css">

.uname{
    line-height: 1.8em;
    border: 1px solid #b6d7f7;
    border-radius: .4em;
    padding: 0 .4em;
    outline: none;
}
.btn-chat {
   display: inline-block;
   padding: 2px 8px;
   margin: 10px auto;
   border: 2px solid #b6d7f7; 
   background: #f5f7f9;
   color: #b6d7f7;
   text-align: center;
   font-size: 16px;
   border-radius: .5em;
   transition: all .5s ease-in-out;
   font-size: 14px;
   outline: none;
} 

.btn-chat:hover{
  cursor: pointer;
  border-color: #93caff;
  color: #93caff;
}
</style>
