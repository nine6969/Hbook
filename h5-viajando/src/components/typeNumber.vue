<template>
    <div class="number display-flex">
        <div class="item" v-for="(item,index) in number" :key="index" @click="onChangeNum(item)">
            <p v-if="index == 0 " class="long" :class="{'act':num == index?true:false}">Any</p>
            <p v-else class="circle" :class="{'act':num == index?true:false}">{{ item }}</p>
        </div>
    </div>
</template>

<script setup>
import {ref, toRefs} from 'vue';
let number = ref([0,1,2,3,4,5,6,7,8])

const props = defineProps({
    num:Number
})

const emit = defineEmits(['onChangeNum'])
const {num} = toRefs(props)

const onChangeNum = (item)=>{
    emit('onChangeNum',item)
}
</script>

<style lang="less" scoped>
.number{
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    .item{
        color: #ffffff;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.005em;
        color: #FFFFFF;
        margin-right: 20px;
        
        .long{
            border-radius: 50%;
            border:1px solid rgba(51, 176, 246, 1);
            width: 45px;
            height: 45px;
            line-height: 45px;
        }
        
        .circle{
            width: 45px;
            height: 45px;
            border-radius: 50%;
            border:1px solid rgba(51, 176, 246, 1);
            line-height: 40px;
        }
        .long.act{
            width: 85px;
            background: linear-gradient(118.16deg, #33B0F6 13.03%, #33E6F6 81.99%);
            border-radius: 50px;
        }
        .circle.act{
            width: 70px;
            background: linear-gradient(118.16deg, #33B0F6 13.03%, #33E6F6 81.99%);
            border-radius: 50px;
        }
    }
}

.number::-webkit-scrollbar {
  display: none;
}
</style>