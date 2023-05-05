<template>
    <div class="page">
        <div class="close-title display-flex align-center">
            <div class="close" @click.stop="onClose"></div>
            <div class="name">Wishlists</div>
        </div>
        <div class="ex display-flex align-center">
            <img src="../../assets/imgs/example/wishlists.png" alt="">
            <div class="des">Feb trip</div>
        </div>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router';
const router = useRouter()
const onClose = ()=>{
    router.go(-1)
}
</script>

<style lang="less" scoped>
.page{
    min-height: 100vh;
    background-color: #191A32;
    padding-bottom: 110px;
    .close-title{
        padding-top:9px;
        padding-left: 17px;
        padding-bottom: 40px;
        .close{
            background: url("../../assets/imgs/close.png");
            width: 40px;
            height: 40px;
            background-size: 100% auto;
            margin-right: 14px;
        }
        .name{
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            line-height: 20px;
            letter-spacing: 0.5px;
            color: #FBFBFF;
        }
    }
    .ex{
        padding: 0px 31px;
        img{
            width: 80px;
            height: 80px;
            border-radius: 12px;
            display: block;
            margin-right: 12px;
        }
        .des{
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 20px;
            letter-spacing: 0.005em;
            color: #FFFFFF;
        }
    }
}
</style>