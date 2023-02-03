<template>
    <div>
        <div :class="{ 'bg-green-500': type === 'success', 'bg-yellow-500': type === 'warning', 'bg-red-500': type === 'error'}" class=" my-4 w-1/3 h-max rounded-md">
            <h1 id="title">{{ title }}</h1>
            <p v-if="msg != 'no-msg'" id="msg">{{ msg }}</p>
            <ButtonComponent label="OK" :onClick="() => closeAlert()" />
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
        title: 'It worked!',
        msg:'no-msg',
        show: true
        }
    },
    methods: {
        showAlert: function(){

        },
        successAlert: function(){

        },
        warningAlert: function(){

        },
        errorAlert: function(){

        },
        closeAlert: function(){

        }
    }
})
</script>

<style scoped>

</style>