<template>
    <div class="page">
        <div class="header-w">
            <div class="close-title display-flex align-center">
                <div class="close" @click.stop="onBack"></div>
                <div class="name">Payment & payouts</div>
            </div>
        </div>

        <div class="page-con">
            <div class="list">
                <div class="name">Traveling</div>
                <div class="item display-flex justy-between align-center">
                    <p>Payment methods</p>
                    <van-icon name="arrow" color="#FFFFFF"/>
                </div>
                <div class="item display-flex justy-between align-center">
                    <p>Your payments</p>
                    <van-icon name="arrow" color="#FFFFFF"/>
                </div>
                <div class="item display-flex justy-between align-center">
                    <p>Credits & coupons</p>
                    <van-icon name="arrow" color="#FFFFFF"/>
                </div>
            </div>

            <div class="list">
                <div class="name">Hosting</div>
                <div class="item display-flex justy-between align-center">
                    <p>Payout methods</p>
                    <van-icon name="arrow" color="#FFFFFF"/>
                </div>
                <div class="item display-flex justy-between align-center">
                    <p>Tax info</p>
                    <van-icon name="arrow" color="#FFFFFF"/>
                </div>
                <div class="item display-flex justy-between align-center">
                    <p>Donations</p>
                    <van-icon name="arrow" color="#FFFFFF"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter()

//返回
const onBack = ()=>{
    router.go(-1)
}
</script>

<style lang="less" scoped>
.page{
    min-height: 100vh;
    background-color: #191A32;
    padding-top: 94px;
    padding-bottom: 160px;

    .header-w{
        position: fixed;
        top: 0px;
        width: 100%;
        background-color: #191A32;
        z-index: 1;
        .close-title{
            padding-top:9px;
            padding-left: 17px;
            padding-bottom: 25px;
            .close{
                background: url("../../assets/imgs/back.png");
                width: 40px;
                height: 40px;
                background-size: 100% auto;
                margin-right: 14px;
            }
            .name{
                font-weight: 400;
                font-size: 20px;
                line-height: 20px;
                color: #FFFFFF;
            }
        }
    }
    .page-con{
        padding: 0 29px 0 24px;
        .list{
            padding-bottom: 15px;
            border-bottom: 1px solid #323464;
            padding-top: 12px;
            &:nth-last-child(1){
                border-bottom:unset;
            }
            &:nth-child(1){
                padding-top: 0px;
            }
            .name{
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                line-height: 20px;
                letter-spacing: 0.5px;
                color: #FFFFFF;
            }
            .item{
                margin-top: 9px;
                font-style: normal;
                font-weight: 300;
                font-size: 15px;
                line-height: 20px;
                letter-spacing: 0.5px;
                color: #FFFFFF;
                p{
                    color:rgba(255, 255, 255, 0.8);
                }
            }
        }
    }
}
</style>