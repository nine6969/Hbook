<template>
    <div class="page">
        <div class="header-w">
            <div class="close-title display-flex align-center">
                <div class="close" @click.stop="onClose"></div>
                <div class="name">Inbox</div>
            </div>
            <div class="labels display-flex">
                <div class="label" :class="{ 'act': curLabel == 0 ? true : false }" @click="onChangeLabel(0)">Messages</div>
                <div class="label" :class="{ 'act': curLabel == 1 ? true : false }" @click="onChangeLabel(1)">Notifications
                </div>
            </div>
            <div class="line"></div>
        </div>
        <div class="scorll">
            <!-- 无数据显示 -->
            <!-- <div class="no-msg">
                <div class="name">You have no unread messages</div>
                <div class="info">When you contact a host or send a reservation request, you’ll see your messages here.</div>
            </div> -->
            <div class="list">
                <div class="item display-flex" v-for="item in list">
                    <template v-if="item.imgs&&item.imgs">
                        <img :src="item.imgs[0].img" alt="">
                    </template>
                    <img :src="avter5" alt="" v-else>
                    <div class="right flex1">
                        <div class="display-flex justy-between">
                            <div class="flex1">
                                <div class="name1">{{ item.name }}</div>
                                <div class="name2">{{ item.title }}</div>
                            </div>
                            <div class="time">{{ item.time }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios'
import avter5 from '../../assets/imgs/example/avter5.png';

const router = useRouter()
let curLabel = ref(0)

let list = ref([])
const onChangeLabel = (label) => {
    curLabel.value = label
    getList()
}

const onClose = () => {
    router.go(-1)
}

const getList = () => {
    axios.get('/mock/msg').then((res) => {
        if (res.status == 200) {
            list.value = res.data.data
            console.log(res.data.data, '返回的结果');
        }
    })
}

getList()
</script>

<style lang="less" scoped>
.page {
    min-height: 100vh;
    background-color: #191A32;
    padding-top: 94px;
    padding-bottom: 110px;

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
                background: url("../../assets/imgs/close.png");
                width: 40px;
                height: 40px;
                background-size: 100% auto;
                margin-right: 14px;
            }

            .name {
                font-weight: 700;
                font-size: 30px;
                line-height: 20px;
                letter-spacing: 0.5px;
                color: #FBFBFF;
            }
        }

        .labels {
            font-weight: 400;
            font-size: 15px;
            line-height: 20px;
            letter-spacing: 0.5px;
            color: rgba(255, 255, 255, 0.6);
            padding-left: 31px;
            padding-bottom: 5px;

            .label {
                &:nth-child(1) {
                    margin-right: 19px;
                }
            }

            .act {
                color: #FFFFFF;
            }
        }

        .line {
            margin-right: 26px;
            margin-left: 27px;
            border-bottom: 1.5px solid #323464;
            height: 0px;
        }
    }

    .scorll {
        padding: 19px 31px;

        .no-msg {
            .name {
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                line-height: 20px;
                letter-spacing: 0.5px;
                color: #FFFFFF;
            }

            .info {
                font-weight: 300;
                font-size: 15px;
                line-height: 20px;
                letter-spacing: 0.5px;
                color: rgba(255, 255, 255, 0.8);
            }
        }

        .list {
            color: #FFFFFF;
            .item {
                padding-bottom: 20px;

                &:nth-last-child(1) {
                    padding-bottom: 0px;
                }

                img {
                    width: 40px;
                    height: 40px;
                    object-fit: cover;
                    border-radius: 50%;
                    display: block;
                    margin-right: 10px;
                }

                .right {
                    .name1 {
                        font-size: 16px;
                        color: rgba(255, 255, 255, 0.9);
                    }

                    .name2 {
                        font-size: 14px;
                        margin-top: 3px;
                        color: rgba(255, 255, 255, 0.7);
                    }

                    .time {
                        font-size: 13px;
                        margin-left:8px;
                        color: rgba(255, 255, 255, 0.9);
                    }
                }

                .con {
                    margin-top: 10px;
                    font-size: 13px;
                    line-height: 24px;
                }
            }


        }
    }
}</style>