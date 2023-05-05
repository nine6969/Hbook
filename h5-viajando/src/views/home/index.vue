<template>
    <div class="page">
        <div class="searh-header">
            <div class="search-box">
                <van-field label-class="seach-label">
                    <template #label>
                        <div class="display-flex align-center">
                            <img src="../../assets/imgs/search.png" alt=""  class="left-icon">
                        </div>
                    </template>
                    <template #input>
                        <div class="seach-input" @click.stop="onFocus">
                            <div class="where" v-if="showAdrTips">Where to?</div>
                            <input  placeholder="Anywhere · Any week · Add guest"  readonly/>
                        </div>
                    </template>
                    <template #button>
                        <div class="display-flex align-center" @click.stop="onShowFilter">
                            <img src="../../assets/imgs/filter.png" alt=""  class="right-icon">
                        </div>
                    </template>
                </van-field>
            </div>
            <div class="labels display-flex justy-between align-center">
                <div class="label display-flex flow-column align-center" @click="onchangeLabel(0)">
                    <img src="../../assets/imgs/labels/label1-1.svg" alt="" v-show="store.label == 0">
                    <img src="../../assets/imgs/labels/label1.svg" alt="" v-show="store.label != 0">
                    <p :class="{'actlabel':store.label == 0?true:false}">Surfing</p>
                </div>
                <div class="label display-flex flow-column align-center" @click="onchangeLabel(1)">
                    <img src="../../assets/imgs/labels/label2-1.svg" alt="" v-show="store.label == 1">
                    <img src="../../assets/imgs/labels/label2.svg" alt="" v-show="store.label != 1">
                    <p :class="{'actlabel':store.label == 1?true:false}">Towers</p>
                </div>
                <div class="label display-flex flow-column align-center" @click="onchangeLabel(2)">
                    <img src="../../assets/imgs/labels/label3-1.svg" alt="" v-show="store.label == 2">
                    <img src="../../assets/imgs/labels/label3.svg" alt="" v-show="store.label != 2">
                    <p :class="{'actlabel':store.label == 2?true:false}">Desert</p>
                </div>
                <div class="label display-flex flow-column align-center" @click="onchangeLabel(3)">
                    <img src="../../assets/imgs/labels/label4-1.svg" alt="" v-show="store.label == 3">
                    <img src="../../assets/imgs/labels/label4.svg" alt="" v-show="store.label != 3">
                    <p :class="{'actlabel':store.label == 3?true:false}">Arctic</p>
                </div>
                <div class="label display-flex flow-column align-center" @click="onchangeLabel(4)">
                    <img src="../../assets/imgs/labels/label5-1.svg" alt="" v-show="store.label == 4">
                    <img src="../../assets/imgs/labels/label5.svg" alt="" v-show="store.label != 4">
                    <p :class="{'actlabel':store.label == 4?true:false}">Island</p>
                </div>
                <div class="label display-flex flow-column align-center" @click="onchangeLabel(5)">
                    <img src="../../assets/imgs/labels/label6-1.svg" alt="" v-show="store.label == 5">
                    <img src="../../assets/imgs/labels/label6.svg" alt="" v-show="store.label != 5">
                    <p :class="{'actlabel':store.label == 5?true:false}">Camping</p>
                </div>
            </div>
        </div>
        <div class="scroll">
            <div class="list">
                <div class="item" v-for="(item,index) in store.homeList" :key="index" @click.stop="onLookItem(item)">
                    <div class="swipe-box">
                        <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white" v-if="item.imgs&&item.imgs.length>0">
                            <van-swipe-item v-for="child in item.imgs" >
                                <img :src="child.img" alt="" class="example-img">
                            </van-swipe-item>
                        </van-swipe>
                        <van-icon name="like-o" class="like" v-if="!item.like" @click.stop="onChangeLike(item)"/>
                        <van-icon name="like-o" class="like" color="#33E6F6" v-else @click.stop="onChangeLike(item)"/>
                    </div>
                    <div class="name-collect display-flex justy-between">
                        <p class="name">{{ item.name }}</p>
                        <div class="collect display-flex">
                            <van-icon name="star-o" class="collect-icon"/>
                            <p>{{ item.score }}</p>
                        </div>
                    </div>
                    <div class="range">{{ item.range }}</div>
                    <div class="range">{{ item.time }}</div>
                    <div class="price">
                        {{ item.price }}night
                    </div>
                    <div class="act-like">
                        <van-icon name="like-o" class="like" v-if="!item.like" @click.stop="onChangeLike(item)"/>
                        <van-icon name="like-o" class="like" color="#33E6F6" v-else @click.stop="onChangeLike(item)"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="map">
            <div class="map-box" @click="onClickMap">
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import { useStore } from '/@/stores/index'

const store = useStore()
const router = useRouter()

let showAdrTips = ref(true)
// let label = ref(0)

const onchangeLabel = (val)=>{
    store.label = val
    store.getHomeList()
}

const onChangeLike= (item)=>{
    item.like = !item.like
}

//选择地图
const onClickMap = ()=>{

}

//点查询
const onFocus = ()=>{
    router.push({path:'/where'})
}

