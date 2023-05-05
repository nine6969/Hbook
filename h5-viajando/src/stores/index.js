import { defineStore } from 'pinia'
import axios from 'axios'

export const useStore = defineStore('user', {
    state: () => {
        return { 
            userData: '',
            homeList:[],//首页列表数据
            label:0,//explore页面 当前tab
        }
    },
    actions: {
        setUserData(data) {
            this.userData = data
        },
        //查询首页数据
        getHomeList() {
            console.log(this.label);
            axios.get('/mock/explore/list').then((res) => {
                if(res.status == 200){
                    console.log(res.data.data,'返回的结果');
                    this.homeList = res.data.data
                }
            })
        },
    },
})