<script>
import userName from "./userName.vue";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "List",
    components: {
        userName
    },
    data() {
        return {
            todos: ["Learn vue","Buy diner", "Make a todo list"],
            listState:true,
            theName:""
        };
    },
    methods: {
        show () {
            this.listState = true;
        },
        hide () {
            this.listState = false;
        },
        handleDeleteText() {
            let text=document.querySelector("input").value;
            document.querySelector("input").value=text.slice(0,text.length-1);
            this.theName=text.slice(0,text.length-1);
        }
    }
};
</script>

<template>
  <div>  
      <div class="mb-7 flex justify-around mt-5">
        <input type="text" class="border-2 rounded border-slate-600 p-2 mb-7" placeholder="請輸入姓名" v-model="theName" id="name_input"/>
        <userName :theName="theName" @deleteText="handleDeleteText"></userName>
      </div>
      <div class="mb-7 flex justify-around mt-5">
        <input type="text" class="border-2 rounded border-slate-600 p-2 mb-7" placeholder="請輸入姓名" v-model="theName" id="name_input"/>
        <userName :theName="theName" @deleteText="handleDeleteText"></userName>
      </div>
    <ul v-if="listState" class="text-center mt-5">
      <li v-for="(todo,index) in todos" :key="todo.id">
      {{index+1}} : {{todo}}
      </li>
    </ul>
    <div class="flex justify-center">
      <button v-if="!listState" @click="show" class="text-2xl border-2 rounded-xl p-3 hover:bg-slate-200 mt-6">SHOW</button>
      <button v-if="listState" @click="hide" class="text-2xl border-2 rounded-xl p-3 hover:bg-slate-200 mt-6">HIDE</button>
      <router-link to="/"><button class="text-2xl border-2 rounded-xl p-3 hover:bg-slate-200 mt-6 ml-5">BACK</button></router-link>
    </div>    
  </div>
</template>
