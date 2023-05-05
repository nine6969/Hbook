<template>
    <div class="detail">
        <div class="header-swipe">
            <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
                <van-swipe-item v-for="child in detail.imgs" >
                    <img :src="child" alt="" class="example-img">
                </van-swipe-item>
            </van-swipe>
            <div class="action-icon display-flex justy-between">
                <div class="left-icon" @click.stop="onClose">
                    <div class="circle display-flex align-center justy-center">
                        <van-icon name="arrow-left" class="use-icon"/>
                    </div>
                </div>
                <div class="right-icon display-flex">
                    <div class="circle display-flex align-center justy-center">
                        <img src="../../assets/imgs/fi_share.png" alt="">
                    </div>
                    <div class="circle display-flex align-center justy-center">
                        <van-icon name="like-o" class="use-icon"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="detail-con">
            <div class="main-name">{{ detail.name }}</div>
            <div class="score">
                <span>{{ detail.score }} . {{ detail.comments }} reviews . {{ detail.result }}</span>
            </div>
            <div class="namedes">{{ detail.namedes }}</div>
            <div class="line1"></div>
            <div class="house-user display-flex justy-between">
                <div class="left">
                    <div class="user">{{ detail.houseName }}</div>
                    <p>{{ detail.guests }} guests . {{ detail.guests }}bedrooms . {{ detail.beds }}beds</p>
                    <p>{{ detail.privateBath }} private bath</p>
                </div>
                <div class="avter">
                    <img src="../../assets/imgs/user-avter.png" alt="">
                </div>
            </div>
            <div class="line2"></div>
            <div class="self">
                <div class="self-block display-flex">
                    <img src="../../assets/imgs/self.png" alt="">
                    <div class="">
                        <div class="self-name">Self check-in</div>
                        <div class="self-des">Check yourself in with the smartlock</div>
                    </div>
                </div>
                <div class="self-block display-flex">
                    <img src="../../assets/imgs/addrs.png" alt="">
                    <div class="">
                        <div class="self-name">Great location</div>
                        <div class="self-des">100% of recent guests gave the location a 5-star rating.</div>
                        <div class="self-name-2">Free cancellation before Feb 23.</div>
                    </div>
                </div>
            </div>
            <div class="line2"></div>
            <div class="air">
                <div class="air-name"><span>air</span><span>cover</span></div>
                <div class="air-des">Lorem ipsum dolor sit amet consectetur. Elit velit in sit eu amet justo. Eros a eget nisl risus ac. Consequat pellentesque amet aenean pellentesque egestas massa.</div>
                <div class="link">Learn More</div>
            </div>
            <div class="line2"></div>
        </div>
        <div class="bottom-action display-flex justy-between align-center">
            <div class="clear">
                <div class="pr">$600 USD night</div>
                <div class="date">{{ detail.time }}</div>
            </div>
            <div class="search display-flex align-center" @click="onReserve">
                <p>Reserve</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
// import * as dayjs from 'dayjs'
import example1 from '../../assets/imgs/example/1.png';
import example2 from '../../assets/imgs/example/2.png';
import example3 from '../../assets/imgs/example/3.png';
import example4 from '../../assets/imgs/example/4.png';
import example5 from '../../assets/imgs/example/5.png';
import example6 from '../../assets/imgs/example/6.png';

const router = useRouter()

// let time = dayjs().format('MMM MM-DD')
let detail = ref({
    imgs:[example1,example2,example3,example4],
    name:'La Parguera, Puerto Rico',
    score:5.0,
    comments:105,
    result:'Superhost',
    namedes:'La Parguera, Puerto Rico ',
    houseName:`Room in boutique hotel hosted by Carles Gomez`,
    guests:2,//客人
    bedrooms:2,//卧室
    beds:2,//床
    privateBath:2,//私人浴室
    time:'Jan 2-23',
})

const onReserve = ()=>{
    router.push({path:'/InboxAdd'})
}

const onClose = ()=>{
    router.go(-1)
}
</script>

