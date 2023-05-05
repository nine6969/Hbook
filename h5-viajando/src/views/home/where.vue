<template>
    <div class="page">
        <div class="close-title display-flex align-center">
            <div class="close" @click.stop="onClose"></div>
            <div class="name">Stays</div>
        </div>
        <div class="card">
            <div class="where">Where to?</div>
            <form action="/">
                <van-search
                v-model="whereKey"
                background="transparent"
                placeholder="Search destinations"
                :clearable="false"
                @search="onSearchWere"
                />
            </form>
            
            <div class="map-list">
                <div class="item" :class="{'mapact':curmap == 1?true:false}" @click="curmap = 1">
                    <div class="item-map"></div>
                    <div class="map-name">I’m flexible</div>
                </div>
                <div class="item" :class="{'mapact':curmap == 2?true:false}" @click="curmap = 2">
                    <div class="item-map"></div>
                    <div class="map-name">Europe</div>
                </div>
                <div class="item" :class="{'mapact':curmap == 3?true:false}" @click="curmap = 3">
                    <div class="item-map"></div>
                    <div class="map-name">I’m flexible</div>
                </div>
                <div class="item" :class="{'mapact':curmap == 4?true:false}" @click="curmap = 4">
                    <div class="item-map"></div>
                    <div class="map-name">Europe</div>
                </div>
            </div>
        </div>
        <div class="add-where">
            <van-cell-group inset>
                <van-field v-model="WhenKey" label="When" label-width="50" inputmode="search" :readonly="false" type="number">
                    <template #button>
                        <div class="add-tips">Any week</div>
                    </template>
                </van-field>
                <van-field v-model="whoKey" label="Who" label-width="50" inputmode="search" :readonly="false">
                    <template #button>
                        <div class="add-tips">Add guests</div>
                    </template>
                </van-field>
            </van-cell-group> 
        </div>
        <div class="bottom-action display-flex justy-between align-center">
            <div class="clear" @click="onClear">Clear all</div>
            <div class="search display-flex align-center" @click="onSearch()">
                <img src="../../assets/imgs/search2.png" alt="">
                <p>Search</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
// import {showToast } from 'vant';
import {useRouter} from 'vue-router';
const router = useRouter()
import { useStore } from '/@/stores/index'

const store = useStore()
let whereKey = ref('')
let WhenKey = ref('')
let whoKey = ref('')
let curmap = ref('')//选中的地图
//查询地图
const onSearchWere = ()=>{
    router.go(-1)
}

//
//关闭
const onClose = ()=>{
    router.go(-1)
}

//查询获得首页数据
const onSearch = ()=>{
    store.getHomeList()
    router.go(-1)
}

const onClear = ()=>{
    whereKey.value  = ''
    WhenKey.value  = ''
    whoKey.value  = ''
    curmap.value = ''
}
</script>


<style lang="less" scoped>
.page{
    min-height: 100vh;
    background-color: #191A32;
    .close-title{
        padding-top:9px ;
        padding-left: 17px;
        .close{
            background: url("../../assets/imgs/close.png");
            width: 40px;
            height: 40px;
            background-size: 100% auto;
            margin-right: 23px;
        }
        .name{
            font-weight: 400;
            font-size: 20px;
            line-height: 20px;
            color: #FFFFFF;
        }
    }
    .card{
        margin: 33px 27px 0 26px;
        background: #1C1D36;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        padding: 34px 20px 27px 25px;
        .where{
            font-weight: 700;
            font-size: 30px;
            line-height: 20px;
            color: #FBFBFF;
            letter-spacing: 0.5px;
            margin-bottom: 20px;
        }
        .map-list{
            white-space: nowrap;
            overflow-x: scroll;
            overflow-y: hidden;
            .item{
                display: inline-block;
                margin-right: 20px;
                .item-map{
                    width: 155px;
                    height: 155px;
                    border-radius: 10px;
                    background: url('../../assets/imgs/map-card.png') no-repeat;
                    background-size: 100% auto;
                    border:1px solid transparent;
                }
                .map-name{
                    margin-top: 17px;
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 20px;
                    color: #FFFFFF;
                }
            }
            .mapact{
                .item-map{
                    border:1px solid #33E6F6;
                }
            }
        }
    }
    :deep(.card .van-cell-group){
        background: transparent;
    }
    :deep(.card .van-cell-group--inset){
        margin:0px;
        margin-bottom: 27px;
    }
    :deep(.card .van-field){
        background: transparent;
        border: 1px solid #33E6F6;
        border-radius: 8px;
        padding-left: 12px;
        padding-right: 12px;
        height: 100%;
    }
    :deep(.card .van-field__control){
        color: #FFFFFF;
    }
    :deep(.card .van-search__content){
        background: transparent;
        padding-left:0px;
    }
    :deep(.card .van-search){
        padding: 0px;
        margin-bottom: 27px;
        height: 55px;
        margin-right: 5px;
    }
    :deep(.card .van-search__content){
        height: 100%;
    }
    :deep(.card .van-field__left-icon .van-icon){
        color: #FFFFFF;
    }

    .add-where{
        padding-left: 26px;
        padding-right: 27px;
        padding-top: 30px;
        .add-tips{
            font-weight: 400;
            font-size: 15px;
            color: #FFFFFF;
        }
    }
    :deep(.add-where .van-field){
        height: 55px;
        line-height: 35px;
        background:transparent;
        border: 1px solid #33E6F6;
        border-radius: 8px;
    }
    :deep(.add-where .van-cell-group){
        background:transparent;
    }
    :deep(.add-where .van-cell:after){
        border-bottom:unset;
    }
    :deep(.add-where .van-cell-group .van-cell){
        margin-bottom: 24px;
    }
    :deep(.add-where .van-field__label){
        font-weight: 400;
        font-size: 15px;
        color: rgba(255, 255, 255, 0.6);
    }
    :deep(.add-where .van-field__control){
        color: #FFFFFF;
    }

    .bottom-action{
        background: #1F213B;
        height: 90px;
        position: fixed;
        bottom: 0px;
        width: 100%;
        padding: 18px 36px 17px 33px;
        .clear{
            font-weight: 700;
            font-size: 18px;
            line-height: 20px;
            letter-spacing: 0.005em;
            color: rgba(255, 255, 255, 0.7);
        }
        .search{
            width: 130px;
            height: 55px;
            background: linear-gradient(99.27deg, #33B0F6 30.91%, #33E6F6 85.18%);
            border-radius: 8px;
            padding-left: 21px;
            padding-right: 21px;
            img{
                width: 24px;
                height: 24px;
                object-fit: fill;
                display: block;
                margin-right: 9px;
            }
            p{
                font-weight: 700;
                font-size: 18px;
                line-height: 20px;
                text-align: center;
                letter-spacing: 0.005em;
                color: #FFFFFF;
            }
        }
    }
}

.map-list::-webkit-scrollbar {
  display: none;
}
</style>