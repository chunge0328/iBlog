<template lang="html">
  <div>
    <div class="chat-list">

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
    
    },
    mounted() {

    }
}    
</script>

<style scoped lang="css">
.char-container{
    font-size: 16px;
}
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

.chat-list{
    margin: 10px auto;
    width: 90%;
    height: 500px;
    border: 1px solid #93caff;  
    border-radius: .4em;
}
</style>
