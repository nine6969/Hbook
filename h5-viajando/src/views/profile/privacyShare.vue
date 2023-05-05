<template>
    <div class="page">
        <div class="header-w">
            <div class="close-title display-flex align-center">
                <div class="close" @click.stop="onBack"></div>
                <div class="name">Privacy and sharing</div>
            </div>
        </div>
        <div class="page-con">
            <div class="share-name">Lorem ipsum dolor sit amet consectetur. Elit velit in siteu amet justo. Eros a eget nisl risus ac. Consequat pellentesque amet aenean pellentesque egestas massa.</div>

            <div class="list">
                <div class="item">
                    <div class="top display-flex justy-between align-center">
                        <p>Request your personal data</p>
                        <van-icon name="arrow" color="#FFFFFF" size="16"/>
                    </div>
                    <div class="des">Lorem ipsum dolor sit amet consectetur. Elit velit in siteu amet justo.</div>
                </div>

                <div class="item">
                    <div class="top display-flex justy-between align-center">
                        <p>Delete your account</p>
                        <van-icon name="arrow" color="#FFFFFF" size="16"/>
                    </div>
                    <div class="des">Lorem ipsum dolor sit amet consectetur. Elit velit in siteu amet justo.</div>
                </div>

                <div class="item">
                    <div class="top display-flex justy-between align-center">
                        <p>Sharing</p>
                        <van-icon name="arrow" color="#FFFFFF" size="16"/>
                    </div>
                    <div class="des">Lorem ipsum dolor sit amet consectetur. Elit velit in siteu amet justo.</div>
                </div>

                <div class="item">
                    <div class="top display-flex justy-between align-center">
                        <p>Service</p>
                        <van-icon name="arrow" color="#FFFFFF" size="16"/>
                    </div>
                    <div class="des">Lorem ipsum dolor sit amet consectetur. Elit velit in siteu amet justo.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
const router = useRouter()
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
        padding: 0 27px 0 26px;
        .share-name{
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 20px;
            letter-spacing: 0.5px;
            color: #FFFFFF;
        }
        .list{
            margin-top: 34px;
            .item{
                padding-bottom: 14px;
                border-bottom: 1px solid #323464;
                padding-top: 9px;
                &:nth-child(1){
                    padding-top: 0px;
                }
                .top{
                    p{
                        font-weight: 400;
                        font-size: 17px;
                        line-height: 20px;
                        letter-spacing: 0.5px;
                        color: #FFFFFF;
                        margin-right: 20px;
                    }
                }
                .des{
                    font-weight: 300;
                    font-size: 15px;
                    line-height: 20px;
                    letter-spacing: 0.5px;
                    color: rgba(255, 255, 255, 0.8);
                    padding-right: 20px;
                }
            }
        }
    }
}
</style>