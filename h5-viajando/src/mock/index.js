import Mock from 'mockjs'
// import * as dayjs from 'dayjs'
var Random = Mock.Random;
import example1 from '../assets/imgs/example/1.png';
import example2 from '../assets/imgs/example/2.png';
import example3 from '../assets/imgs/example/3.png';
import example4 from '../assets/imgs/example/4.png';
import example5 from '../assets/imgs/example/5.png';
import example6 from '../assets/imgs/example/6.png';


import avter1 from '../assets/imgs/example/avter1.png';
import avter2 from '../assets/imgs/example/avter2.png';
import avter3 from '../assets/imgs/example/avter3.png';
import avter4 from '../assets/imgs/example/avter4.png';
import avter5 from '../assets/imgs/example/avter5.png';

let imgsArr = [example1, example2, example3, example4,example5,example6]
let avterArr = [avter1,avter2,avter3,avter4,avter5]
Mock.mock('/mock/explore/list', 'get', {
    message: 'success',
    "data|1-6": [
        {
            'imgs|2-4': [{
                'img|1': imgsArr
            }],
            name: 'La Parguera, Puerto Rico',
            // name: "@county(true)",
            // name:"@county(false)",
            range: '@float(1, 100, 1, 2)'+' kilometers away',
            time:'Jan 2-'+'@integer(10,26)',
            // time:Random.datetime('MMM M-dd'),
            price: '$'+'@integer(0,100)'+' USD',
            "score|1-5": 4.5,
            'like|0-1': 1,
            'count|1':[1,2,3,45,56,643],
        },
    ],
    status: 200,
})

//获取用户信息
Mock.mock('/mock/userinfo', 'get', {
    message: 'success',
    data:{
        name:'Valentina Moore',
        nameDes:"Show profile",
    },
    status: 200,
})


//获取消息
Mock.mock('/mock/msg', 'get', {
    message: 'success',
    "data|5-12":[
        {
            name: '@name',
            "title":"@title",
            'imgs|1-2': [{
                'img|1': avterArr
            }],
            'time': '@date(yyyy-MM-dd)',
        }
    ],
    status: 200,
})
