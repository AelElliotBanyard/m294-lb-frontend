<template>
    <div class="w-full fixed flex justify-center items-center top-0 left-0 transition-transform duration-700" :class="{'trasnlate-y-0': show, '-translate-y-full': !show}">
        <div :class="{ 'bg-green-500': type === 'success', 'bg-yellow-500': type === 'warning', 'bg-red-500': type === 'error'}" class=" my-4 w-6/12 h-max rounded-md">
            <h1 id="title" class=" border-b-2 border-b-gray-500 border-opacity-50 text-xl text-gray-100 font-bold py-4">{{ title }}</h1>
            <p v-if="msg != 'no-msg'" id="msg" class=" border-b-2 border-b-gray-500 border-opacity-50 text-gray-100 text-lg font-bold py-2">{{ msg }}</p>
            <div class=" flex justify-end items-center p-2">
                <ButtonComponent label="OK" :onClick="() => closeAlert()" class=" border-2 border-gray-500 bg-gray-500 text-gray-100 py-2 px-4 rounded-md"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonComponent from './ButtonComponent.vue';

export default defineComponent({
    name: 'AlertComponent',
    components:{
        ButtonComponent
    },
    data() {
        return {
        type: 'success',
        title: 'It Worked!',
        msg:'Message',
        show: true
        }
    },
    methods: {
        showAlert: function(){
            this.show = true
        },
        successAlert: function(){

        },
        warningAlert: function(){

        },
        errorAlert: function(){

        },
        closeAlert: function(){
            this.show = false
        }
    }
})
</script>

<style scoped>

</style>