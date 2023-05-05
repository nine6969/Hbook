<template>
    <div class="page">
        <div class="header-w">
            <div class="close-title display-flex align-center">
                <div class="close" @click.stop="onClose"></div>
                <div class="name">Trips</div>
            </div>
            <div class="line"></div>
        </div>
        <div class="w-con">
            <div class="no-trip">
                <div class="tip-name">No trips booked...yet!</div>
                <div class="tips">Time to dust off your bags and start planning your next adventure</div>
                <div class="btn">Start searching</div>
            </div>
            <div class="line"></div>
            <div class="center">Can’t find your reservation here?Visit the Help Center</div>
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
    padding-top: 94px;
    padding-bottom: 110px;
    .header-w{
        position: fixed;
        top: 0px;
        width: 100%;
        background-color: #191A32;
        .close-title{
            padding-top:9px;
            padding-left: 17px;
            padding-bottom: 26px;
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
        .line{
            margin-right: 26px;
            margin-left: 27px;
            border-bottom: 1.5px solid #323464;
            height: 0px;
        }
    }
 
    .w-con{
        padding-right: 26px;
        padding-left: 27px;
        line-height: 100px;

        color: #ffffff;
        .no-trip{
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 20px;
            letter-spacing: 0.005em;
            color: #FFFFFF;
        }
        .tips{
            margin-top: 9px;
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 20px;
            letter-spacing: 0.5px;
            color: #FFFFFF;
        }
        .btn{
            width: 155px;
            height: 55px;
            line-height: 55px;
            left: 26px;
            top: 230px;
            border-radius: 8px;
            border: 1px solid rgba(51, 176, 246, 1);
            font-weight: 700;
            font-size: 18px;
            text-align: center;
            letter-spacing: 0.005em;
            color: #FFFFFF;
            box-sizing: border-box;
            margin-top: 19px;
        }
        .line{
            border-bottom: 1.5px solid #323464;
            height: 0px;
            margin-top: 25px;
        }
        .center{
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 20px;
            letter-spacing: 0.5px;
            color: #FFFFFF;
            padding-top: 19px;
        }
    }
}
</style>