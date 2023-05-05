<template>
    <div class="page">
        <div class="header-w">
            <div class="close-title display-flex align-center">
                <div class="close" @click.stop="onClose"></div>
                <div class="name">Profile</div>
            </div>
        </div>
        <div class="page-con">
            <div class="user-info display-flex justy-between align-center">
                <div class="display-flex align-center">
                    <img src="../../assets/imgs/profile/avter.png" alt="" class="avter">
                    <div class="">
                        <div class="user-name">Valentina Moore</div>
                        <div class="user-des">Show profile</div>
                    </div>
                </div>
                <van-icon name="arrow" color="#ffffff" size="18"/>
            </div>
            <div class="place display-flex justy-between align-center">
                <div class="">
                    <div class="name1">Airbnb your place</div>
                    <div class="des1">It’s simple to get set up and start earning.</div>
                </div>
                <img src="../../assets/imgs/profile/house.png" alt="" class="house-img">
            </div>
            <div class="line"></div>

            <div class="main-list">
                <div class="main-name">Account Settings</div>
                <div class="list">
                    <div class="item display-flex align-center justy-between" @click="onLink('/personalInfo')">
                        <div class="left display-flex align-center">
                            <img src="../../assets/imgs/profile/u_user.png" alt="">
                            <p>Personal information</p>
                        </div>
                        <van-icon name="arrow" color="#ffffff" size="18"/>
                    </div>
                    <div class="item display-flex align-center justy-between" @click="onLink('/login')">
                        <div class="left display-flex align-center">
                            <img src="../../assets/imgs/profile/sec.png" alt="">
                            <p>Login & security</p>
                        </div>
                        <van-icon name="arrow" color="#ffffff" size="18"/>
                    </div>
                    <div class="item display-flex align-center justy-between" @click="onLink('/pay')">
                        <div class="left display-flex align-center">
                            <img src="../../assets/imgs/profile/pay.png" alt="">
                            <p>Payments and payouts</p>
                        </div>
                        <van-icon name="arrow" color="#ffffff" size="18"/>
                    </div>
                    <div class="item display-flex align-center justy-between" @click="onLink('/translation')">
                        <div class="left display-flex align-center">
                            <img src="../../assets/imgs/profile/translation.png" alt="">
                            <p>Translation</p>
                        </div>
                        <van-icon name="arrow" color="#ffffff" size="18"/>
                    </div>
                    <div class="item display-flex align-center justy-between" @click="onLink('/noticfication')">
                        <div class="left display-flex align-center">
                            <img src="../../assets/imgs/profile/notification.png" alt="">
                            <p>Notifications</p>
                        </div>
                        <van-icon name="arrow" color="#ffffff" size="18"/>
                    </div>
                    <div class="item display-flex align-center justy-between" @click="onLink('/privacyShare')">
                        <div class="left display-flex align-center">
                            <img src="../../assets/imgs/profile/share.png" alt="">
                            <p>Privacy and sharing</p>
                        </div>
                        <van-icon name="arrow" color="#ffffff" size="18"/>
                    </div>
                    <div class="item display-flex align-center justy-between">
                        <div class="left display-flex align-center">
                            <img src="../../assets/imgs/profile/work.png" alt="">
                            <p>Travel for work</p>
                        </div>
                        <van-icon name="arrow" color="#ffffff" size="18"/>
                    </div>
                </div>
            </div>


            <div class="main-list">
                <div class="main-name">Hosting</div>
                <div class="list">
                    <div class="item display-flex align-center justy-between">
                        <div class="left display-flex align-center">
                            <img src="../../assets/imgs/profile/space.png" alt="">
                            <p>List your space</p>
                        </div>
                        <van-icon name="arrow" color="#ffffff" size="18"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter()

//页面跳转
const onLink = (url)=>{
    router.push({path:url})
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
    padding-bottom: 110px;
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
            .name{
                font-weight: 700;
                font-size: 30px;
                line-height: 20px;
                letter-spacing: 0.5px;
                color: #FBFBFF;
            }
        }
    }
    .page-con{
        padding: 0 27px;
        color: #ffffff;
        .user-info{
            padding-bottom: 18px;
            border-bottom: 0.5px solid #323464;
            img{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                display: block;
                object-fit: cover;
                margin-right: 6px;
            }
            .user-name{
                font-size: 15px;
                line-height: 20px;
            }
            .user-des{
                font-size: 15px;
                line-height: 20px;
                color:rgba(255, 255, 255, 0.8)
            }
        }
        .place{
            margin-top: 21px;
            border-radius: 15px;
            background-color: #1C1D36;
            padding: 0 40px 0 20px;
            .name1{
                font-size: 15px;
                line-height: 20px;
            }
            .des1{
                font-size: 12px;
                line-height: 20px;
                color:rgba(255, 255, 255, 0.8);
                margin-top: 5px;
            }
            img{
                width: 100px;
                height: 100px;
            }
        }
        .line{
            height: 0px;
            margin-top: 21px;
            border-bottom: 0.5px solid #323464;
        }
        .main-list{
            .main-name{
                margin-top: 50px;
                font-size: 18px;
                line-height: 20px;
            }
            .list{
                padding-top: 21px;
                .item{
                    border-bottom: 0.5px solid #323464;
                    padding-top: 14px;
                    &:nth-child(1){
                        padding-top: 0px;
                    }
                    .left{
                        img{
                            margin-right: 13px;
                            width: 24px;
                            height: 24px;
                            display: block;
                            object-fit: contain;
                        }
                        p{
                            font-size: 15px;
                            line-height: 38px;
                        }
                    }
                }
            }
        }
    }
}
</style>