//点击过滤
const onShowFilter = ()=>{
    router.push({path:'/filters'})
}

//查询明细
const onLookItem = (item)=>{
    router.push({path:'/homeDetail'})
}

store.getHomeList()
</script>

<style lang="less" scoped>
.page {
    position: relative;
    .searh-header {
        padding-top: 20px;
        height: 165px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        position: fixed;
        top: 0px;
        width: 100%;
        z-index: 1;
        background: #191A32;
        .search-box {
            margin: 0px 27px 0px 26px;
            height: 56px;
            background: #FBFBFF;
            border-radius: 8px;
            padding: 8px 18px 8px 20px;
            position: relative;
            .left-icon{
                width: 18.76px;
                height: 19.22px;
                object-fit: fill;
                margin-bottom: 5px;
            }
            .right-icon{
                width: 35px;
                height: 35px;
                object-fit: fill;
            }
            .where{
                color:rgba(50, 55, 85, 0.85);
                font-size: 14px;
                // position: absolute;
                // top: 2px;
                line-height: 18px;
            }
            .seach-input{
                width: 100%;
                display: flex;
                flex-flow: column;
                input{
                    outline-style: none;
                    border: 0px;
                    background-color: transparent;
                    // position: absolute;
                    // bottom: 0;
                    color: rgba(50, 55, 85, 0.85);
                    font-size: 14px;
                    padding-left: 0px;
                }
                ::placeholder{
                    color: rgba(50, 55, 85, 0.45);
                }
            }
        }

        :deep(.search-box .seach-label){
            width: 34px;
            display: flex;
            align-items: center;
        }
        :deep(.search-box .van-cell){
            background:transparent;
            padding: 0px;
            // line-height: 29px;
            height: 40px;
        }
        :deep(.search-box input){
            width: 100%;
        }
        :deep(.search-box  .van-field__control){
            position: relative;
            height: 100%;
        }
        :deep(.search-box .van-field__body){
            height: 100%;
        }
        :deep(.search-box .van-cell){
            height: unset;
        }
        .labels{
            margin: 23px 27px 0px 26px;
            .label{
                img{
                    display: block;
                }
                .icon{
                    filter: drop-shadow(#ffffff 0px 0);
                }
                .icons{
                    filter: drop-shadow(rgba(255, 255, 255, 0.6) 0px 0);
                }
                p{
                    font-size: 13px;
                    color: rgba(255, 255, 255, 0.6);
                    height: 20px;
                    line-height: 20px;
                }
                .actlabel{
                    color: #FFFFFF;
                }
                &:nth-child(1){
                    img{
                        height: 30.46px;
                        width: 28.33px;
                    }
                }
                &:nth-child(2){
                    img{
                        height: 28.33px;
                        width: 19.83px;
                    }
                }
                &:nth-child(3){
                    img{
                        height: 28.33px;
                        width: 28.33px;
                    }
                }
                &:nth-child(4){
                    img{
                        height: 26.57px;
                        width: 26.62px;
                    }
                }
                &:nth-child(5){
                    img{
                        height: 28.33px;
                        width: 28.5px;
                    }
                }
                &:nth-child(5){
                    img{
                        height: 25px;
                        width: 25px;
                    }
                }
            }
        }
    }

    .scroll {
        overflow-x: hidden;
        overflow-y: auto;
        padding-left: 27px;
        padding-right: 26px;
        background-color: #191A32;
        padding-top: 193px;
        padding-bottom: 100px;
        :deep(.van-swipe-item){
            border-radius: 16px;
            overflow: hidden;
        }
        :deep(.van-swipe-item .example-img){
            height: 375px;
            width: 100%;
            border-radius: 16px;
            overflow: hidden;
            object-fit: cover;
        }
        :deep(.van-swipe__indicators){
            bottom:18px;
        }
        .list{
            .item{
                padding-bottom: 24px;
                .swipe-box{
                    position: relative;
                    .like{
                        position: absolute;
                        top: 19px;
                        right: 21px;
                        font-size: 20px;
                    }
                }
                .name-collect{
                    padding-top: 16px;
                    .name{
                        font-weight: 500;
                        font-size: 18px;
                        line-height: 20px;
                        color: #FFFFFF;
                    }
                    .collect{
                        margin-left: 10.97px;
                        .collect-icon{
                            font-size: 20px;
                        }
                        p{
                            font-weight: 400;
                            font-size: 18px;
                            line-height: 20px;
                            color: #FFFFFF;
                            margin-left: 10.97px;
                        }
                    }
                }
                .range{
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 20px;
                    color: rgba(255, 255, 255, 0.6);
                }
                .price{
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 20px;
                    color: #FFFFFF;
                    margin-top: 4px;
                }
                .act-like{
                    margin-top: 24px;
                    font-size: 20px;
                }
            }
        }
    }
    .map{
        position: fixed;
        bottom: 122px;
        width: 100%;
        .map-box{
            background: url('../../assets/imgs/map.png');
            width: 125px;
            height: 50px;
            background-size: 100% auto;
            margin: 0 auto;
        }
    }

}


</style>