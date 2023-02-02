<template>
    <div class="absolute top-0 w-full left-0 right-0">
        <div v-if="type === 'success'" :class="{'translate-y-0': show, 'translate-y-full': !show}" class="bg-green-500 translate-y-99 transition-all duration-1000">
            <div v-if="msg === 'no-msg'" >
                <p>{{ title }}</p>
            </div>
            <div v-else>
                <p>{{ title }}</p>
                <p>{{ msg }}</p>
            </div>
        </div>
        <div v-else-if="type === 'error'" class=" bg-red-500">
            <div v-if="msg === 'no-msg'" >
                <p>{{ title }}</p>
            </div>
            <div v-else>
                <p>{{ title }}</p>
                <p>{{ msg }}</p>
            </div>

        </div>

        <div v-else-if="type === 'warning'" class=" bg-yellow-500">
            <div v-if="msg === 'no-msg'" >
                <p>{{ title }}</p>
            </div>
            <div v-else>
                <p>{{ title }}</p>
                <p>{{ msg }}</p>
            </div>

</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        type: {
            type: String as PropType<"success" | "error" | "warning">,
            required: true,
            default: 'success'
        },
        title: {
            type: String,
            required: true,
            default: 'Success!'
        },
        msg: {
            type: String,
            required: false,
            default: 'no-msg'
        },
        show: {
            type: Boolean,
            required: true,
            default: false
        }
    }
})
</script>