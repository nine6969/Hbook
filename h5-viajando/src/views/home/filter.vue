<template>
    <div class="filter">
        <div class="close-header display-flex align-center">
            <van-icon name="cross" color="#FFFFFF" size="24" @click="onClose"/>
            <span>Filters</span>
        </div>
        <div class="filter-con">
            <div class="name">Prince range </div>
            <div class="subtitle">The average nightly prince is $50</div>
            <div class="price-aver display-flex justy-between align-center">
                <div class="box min">
                    <div class="box-in">
                        <div class="t-name">Minimum</div>
                        <van-field v-model="min" label="$" label-width="6" type="number"/>
                    </div>
                </div>
                <div class="line"></div>
                <div class="box max">
                    <div class="box-in">
                        <div class="t-name">Maxium</div>
                        <van-field v-model="max" label="$" label-width="6" type="number"/>
                    </div>
                </div>
            </div>
            <div class="price-line"></div>
            <div class="type">
                <p class="name">Type of place</p>
                <van-checkbox-group v-model="checked">
                    <van-cell-group inset>
                        <van-cell
                        v-for="(item, index) in list"
                        clickable
                        :key="item.type"
                        :title="item.title"
                        :label="item.label"
                        @click="toggle(index)"
                        class="my-check"
                        >
                        <template #right-icon>
                            <van-checkbox
                            :name="item.title"
                            :ref="el => checkboxRefs[index] = el"
                            @click.stop
                            shape="square"
                            />
                        </template>
                        </van-cell>
                    </van-cell-group>
                </van-checkbox-group>
            </div>
            <div class="price-line2"></div>
            <div class="rooms-beds">Rooms and beds</div>
            <typeNumber :num="state.rooms" @onChangeNum="val=>state.rooms = val"></typeNumber>
            <div class="rooms-beds">Beds</div>
            <typeNumber :num="state.beds" @onChangeNum="val=>state.beds = val"></typeNumber>
            <div class="rooms-beds">Bathrooms</div>
            <typeNumber :num="state.bathrooms" @onChangeNum="val=>state.bathrooms = val"></typeNumber>
        </div>

        <div class="bottom-action display-flex justy-between align-center">
            <div class="clear" @click="onClear">Clear all</div>
            <div class="search display-flex align-center" @click="onSearch">
                <p>Show 562 homes</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router';
import {reactive, ref} from 'vue';
import { useStore } from '/@/stores/index'

const store = useStore()
const router = useRouter();
let min = ref('')
let max = ref('')
const checked = ref([]);
const checkboxRefs = ref([]);

let state = reactive({
    rooms:0,
    beds:0,
    bathrooms:0,
})

let  list = [
    {
        title:'Entire place',
        label:'A place all to yourself',
        type:1
    },
    {
        title:'Private room',
        label:`Your own room in a home or a hotel, plus some shared common spaces`,
        type:2
    },
    {
        title:'Shared room',
        label:`A sleeping space and common areas that may be shared with others`,
        type:3
    }
]

const toggle = (index) => {
    checkboxRefs.value[index].toggle();
};

//清除
const onClear = ()=>{
    min.value = ''
    max.value = ''
    state.rooms = 0
    state.beds = 0
    state.bathrooms = 0
}

const onClose = ()=>{
    router.go(-1)
}

//查询
const onSearch = ()=>{
    store.getHomeList()
    router.go(-1)
}
</script>

