//数组
//
var a =1;//定义一个变量
let b =2;//let es6提供的关键字
const c =3;//定义一个常量

//如何定义一个数组呢
//定义个空数组
let arr =[]
let arr2 =[1,2,3,4]
//第二种方式定义数组
//用Array方式来定义数组
let arr3 =new Array(s);
//new 关键字是否省略
let arr4 =Array(5)
console.log(arr4)
console.log(arr4[0])//它的缺省值是undefined

let arr5 =[]
console.log(arr5[1])
//获取数组长度
let arr6 =[];
console.log(arr6.length)
//运行结果是underfined
let arr7 =[1,2,3,4]
arr7.length=6;
console.log(arr7[5])
arr7.length=2;
console.log(arr7[4])


//通过push方法往数组里加元素
let arr8 =[1,2,3,4]
arr8.push(5)
console.log  =(arr8[4])
arr8.pop();
console.log =(arr8[4])
//自变量方式来声明一个对象
let odj1 ={}
let fun1 =()=>{

}
let arr9=[1,2,3,4,'a',{},fun1];
//typeof 来判断类型
console.log(typeof arr9);

//需求， abcdef123456；
//[a,s,c,d,...]
//from 方式from 是Array上面的方法
let str1 ="abcdef123456";
let arr10  =Array.from(str1);
console.log(arr10)
//of 方法，它也是Array方法；
let arr11 =Array.of([1,2,3,'a']);
console.log(arr11)

//进入 数组循环
//for  for-in forEach

let arr12 =[1,2,3,4];
for(let i =0;i<arr12.length;i++){
    console.log(arr12[i])
}
//for-in循环
let arr13=[1,2,3,4,5]
for(var arr in arr13){
    console.log(arr);//这个地方打印的是下标
    console.log(arr13[arr]);
}
//for  for-in区别是什么
let person ={
    name:"zhangsan",
    age:20,
    address:"nanchang"
}
for(let obj in person){
    console.log()

}



//回调函数
function world(){
    console.log("hello woeld")
}

function hello(x){
    if(typeof x =="Function")

    console.log(x)

    
}
hello(4)

var obj6={
    f1:function(){
        console.log("this is f1 function")
    }
    ,f2:function(){
        console.log("this is f2 function")
    }
}

var obj7={
    f2:function(){
        console.log("this is f2 function obj7")
    }
}
var arr30=[1,2,3];
arr30.forEach(obj6.f1,obj6)
//arr30.forEach(function(arg){
//  console.log(arg)
//})
arr30.foeEach(obj6.f1,obj7)

var arr32=[1,2,3,4,5,6];
arr32.every(function(arg){
    if(arg>5){
    console.log(arg);
    console.log("oreak");
    //return false;
    return false;
    }
    else{
        console.log("coninue")
        return true;
    }
});
console.log(arr22)
//some
var arr33 =[1,2,3,4,5,6,7];
arr33.some(function(arg,index){
    console.log
})

arr33.every(function(arg){
    console.log(arg)
})
//map方法

var arr4=[1,2,3,4,5,6,7,8];
var result =arrr4.map(function (arg){
    return arg * arg
})
console.log(result)
console.log(arr4)

//filter方法 过滤
var arr45=[1,2,3,4,5,6,7,8]
arr45.filter(function (){
    if(arg %  0){
        return true;
    }
})
console.log(result1)
console.log(arr45)

//find 方法
var arr46 =[1,2,3,4,5,6,4,3,2]
var result46 = arr46.find(function(arg,index){
    if(arg ==4){
        console.log(index)
        return true;
    }
})
console.log(result46)
//
var arr47 =[1,2,3,4,5,6,4,3,2]
var result47=arr47.find.apply(arg=>arg==4)
console.log(result47)


//findIndex
var arr48=[1,2,3,4,5,6,7,8]
var result48 =arr48.findIndex(arg=>arg==4)
console.log(result48)

var arr49=[]
//[].forEach

//includes  包含 方法

var result49=[1,2,3,4,5,6].includes(5,3);
console.log(result49)

var result50=[1,2,3,4,5,6].includes(7);
console.log(result50)

//sort 方法
var arr51=[1,2,4,0,3]
var result52=arr51.sort(function (a,b){
    return a-b;
});
console.log(result51)
console.log(arr51)






