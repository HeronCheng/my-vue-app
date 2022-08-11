<script>
export default {
    data() {
        return {
            output1:"",
            output2:"",
            output3:"",
            numberData:""
        };
    },
    methods: {  
        getValue1(e){
            this.output1=`keydown : ${e.target.value}`;
        },
        getValue2(e){
            this.output2=`keypress : ${e.target.value}`;
        },
        getValue3(e){
            this.output3=`keyup : ${e.target.value}`;
            console.log(e.code);
            console.log(e.key);
            console.log(e.keyCode);
        },
        getOnlyNumber(e){
            const theValue = ["1","2","3","4","5","6","7","8","9","0"];
            if (theValue.includes(e.key)) {
                return; 
            }
            e.preventDefault();
        },
        toDelete(){
            let text=document.querySelector("#numberOnly").value;
            document.querySelector("#numberOnly").value=text.slice(0,text.length-1);
            this.numberData=text.slice(0,text.length-1);
        }
    }
};
</script>
<template>
    <div>
        <input 
            class="border-2 rounded p-2 mt-10 ml-10"       
            @keypress="getValue2" 
            @keyup="getValue3"
        />
        <div class="mt-10 ml-10">{{output1}}</div>      
        <div class="mt-10 ml-10">{{output2}}</div>     
        <div class="mt-10 ml-10 mb-5">{{output3}}</div>  
        <hr/>
        <input id="numberOnly" class="border-2 rounded p-2 mt-10 ml-10" placeholder="只能輸入數字" @keydown="getOnlyNumber" :value="numberData"/>
        <button class="border-2 rounded-md p-2 ml-5" @click="toDelete">刪除</button>
    </div>
</template>