<style lang="less" scoped>
.detail{
    .header-swipe{
        position: relative;
        .example-img{
            height: 300px;
            width: 100%;
            object-fit: cover;
        }
        .action-icon{
            position: absolute;
            top: 57px;
            padding-left: 17px;
            padding-right: 17px;
            width: 100%;
            .circle{
                width: 40px;
                height: 40px;
                background: #FFFFFF;
                border-radius: 50%;
                padding-right: 5px;
                .use-icon{
                    font-size: 20px;
                }
            }
            .right-icon{
                .circle{
                    padding-right: 0px;
                    &:nth-child(2){
                        margin-left: 17px;
                        .use-icon{
                            font-size: 20px;
                        }
                    }
                    img{
                        width: 18px;
                        height: 18px;
                        display: block;
                    }
                }
            }
        }
    }

    .detail-con{
        padding: 18px 26px 110px 28px;
        .main-name{
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 20px;
            letter-spacing: 0.005em;
            color: #FFFFFF;
            margin-bottom: 9px;
        }
        .score{
            color: #FFFFFF;
            padding-left: 22px;
            font-weight: 300;
            font-size: 15px;
            line-height: 20px;
            letter-spacing: 0.5px;
        }
        .namedes{
            font-weight: 300;
            font-size: 15px;
            line-height: 20px;
            letter-spacing: 0.5px;
            color: #FFFFFF;
            margin-top: 3px;
        }
        .line1{
            border-bottom: 1px solid #323464;
            height: 0px;
            width: 100%;
            margin-top: 19px;
        }
        .house-user{
            padding-top: 12px;
            .avter{
                img{
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    display: block;
                    margin-right: 16px;
                }
            }
            .left{
                margin-right: 37px;
                .user{
                    font-style: normal;
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 20px;
                    letter-spacing: 0.005em;
                    color: #FFFFFF;
                    margin-bottom: 5px;
                }
                p{
                    font-weight: 300;
                    font-size: 15px;
                    line-height: 20px;
                    letter-spacing: 0.5px;
                    color: #FFFFFF;
                }
            }
        }
        .line2{
            border-bottom: 1px solid #323464;
            height: 0px;
            width: 100%;
            margin-top: 19px;
        }
        .self{
            padding-top: 12px;
            color: #FFFFFF;
            .self-block{
                margin-bottom: 7px;
                img{
                    width: 24px;
                    height: 24px;
                    display: block;
                    margin-right: 6px;
                }
                .self-name{
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 20px;
                    letter-spacing: 0.5px;
                    color: #FFFFFF;
                }
                .self-des{
                    font-weight: 300;
                    font-size: 15px;
                    line-height: 20px;
                    letter-spacing: 0.5px;
                    color: rgba(255, 255, 255, 0.6);
                }
                .self-name-2{
                    margin-top: 5px;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 20px;
                    letter-spacing: 0.5px;
                    color: #FFFFFF;
                }
            }
        }
        .air{
            padding-top: 12px;
            .air-name{
                margin-bottom: 9px;
                span{
                    font-style: normal;
                    font-weight: 400;
                    font-size: 30px;
                    line-height: 20px;
                    &:nth-child(1){
                        color: #33E6F6;
                    }
                    &:nth-child(2){
                        color: #FFFFFF;
                    }
                }
            }
            .air-des{
                font-style: normal;
                font-weight: 300;
                font-size: 15px;
                line-height: 20px;
                letter-spacing: 0.5px;
                color: #FFFFFF;
            }
            .link{
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                line-height: 20px;
                letter-spacing: 0.5px;
                text-decoration-line: underline;
                color: #FFFFFF;
            }
        }
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
            span{
                font-weight: 700;
                font-size: 18px;
                line-height: 20px;
                text-align: center;
                letter-spacing: 0.005em;
                color: #FFFFFF;
            }
            .date{
                font-weight: 400;
                font-size: 12px;
                line-height: 20px;
                letter-spacing: 0.5px;
                text-decoration-line: underline;
                color: #FFFFFF;
            }
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

</style>