<style lang="less" scoped>
.filter{
    padding-top: 65px;
    padding-bottom: 110px;
    min-height: 100vh;
    position: relative;
    .close-header{
        padding-top: 20px;
        padding-left: 31px;
        padding-bottom: 33px;
        border-bottom: 0.5px solid #323464;
        position: fixed;
        top: 0px;
        width: 100%;
        background: #191A32;
        z-index: 1;
        span{
            margin-left: 19px;
            font-weight: 400;
            font-size: 20px;
            line-height: 20px;
            color: #FFFFFF;
            letter-spacing: 0.005em;
        }
    }
    .filter-con{
        padding: 17px 40px 0px 31px;
        .name{
            font-weight: 500;
            font-size: 18px;
            line-height: 20px;
            letter-spacing: 0.005em;
            color: #FFFFFF;
            margin-bottom: 4px;
        }
        .subtitle{
            font-weight: 400;
            font-size: 15px;
            line-height: 20px;
            letter-spacing: 0.005em;
            color: rgba(255, 255, 255, 0.6);
        }
        .price-aver{
            margin-top: 20px;
            .box{
                width: 149px;
                height: 59px;
                border-radius: 8px;
                padding: 1px;
                background-image: -webkit-linear-gradient(90deg, rgba(24, 191, 246, 1), rgba(24, 117, 246, 1));
                .box-in{
                    width: 100%;
                    height: 100%;
                    border-radius: 8px;
                    background: #191A32;
                    .t-name{
                        font-weight: 400;
                        font-size: 11px;
                        line-height: 20px;
                        letter-spacing: 0.005em;
                        color: rgba(251, 251, 255, 0.75);
                        padding-top: 5px;
                        margin-left: 12px;
                    }
                }
                :deep(.box-in .van-field){
                    padding: 0px;
                    padding-left: 12px;
                    padding-right: 12px;
                    font-size: 18px;
                    background:transparent;
                    color: #FFFFFF;
                }
                :deep(.box-in .van-field__label){
                    color: #FFFFFF;
                }
                :deep(.box-in .van-field__control){
                    color: #FFFFFF;
                }
            }
            .line{
                width: 22px;
                border-bottom: 1.5px solid #FFFFFF;
                height: 0px;
            }
        }
        .price-line{
            border-bottom: 1px solid #6468C8;
            height: 0px;
            margin-top: 27px;
        }
        .type{
            .name{
                font-weight: 500;
                font-size: 18px;
                line-height: 20px;
                letter-spacing: 0.005em;
                color: #FFFFFF;
                margin-top: 21px;
                margin-bottom: 9px;
            }
            :deep(.van-cell-group--inset){
                margin: 0px;
            }
            :deep(.van-cell__title){
                margin-right: 37px;
            }
            :deep(.van-checkbox){
                align-items: unset;
            }
            :deep(.van-checkbox__icon .van-icon){
                border: 1px solid rgba(51, 176, 246, 1);
            }
            :deep(.van-checkbox__icon--checked .van-icon){
                background-color:transparent;
            }
            :deep(.van-cell){
                background: transparent;
                padding-left: 0px;
                padding-right: 0px;
            }
            :deep(.van-cell-group){
                background: transparent;
            }
            :deep(.van-cell:after){
                border-bottom: unset;
            }
        }
        .my-check{
            padding-top: 3px;
        }
        :deep(.my-check span){
            font-weight: 300;
            font-size: 17px;
            line-height: 20px;
            letter-spacing: 0.005em;
            color: rgba(255, 255, 255, 0.9);
            font-style: normal;

        }
        :deep(.my-check .van-cell__label){
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            letter-spacing: 0.005em;
            color: rgba(255, 255, 255, 0.6);
        }

        .price-line2{
            border-bottom: 1px solid #6468C8;
            height: 0px;
            margin-top: 12px;
        }
        .rooms-beds{
            margin-top: 18.5px;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 20px;
            letter-spacing: 0.005em;
            color: #FFFFFF;
            margin-bottom: 24px;
        }
    }

    .bottom-action{
        background: #1F213B;
        height: 90px;
        position: fixed;
        bottom: 0px;
        width: 100%;
        padding: 18px 36px 17px 33px;
        z-index: 1;
        .clear{
            font-weight: 700;
            font-size: 18px;
            line-height: 20px;
            letter-spacing: 0.005em;
            color: rgba(255, 255, 255, 0.7);
        }
        .search{
            min-width: 130px;
            height: 55px;
            background: linear-gradient(99.27deg, #33B0F6 30.91%, #33E6F6 85.18%);
            border-radius: 8px;
            padding-left: 21px;
            padding-right: 21px;
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