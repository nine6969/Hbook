<template>
    <div class="content">
        <div class="com">
            <router-view></router-view>
        </div>
        <div class="footer display-flex justy-between align-center">
            <div class="item display-flex flow-column align-center" @click="onLink('/index/home')">
                <img src="../assets/imgs/Explore2.png" alt="" v-if="curLabel == 0">
                <img src="../assets/imgs/Explore.png" alt="" v-else>
                <p :class="{'act':curLabel == 0?true:false}">Explore</p>
            </div>
            <div class="item display-flex flow-column align-center" @click="onLink('/index/wishlists')">
                <img src="../assets/imgs/xin2.png" alt="" v-if="curLabel == 1">
                <img src="../assets/imgs/xin.png" alt="" v-else>
                <p :class="{'act':curLabel == 1?true:false}">Wishlists</p>
            </div>
            <div class="item display-flex flow-column align-center" @click="onLink('/index/trips')">
                <img src="../assets/imgs/Trips2.png" alt="" v-if="curLabel == 2">
                <img src="../assets/imgs/Trips.png" alt="" v-else>
                <p :class="{'act':curLabel == 2?true:false}">Trips</p>
            </div>
            <div class="item display-flex flow-column align-center" @click="onLink('/index/Inbox')">
                <img src="../assets/imgs/Inbox2.png" alt="" v-if="curLabel == 3">
                <img src="../assets/imgs/Inbox.png" alt="" v-else>
                <p :class="{'act':curLabel == 3?true:false}">Inbox</p>
            </div>
            <div class="item display-flex flow-column align-center" @click="onLink('/index/profile')">
                <img src="../assets/imgs/Profile2.png" alt="" v-if="curLabel == 4">
                <img src="../assets/imgs/Profile.png" alt="" v-else>
                <p :class="{'act':curLabel == 4?true:false}">Profile</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref,watch} from 'vue';
import {useRouter,useRoute} from 'vue-router';
const router = useRouter()
const route = useRoute()

let curLabel = ref(0)

watch(() =>router.currentRoute.value.path,(newValue,oldValue)=> {
    if(newValue == '/index/home'){
        curLabel.value = 0
    }else if(newValue == '/index/wishlists'){
        curLabel.value = 1
    }else if(newValue == '/index/trips'){
        curLabel.value = 2
    }else if(newValue == '/index/Inbox'){
        curLabel.value = 3
    }else if(newValue == '/index/profile'){
        curLabel.value = 4
    }
},{ immediate: true })


const onLink = (url)=>{
    router.push(url)
}
</script>

<style lang="less" scoped>
.content{
    position: relative;
    height: 100vh;
    background-color: #191A32;
    .com{
        color: #fff;
    }
    .footer{
        height: 90px;
        background: #1F213B;
        position: fixed;
        bottom: 0;
        width: 100%;
        padding: 19px 27px 25px;
        .item{
            cursor: pointer;
            p{
                color: #FFFFFF;
                font-size: 13px;
                line-height: 20px;
            }
            img{
                object-fit: contain;
            }
            &:nth-child(1){
                img{
                    width: 20px;
                    height: 20px;
                }
            }
            &:nth-child(2){
                img{
                    width: 20px;
                    height: 18.35px;
                }
            }
            &:nth-child(3){
                img{
                    width: 20px;
                    height: 20px;
                }
            }
            &:nth-child(4){
                img{
                    width: 20px;
                    height: 20px;
                }
            }
            &:nth-child(5){
                img{
                    width: 20px;
                    height: 20px;
                }
                // p{
                //     transform: translateY(-3px);
                // }
            }
            
            .act{
                background: linear-gradient(180deg, #33B0F6 0%, #33E6F6 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
                font-style: normal;
            }
        }
    }
}
</style>