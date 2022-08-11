<script>
import userName from "./userName.vue";
import inputChild from "./inputChild.vue";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "List",
    components: {
        userName,
        inputChild
    },
    data() {
        return {
            todos: ["Learn vue","Buy diner", "Make a todo list"],
            listState:true,
            theName:"",
            theMsg: "這是從父層來的 msg",
            items:[ {
                text: "首頁",
                disabled: false,
                href: "/",
            },
            {
                text: "test頁",
                disabled: false,
                href: "/#/test",
            },
            {
                text: "Link 2",
                disabled: true,
                href: "breadcrumbs_link_2",
            }]
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
        },
        handleChange(e){
            this.theMsg=e.target.value;
            this.theMsg=document.getElementById("theMsgPart").innerText;
        }
    },
    watch:{
        theMsg:{
            handler() {

            },
            immediate: true
        },
    },
};
</script>

<template>
  <div>  
      <v-breadcrumbs
        :items="items"
        divider="."
        large
      ></v-breadcrumbs>
      <div class="mb-7 flex justify-center items-center mt-5">
        <input type="text" class="border-2 rounded border-slate-600 p-2 mb-7 mr-5" placeholder="請輸入姓名" v-model="theName" id="name_input"/>
        <userName :theName="theName" @deleteText="handleDeleteText"></userName>
      </div>
      <div class="mb-7 flex justify-center items-center mt-5">
        <inputChild v-model="theMsg" class="mr-5"/>
        <inputChild v-model="theMsg" class="mr-5"/>
        <div id="theMsgPart">
          {{theMsg}}
        </div>
      </div>
    <ul v-if="listState" class="text-center mt-5">
      <li v-for="(todo,index) in todos" :key="todo.id">
      {{index+1}} : {{todo}}
      </li>
    </ul>
    <div class="flex justify-center mt-6 items-center">
      <button v-if="!listState" @click="show" class="text-2xl border-2 rounded-xl p-3 hover:bg-slate-200">SHOW</button>
      <button v-if="listState" @click="hide" class="text-2xl border-2 rounded-xl p-3 hover:bg-slate-200">HIDE</button>
      <router-link to="/"><button class="text-2xl border-2 rounded-xl p-3 hover:bg-slate-200 ml-5">BACK</button></router-link>  
    </div>
    <div class="flex justify-center mt-6 items-center">
      <v-btn
        elevation="2"
        class="mr-5"
      >
      測試按鈕
      </v-btn>
      <v-btn
        disabled
        elevation="2"
        class="mr-5"
      >測試按鈕1
      </v-btn>  
      <v-btn
        elevation="2"
        loading
        class="mr-5"
      >測試按鈕2</v-btn>
      <v-btn
        outlined
        elevation="2"
        class="mr-5"
      >測試按鈕3</v-btn>
      <v-btn
        rounded
        elevation="2"
        class="mr-5"
      >測試按鈕4</v-btn>
    </div>
    <div class="flex justify-center mt-10">
        <v-card
          class="mx-auto"
          max-width="400"
          tile
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="font-black">標題一</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="font-black">標題二</v-list-item-title>
              <v-list-item-subtitle>這是內文</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="font-black">標題三</v-list-item-title>
              <v-list-item-subtitle>
                這是內文
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                這是內文
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
    </div>
    <v-card
      elevation="2"
      disabled
      class="w-64 mx-auto my-10"
    >
      <v-card-title>
        我是一張不能按的卡片
      </v-card-title>
      <v-card-subtitle>
        我是卡片的副標題
      </v-card-subtitle>
      <v-card-text>
        卡片文字是我
      </v-card-text>
      <v-card-actions>
        <v-btn>
          按鈕1號
        </v-btn>
        <v-btn class="ml-5">
          按鈕2號
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
