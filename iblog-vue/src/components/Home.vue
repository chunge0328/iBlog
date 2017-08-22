<template lang="html">
    <div class="container">
        <div class="left-menu">
            <div class="site-meta">博客</div>
            <div class="u-info">
                <img class="site-author-image" itemprop="image" src="https://coderlius.github.io/images/avatar.gif" alt="corderLius">
               <p class="info-desc">设计师美感，工匠师精细，数学家严谨，程序员生活。。。</p>
            </div>
           
            <ul class="m-list"  @click="choose">
                <li in="main" :class="{ active: isActive[0] }">
                    <router-link to='/home/main'>主页</router-link>
                </li>
                <li id="categories" :class="{ active: isActive[1] }">
                    <router-link to='/home/categories'>分类</router-link>
                </li>
                <li id="call" :class="{ active: isActive[2] }">
                    <router-link to='/home/call'>私信</router-link>
                </li>
            </ul>
        </div>

        <div class="main">
             <keep-alive><router-view v-if="$route.meta.keepAlive"></router-view></keep-alive>
             <router-view v-if="!$route.meta.keepAlive"></router-view> 
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            isActive: [true, false, false]
        }
    },
    methods: {
        choose(e) {
            let target = e.target
            let index = 0
            while (target.nodeName !== 'UL') {
                if (target.nodeName === 'LI') {
                    switch (target.id) {
                        case 'home':
                            index = 0
                            break;
                        case 'categories':
                            index = 1
                            break;
                        case 'call':
                            index = 2
                            break;
                    }
                    break;
                }
                target = target.parentNode
            }
            this.isActive = [false, false, false]
            this.isActive[index] = true
        }
    }
}

</script>

<style lang="css" scoped>
.container {
    overflow: auto;
    width: 960px;
    margin: 20px auto;
    font-size: 22px;
}

.active {
    position: relative;
    background: #f9f9f9;
}

.active::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -4px;
    margin-right: 20px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #bbb;
}

.left-menu {
    float: left;
    width: 240px;
    height: 500px;
}

.main {
    float: right;
    width: 700px;
    background-color: #fff;
}

.site-meta {
    padding: 20px 0;
    color: #fff;
    background: #222;
    font-size: 24px;
    text-align: center;
}

.m-list {
    width: 100%;
    font-size: 16px;
    margin: 20px 0;
    background-color: #fff;
}

.m-list>li {
    text-align: center;
}

.m-list>li a {
    padding: 10px 0;
    display: block;
    width: 100%;
    height: 100%;
    color: #000;
}

.m-list>li a:active {
    font-weight: bolder;
}

.m-list>li:hover {
    cursor: pointer;
    background: #f9f9f9;
}

.u-info {
    background-color: #fff;
    padding: 20px 0 8px;
}

.u-info img {
    display: block;
    margin: 0 auto;
    padding: 2px;
    max-width: 120px;
    height: auto;
    border: 1px solid #eee;
}

.info-desc {
    font-size: 14px;
    font-family: "微软雅黑";
    padding: 12px;
    line-height: 1.5em;
    text-indent: 28px;
}
</style>