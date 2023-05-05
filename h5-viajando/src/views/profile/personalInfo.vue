<template>
    <div class="page">
        <div class="header-w">
            <div class="close-title display-flex align-center">
                <div class="close" @click.stop="onBack"></div>
                <div class="name">Personal info</div>
            </div>
        </div>
        <div class="list">
            <div class="item">
                <div class="top display-flex justy-between">
                    <div class="name">Legal name</div>
                    <div class="edit">Edit</div>
                </div>
                <div class="val">{{ detail.name }}</div>
            </div>

            <div class="item">
                <div class="top display-flex justy-between">
                    <div class="name">Gender</div>
                    <div class="edit">Edit</div>
                </div>
                <div class="val">{{ detail.sex?detail.sex:'Not provided' }}</div>
            </div>

            <div class="item">
                <div class="top display-flex justy-between">
                    <div class="name">Phone number</div>
                    <div class="edit">Edit</div>
                </div>
                <div class="val">{{ detail.tel?detail.tel:'Provide phone number' }}</div>
            </div>

            <div class="item">
                <div class="top display-flex justy-between">
                    <div class="name">Email</div>
                    <div class="edit">Edit</div>
                </div>
                <div class="val">{{ detail.email?detail.email:'Not provided' }}</div>
            </div>

            <div class="item">
                <div class="top display-flex justy-between">
                    <div class="name">Address</div>
                    <div class="edit">Edit</div>
                </div>
                <div class="val">{{ detail.addrs?detail.email:'Not provided' }}</div>
            </div>

            <div class="item">
                <div class="top display-flex justy-between">
                    <div class="name">Emergency contact</div>
                    <div class="edit">Edit</div>
                </div>
                <div class="val">{{ detail.contact?detail.contact:'Not provided' }}</div>
            </div>

            <div class="item">
                <div class="top display-flex justy-between">
                    <div class="name">Government ID</div>
                    <div class="edit">Edit</div>
                </div>
                <div class="val">{{ detail.cardId?detail.cardId:'Not provided' }}</div>
            </div>
        </div>
    </div>
</template>


<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter()
let detail = ref({
    name:"Valentina Moore",
    sex:"Female",
    tel:"",
    email:"v****a@gmail.com",
    addrs:"",
    contact:'',
    cardId:""
})

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
    .list{
        padding: 0px 26px 0px 27px;
        .item{
            padding-bottom: 14px;
            border-bottom: 1px solid #323464;
            padding-top: 14px;
            &:nth-child(1){
                padding-top: 0px;
            }
            .top{
                .name{
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 20px;
                    letter-spacing: 0.5px;
                    color: #FFFFFF;
                }
                .edit{
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 20px;
                    letter-spacing: 0.5px;
                    text-decoration-line: underline;
                    color: #FFFFFF;
                }
            }
            .val{
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
</style>