<script>

export default {
    data(){
        return{
            inputVal:"",
        };
    },
    model: {
        prop: "theMsg",
    },
    props: ["theMsg"],
    created: function () {
        this.inputVal=this.theMsg;
    },
    methods: {
        changeInput() {
            this.$emit("input", this.inputVal);
        }
    },
    watch:{
        theMsg:{
            handler() {
                this.inputVal=this.theMsg;
            },
        },
    },
};
</script>
<template>
    <div>
        <input v-model="inputVal" @input="changeInput" class="border-2 rounded border-slate-600 p-2"/>
    </div>
</template>