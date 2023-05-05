<template>
    <div class="page">
        <div class="header-w">
            <div class="close-title display-flex align-center">
                <div class="close" @click.stop="onBack"></div>
                <div class="name">Translation</div>
            </div>
        </div>
        <div class="page-con">
            <div class="tr-name">Lorem ipsum dolor sit amet consectetur. Elit velit in siteu amet justo. Eros a eget nisl
                risus ac. Consequat pellentesque amet aenean pellentesque egestas massa.</div>
            <van-cell center title="Traveling">
                <template #right-icon>
                    <van-switch v-model="checked"  active-color="#33E6F6" inactive-color="#dcdee0" />
                </template>
            </van-cell>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter()
let checked = ref(true)
const onBack = ()=>{
    router.go(-1)
}
</script>

<style lang="less" scoped>
.page {
    min-height: 100vh;
    background-color: #191A32;
    padding-top: 94px;
    padding-bottom: 160px;

    .header-w {
        position: fixed;
        top: 0px;
        width: 100%;
        background-color: #191A32;
        z-index: 1;

        .close-title {
            padding-top: 9px;
            padding-left: 17px;
            padding-bottom: 25px;

            .close {
                background: url("../../assets/imgs/back.png");
                width: 40px;
                height: 40px;
                background-size: 100% auto;
                margin-right: 14px;
            }

            .name {
                font-weight: 400;
                font-size: 20px;
                line-height: 20px;
                color: #FFFFFF;
            }
        }
    }

    .page-con {
        padding: 0px 30px;

        .tr-name {
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 20px;
            letter-spacing: 0.5px;
            color: #FFFFFF;
            margin-bottom: 22px;
        }
    }
}
:deep(.van-cell){
    padding: 0px;
    background:transparent;
}
:deep(.van-cell__title span){
    color:#FFFFFF;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0.5px;
    color: #FFFFFF;
}
</style>