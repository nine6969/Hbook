<template>
    <div class="page">
        <div class="header-w">
            <div class="close-title display-flex align-center">
                <div class="close" @click.stop="onClose"></div>
            </div>
        </div>
        <div class="page-co">
            <div class="con-title">Viajando</div>
            <div class="add-tips">You could earns</div>
            <div class="price">${{ detail.price*50  }} USD</div>
            <div class="price-des">
                <span>1 night </span>
                <span>at an estimated $50 USD a night</span>
            </div>
            <div class="slider">
                <van-slider v-model="detail.price" inactive-color="#323464" active-color="linear-gradient(266.92deg, #33B0F6 34.31%, #33E6F6 52.55%)" :min="1"/>
            </div>
            <div class="how">Learn how we estimate your earnings</div>
            <div class="my-addr-search">
                <form action="/">
                    <van-search
                    v-model="detail.addrs"
                    background="transparent"
                    placeholder="Los Angeles, California"
                    :clearable="false"
                    @search="onSearch"
                    />
                </form>
            </div>
            <div class="map">
                <img src="../../assets/imgs/map-card2.png" alt="">
            </div>
        </div>

        <div class="bottom-action" @click="onReady">
            <div class="ready">Ready to Airbnb it?</div>
            <div class="btns display-flex justy-center align-center">
                <div class="home"></div>
                <p>Airbnb Setup</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter()
let detail = ref({
    price:1,
    addrs:''
})

const onReady = ()=>{
    router.replace({path:'/index/home'})
}
const onSearch = ()=>{

}
const onClose = ()=>{
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
                background: url("../../assets/imgs/close.png");
                width: 40px;
                height: 40px;
                background-size: 100% auto;
                margin-right: 14px;
            }
        }
    }
    .page-co{
        .con-title{
            text-align: center;
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            letter-spacing: 0.5px;
            background: linear-gradient(180deg, #33B0F6 0%, #33E6F6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
        .add-tips{
            text-align: center;
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            letter-spacing: 0.5px;
            color: #FFFFFF;
            margin-top: 0px;
        }
        .price{
            font-style: normal;
            font-weight: 700;
            font-size: 48px;
            letter-spacing: 0.5px;
            color: #FFFFFF;
            margin-top: 15px;
            text-align: center;
        }
        .price-des{
            font-style: normal;
            text-align: center;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0.5px;
            color: #FFFFFF;
            margin-top: 15px;
            font-size: 15px;
            span{
                &:nth-child(1){
                    text-decoration-line: underline;
                }
            }
        }
        .slider{
            padding: 29px 26px 0px 27px;
        }
        .how{
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 20px;
            letter-spacing: 0.5px;
            text-decoration-line: underline;
            color: #FFFFFF;
            margin-top: 27px;
            text-align: center;
        }
        .map{
            height: 280px;
            padding: 0 41px;
            img{
                height: 100%;
                width: 100%;
                display: block;
                object-fit: cover;
                border-radius: 16px;
            }
        }
    }
    .bottom-action{
        height: 149px;
        background: #1F213B;
        position: fixed;
        bottom: 0;
        width: 100%;
        color: #FFFFFF;
        z-index: 1;
        .ready{
            padding-top: 29px;
            text-align: center;
            font-weight: 700;
            font-size: 18px;
            line-height: 20px;
            letter-spacing: 0.005em;
        }
        .btns{
            margin: 27px 21px 0px 22px;
            background: linear-gradient(99.27deg, #33B0F6 30.91%, #33E6F6 85.18%);
            border-radius: 8px;
            height: 55px;
            .home{
                width: 24px;
                height: 24px;
                background: url("../../assets/imgs/home.png") no-repeat;
                background-size: 100% auto;
                margin-right: 6px;
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
:deep(.van-slider__button){
    width: 15px;
    height: 15px;
    background: #D9D9D9;
}
.my-addr-search{
    margin: 25px 45px 26px 38px;
}
:deep(.my-addr-search .van-field__control){
    color: #FFFFFF;
}
:deep(.my-addr-search .van-search__content){
    background: transparent;
    padding-left:0px;
}
:deep(.my-addr-search .van-search){
    padding: 0px;
    margin-bottom: 27px;
    height: 55px;
    margin-right: 5px;
}
:deep(.my-addr-search .van-field){
    background: transparent;
    border: 1px solid #33E6F6;
    padding-left: 12px;
    padding-right: 12px;
    height: 100%;
    border-radius: 50px;
}
:deep(.van-field__control){
    height: 55px;
}
:deep(.my-addr-search .van-field__left-icon .van-icon){
    color: #FFFFFF;
    font-size: 22px;
}
</style>