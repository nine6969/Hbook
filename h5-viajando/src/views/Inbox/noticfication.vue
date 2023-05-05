<template>
    <div class="page">
        <div class="header-w">
            <div class="close-title display-flex align-center">
                <div class="close" @click.stop="onClose"></div>
                <div class="name">Notifications</div>
            </div>
            <div class="labels display-flex">
                <div class="label" :class="{ 'act': curLabel == 0 ? true : false }" @click="onChangeLabel(0)">Offers and updates
                </div>
                <div class="label" :class="{ 'act': curLabel == 1 ? true : false }" @click="onChangeLabel(1)">Account</div>
            </div>
            <div class="line"></div>
        </div>

        <div class="page-con">
            <div class="list">
                <div class="main-name">Travel tips and offers</div>
                <div class="main-des">Lorem ipsum dolor sit amet consectetur. Elit velit in siteu amet justo. Eros a eget
                    nisl risus ac.</div>

                <div class="item">
                    <div class="top display-flex justy-between">
                        <div class="name">Inspiration and offers</div>
                        <div class="edit">Edit</div>
                    </div>
                    <div class="val">On: Email and Push</div>
                </div>

                <div class="item">
                    <div class="top display-flex justy-between">
                        <div class="name">Trip planning</div>
                        <div class="edit">Edit</div>
                    </div>
                    <div class="val">On: Email and Push</div>
                </div>
            </div>

            <div class="list">
                <div class="main-name">Airbnb updates</div>
                <div class="main-des">Lorem ipsum dolor sit amet consectetur. Elit velit in siteu amet justo. Eros a eget nisl risus ac.</div>

                <div class="item">
                    <div class="top display-flex justy-between">
                        <div class="name">New and programs</div>
                        <div class="edit">Edit</div>
                    </div>
                    <div class="val">On: Email and Push</div>
                </div>

                <div class="item">
                    <div class="top display-flex justy-between">
                        <div class="name">Feedback</div>
                        <div class="edit">Edit</div>
                    </div>
                    <div class="val">On: Email and Push</div>
                </div>

                <div class="item">
                    <div class="top display-flex justy-between">
                        <div class="name">Travel regulations</div>
                        <div class="edit">Edit</div>
                    </div>
                    <div class="val">On: Email and Push</div>
                </div>
            </div>

            <div class="list">
                <div class="main-name">Unsubscribe from all offers and updates</div>
                <div class="main-des">Lorem ipsum dolor sit amet consectetur. Elit velit in siteu amet justo. Eros a eget nisl risus ac.</div>

                <div class="item">
                    <div class="top display-flex justy-between">
                        <div class="name">All offers and updates</div>
                        <div class="edit">Edit</div>
                    </div>
                    <div class="val">On: Email and Push</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
let curLabel = ref(0)

const onChangeLabel = (label) => {
    curLabel.value = label
}

const onClose = () => {
    router.go(-1)
}
</script>

<style lang="less" scoped>
.page {
    min-height: 100vh;
    background-color: #191A32;
    padding-top: 104px;
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
            color: rgba(255, 255, 255, 0.7);
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

    .page-con {
        padding: 10px 26px 0px 27px;
        color: #FFFFFF;

        .list {
            border-bottom: 1px solid #323464;
            padding-bottom: 14px;
            padding-top: 21px;
            &:nth-child(1){
                padding-top: 0px;
            }
            .main-name {
                font-weight: 400;
                font-size: 17px;
                line-height: 20px;
                letter-spacing: 0.5px;
            }

            .main-des {
                font-weight: 300;
                font-size: 15px;
                line-height: 20px;
                letter-spacing: 0.5px;
                color: rgba(255, 255, 255, 0.8);
                margin-top: 5px;
            }

            .item {
                // padding-bottom: 14px;
                padding-top: 19px;
                &:nth-child(1) {
                    padding-top: 0px;
                }

                .top {
                    .name {
                        font-weight: 400;
                        font-size: 15px;
                        line-height: 20px;
                        letter-spacing: 0.5px;
                        color: #FFFFFF;
                    }

                    .edit {
                        font-style: normal;
                        font-weight: 400;
                        font-size: 15px;
                        line-height: 20px;
                        letter-spacing: 0.5px;
                        text-decoration-line: underline;
                        color: #FFFFFF;
                    }
                }

                .val {
                    font-style: normal;
                    font-weight: 300;
                    font-size: 15px;
                    line-height: 20px;
                    letter-spacing: 0.5px;
                    color: rgba(255, 255, 255, 0.75);
                }
            }
        }
    }
}</style>