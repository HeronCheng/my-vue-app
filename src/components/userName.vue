<script>
export default {
    props: {
        theName:{
            type: String,
            required: true, // 此欄位必填
            default: "" // 預設值為空物件
        } 
    },
    methods: {  // 加入methods屬性
        deleteText() {
            this.$emit("deleteText", {
                theName: ""
            });
        }
    }
};
</script>
<template>
  <div @click="deleteText" >  
    {{theName}}
  </div>
</template>