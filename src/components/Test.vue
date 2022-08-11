<script>
//data 部分 undefined null
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Test",
    data() {
        return {
            testMode:true,
            testdata:true,
        };
    },
    methods: {
        change(){
            this.testMode=false;
        },
        back(){
            this.testMode=true;
        },
        check(){
            this.testdata=null;
        }
    }
};
</script>

<template>
<div>
    <div v-if="testMode">
      123456
      <div>
        <router-link to="/"><button class="text-2xl border-2 rounded-xl p-3 hover:bg-slate-200 mt-6 ml-5">BACK</button></router-link>
        <button class="text-2xl border-2 rounded-xl p-3 hover:bg-slate-200 mt-6 ml-5" @click="change">SWITCH</button>
      </div>
   
    </div>
    <div v-else>
      7890
      <div>
        <router-link to="/"><button class="text-2xl border-2 rounded-xl p-3 hover:bg-slate-200 mt-6 ml-5">BACK</button></router-link>
        <button class="text-2xl border-2 rounded-xl p-3 hover:bg-slate-200 mt-6 ml-5" @click="back">SWITCH</button>
      </div>
    </div>
    <div class="w-full h-28 border-2 my-5">
      <div v-show="testMode">
        我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡
      </div>
    </div>
    <div v-show="testdata">
      我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡我在這裡
    </div>
    <button class="text-2xl border-2 rounded-xl p-3 hover:bg-slate-200 mt-6 ml-5" @click="check">TEST</button>
    <div class="mt-5">
      樓上怎麼了
    </div>
</div>
</template>
