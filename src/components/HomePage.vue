<script>
export default {
    name: "HomePage",
    data() {
        return {
            mode: true,
            date:"",
        };
    },
    methods: {
        switchMode() {
            if(this.mode){
                document.documentElement.classList.add("dark");
            }
            else{
                document.documentElement.classList.remove("dark");
            }
            this.mode=!this.mode;
        }
    }
};
</script>
<template>
  <div>
    <div class="font-mono text-center mx-auto">
      <div class="text-5xl m-4 dark:text-slate-100">Organize Yourself</div>
      <hr/>
      <div class="my-7 text-2xl dark:text-slate-100">List what you want to do...</div>
      <div class="mx-auto my-7 p-2 text-2xl font-semibold dark:text-slate-100">從今天開始，規畫你的每一步吧</div>
        <div class="mb-10 flex justify-center items-center">
            <input type="text" placeholder="請輸入日期" v-model="date" class="border-2 border-slate-600 rounded p-2 mr-3"/>
            <input type="text" placeholder="請輸入日期" v-model="date" class="border-2 border-slate-600 rounded p-2 mr-3"/>  
        </div>
        <div class="dark:text-slate-100 mb-10">{{date}}</div>
      <router-link to="/list"><button class="text-2xl border-2 rounded-xl p-3 hover:bg-slate-200 dark:text-slate-100 dark:hover:text-slate-900">START</button></router-link>
      <router-link to="/test"><button class="text-2xl border-2 rounded-xl p-3 hover:bg-slate-200 dark:text-slate-100 dark:hover:text-slate-900 ml-4">TEST</button></router-link>
      <router-link to="/keyboard"><button class="text-2xl border-2 rounded-xl p-3 hover:bg-slate-200 dark:text-slate-100 dark:hover:text-slate-900 ml-4">KEYBOARD</button></router-link>
      <button class="text-2xl border-2 rounded-xl p-3 hover:bg-slate-200 ml-4 dark:text-slate-100 dark:hover:text-slate-900" @click="switchMode">SWITCH</button>
    </div>
  </div>
</template>