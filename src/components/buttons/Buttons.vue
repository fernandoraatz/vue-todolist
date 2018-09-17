<template>
    <button class="mdl-button mdl-button--icon mdl-js-button" @click="sendEvent()"  :id="id" >
        <slot></slot>
    </button>
</template>

<script>

export default {


 props: {
     id:{
         type: Number,
         required: true 
     },
},
methods:{
    sendEvent(){
         this.$emit('actionEvent');
    }
}
    
}
</script>
<style>

</style>