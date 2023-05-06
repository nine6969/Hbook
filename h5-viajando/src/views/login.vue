<template>
    <div class="page">
        <div class="close-header">
            <van-icon name="cross" color="#FFFFFF" size="24" @click="onClose" />
        </div>
        <div class="page-con">
            <div class="app-name">Log in or sign up to Viajando </div>
            <div class="tel-box">
                <div class="in-box">
                    <div class="select-city" @click="onChooseTel">
                        <div class="city-des">Country/Region</div>
                        <div class="city-input">
                            <van-field v-model="city" readonly right-icon="arrow-down" />
                        </div>
                    </div>
                    <div class="tel-show">
                        <div class="city-input">
                            <van-field v-model="tel" placeholder="your number" type="tel" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="tel-tips">We’ll call or text you to confirm your number. Standard message and data rates apply.
            </div>
            <div class="sumbit-btn" @click="onLogin">
                Continue
            </div>
            <div class="or">or</div>
            <div class="input-list">
                <div class="box-email">
                    <div class="in-email">
                        <van-field v-model="email" placeholder="Continue with Email">
                            <template #left-icon>
                                <img src="../assets/imgs/email.png" alt="" class="use">
                            </template>
                        </van-field>
                    </div>
                </div>
                <div class="box-email facebook">
                    <div class="in-email">
                        <van-field v-model="email" placeholder="Continue with Facebook">
                            <template #left-icon>
                                <img src="../assets/imgs/facebook.png" alt="" class="use">
                            </template>
                        </van-field>
                    </div>
                </div>
                <div class="box-email goole">
                    <div class="in-email">
                        <van-field v-model="email" placeholder="Continue with Google">
                            <template #left-icon>
                                <img src="../assets/imgs/goole.png" alt="" class="use">
                            </template>
                        </van-field>
                    </div>
                </div>
                <div class="box-email apple">
                    <div class="in-email">
                        <van-field v-model="email" placeholder="Continue with Apple">
                            <template #left-icon>
                                <img src="../assets/imgs/apple.png" alt="" class="use">
                            </template>
                        </van-field>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <van-popup v-model:show="showPicker" position="bottom" round>
        <van-picker :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
    </van-popup>
</template>

<script setup>
import { ref } from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter()
let city = ref('United States （+1）')//城市
let tel = ref('')//电话

let email = ref('')
let facebook = ref('')
let google = ref('')
let apple = ref('')

let showPicker = ref(false)

let columns = ref([
    { value: '+86', text: '中国', en: "China" },
    { value: "+1", text: '美国', en: "United States" },
])

const onConfirm = ({ selectedOptions }) => {
    showPicker.value = false
    city.value = selectedOptions[0].en + ` （${selectedOptions[0].value}）`
    tel.value = ''
}

const onChooseTel = () => {
    showPicker.value = true

}


const onLogin = ()=>{
    router.replace({path:'/index/home'})
}

const onClose = () => {
    router.go(-1)
}
</script>


<style lang="less" scoped>
.page {
    padding-bottom: 110px;
    min-height: 100vh;

    .close-header {
        padding-top: 27px;
        padding-left: 31px;
        padding-bottom: 22px;
    }

    .page-con {
        padding-left: 25px;
        padding-right: 28px;
        color: #FFFFFF;

        .app-name {
            font-weight: 400;
            font-size: 24px;
            line-height: 20px;
            letter-spacing: 0.5px;
            color: #FBFBFF;
        }

        .tel-box {
            border-radius: 8px;
            padding: 1px;
            background-image: -webkit-linear-gradient(90deg, rgba(24, 191, 246, 1), rgba(24, 117, 246, 1));
            overflow: hidden;
            margin-top: 34px;

            .in-box {
                border-radius: 8px;
                background: #191A32;

                .select-city {
                    padding: 8px 21px 12px 12px;
                    border-bottom: 1px solid rgba(51, 230, 246, 1);

                    .city-des {
                        font-weight: 400;
                        font-size: 11px;
                        line-height: 20px;
                        letter-spacing: 0.005em;
                        color: rgba(251, 251, 255, 0.75);
                    }
                }

                .tel-show {
                    padding: 8px 21px 12px 12px;
                    height: 64.9px;
                }
            }

            :deep(.select-city .van-cell) {
                padding: 0px;
                background: transparent;
                color: #FFFFFF;
            }

            :deep(.select-city .van-field__control) {
                background: transparent;
                color: #FFFFFF;
                font-weight: 400;
                font-size: 18px;
                line-height: 20px;
                letter-spacing: 0.005em;
                color: #FFFFFF;
            }

            :deep(.select-city .van-field__right-icon .van-icon) {
                color: #FFFFFF;
            }

            :deep(.tel-show .van-cell) {
                padding: 0px;
                background: transparent;
                color: #FFFFFF;
            }



            :deep(.tel-show .van-field__control) {
                background: transparent;
                color: #FFFFFF;
                font-weight: 400;
                font-size: 18px;
                height: 44.9px;
                // height: 20px;
                letter-spacing: 0.005em;
                color: #FFFFFF;
            }

            :deep(.tel-show .van-field__right-icon .van-icon) {
                color: #FFFFFF;
            }
        }

        .tel-tips {
            font-weight: 300;
            font-size: 12px;
            line-height: 20px;
            letter-spacing: 0.005em;
            color: rgba(255, 255, 255, 0.8);
            ;
            margin-top: 12px;
        }

        .sumbit-btn {
            height: 56px;
            line-height: 56px;
            left: 25px;
            top: 356px;
            background: linear-gradient(180deg, #33B0F6 0%, #33E6F6 100%);
            border-radius: 8px;
            text-align: center;
            margin-top: 25px;
            font-size: 18px;
        }

        .or {
            padding: 17px 0;
            text-align: center;
            font-size: 15px;
        }

        .input-list {
            .box-email {
                border-radius: 8px;
                padding: 1px;
                background-image: -webkit-linear-gradient(90deg, rgba(24, 191, 246, 1), rgba(24, 117, 246, 1));
                overflow: hidden;
                margin-top: 16px;
                &:nth-child(1){
                    margin-top: 0px;
                }
                .in-email {
                    border-radius: 8px;
                    background: #191A32;
                }
            }
            :deep(.box-email .van-cell) {
                padding: 0px;
                background: transparent;
                color: #FFFFFF;
            }
            :deep(.box-email .van-field__control) {
                background: transparent;
                color: #FFFFFF;
                font-weight: 400;
                font-size: 18px;
                height: 56px;
                // height: 20px;
                letter-spacing: 0.005em;
                color: #FFFFFF;
            }
            :deep(.box-email .van-field__left-icon){
                display: flex;
                align-items: center;
            }
            :deep(.box-email .van-field__left-icon img){
                width: 23px;
                height: 23px;
                display: block;
                object-fit: cover;
                margin-left: 15px;
            }

            :deep(.facebook .van-field__left-icon img){
                width: 21px;
                height: 21px;
            }

            :deep(.goole .van-field__left-icon img){
                width: 19px;
                height: 19px;
            }

            :deep(.apple .van-field__left-icon img){
                width: 24px;
                height: 24px;
            }

        }

    }
}
</style>
