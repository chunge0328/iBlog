<template lang="html">
   <div>  
       <div class="box" ref="box">
            <div class="show-pub" @click="handlePubComment">
               吐槽点这里~ ~ ~ ~ ~ ~
            </div>
           
            <textarea class="input-txt" v-model="content"/>
             <div class="input-box">
                昵称：<input type="text" class="extra-info" v-model="unick"/>
                邮箱：<input type="text" class="extra-info" v-model="email"/>
                <input type="button" class="pub" value="发表" @click="handleCommit"/>
            </div>
       </div> 
   </div>
</template>


<script>
import bus from '../assets/eventbus'
export default {
    data() {
        return {
            pubIsShow: false,
            content: '',
            email: '',
            unick: ''
        }
    },
    props:{
        aid: String
    },
    methods: {
        handlePubComment() {
            var box = this.$refs.box
            if (!box.classList.contains('active')) {
                box.classList.add('active')
            } else {
                box.classList.remove('active')
            }
        },
        handleCommit() {
            let id = this.$route.params.id
            if(!this.content){
                alert('评论不能为空')
                return
            }
            if(!this.unick){
                alert('请填写昵称')
                return
            }
            this.fetchData(`http://182.254.211.214:9090/api/comment/add?id=${id}&content=${this.content}&unick=${this.unick}&email=${this.email}`)
        },
        fetchData(url) {
            this.$http.get(url).then((res) => {
                if(res.body.result){
                    bus.$emit('comment-add',true)
                    this.content = ''
                    this.unick = ''
                    this.email = ''
                }else{
                    bus.$emit('comment-add',false)
                }
            }).catch(function(err) {
                bus.$emit('comment-add',false)
            })
        }
    }
}
</script>

<style scoped lang="css">
.box {
    position: relative;
    font-size: 14px;
    transition: all 1s ease;
    max-height: 36px;
    overflow: hidden;
    border-top: 12px solid #f5f7f9;
    padding: 0 20px;
}

.box.active {
    max-height: 1000px;
}

.show-pub {
    margin: 0 -20px 10px;
    cursor: pointer;
    font-size: 14px;
    text-align: center;
    padding: 8px;
    background-color: #b6d7f7;
    color: #fff;
}

.input-txt {
    box-sizing: border-box;
    width: 100%;
    height: 4em;
    font-size: 14px;
    line-height: 1.5em;
    border-radius: 4px;
    padding: 4px;
    font-family: "微软雅黑"
}

.pub {
    position: relative;
    right: -80px;
    width: 10%;
    font-size: 14px;
    height: 2em;
    border: none;
    border-radius: 4px;
    outline: none;
    background-color: #ccc;
    color: #fff;
    vertical-align: middle;
}

.pub:active {
    font-weight: bold;
    background-color: #c2c2c2;
}

.input-box {
    padding: 8px 4px;
}

.extra-info {
    border: 1px solid #ccc;
    border-radius: .2em;
    height: 1.6em;
    line-height: 1.6em;
    font-size: 14px;
    padding: 0 4px;
    margin-right: 24px;
    vertical-align: middle;
}
</style>

