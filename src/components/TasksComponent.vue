<template>
  <router-link to="/createTask" class="absolute right-8">
    <svg
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      fill="#FFFFFF"
      class="w-10 h-10"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>new-indicator</title>
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="scheduler"
            fill="#FFFFFF"
            transform="translate(85.333333, 85.333333)"
          >
            <path
              d="M170.666667,1.42108547e-14 C264.923264,-3.10380131e-15 341.333333,76.4100694 341.333333,170.666667 C341.333333,264.923264 264.923264,341.333333 170.666667,341.333333 C76.4100694,341.333333 2.57539587e-14,264.923264 1.42108547e-14,170.666667 C2.6677507e-15,76.4100694 76.4100694,3.15255107e-14 170.666667,1.42108547e-14 Z M170.666667,42.6666667 C99.9742187,42.6666667 42.6666667,99.9742187 42.6666667,170.666667 C42.6666667,241.359115 99.9742187,298.666667 170.666667,298.666667 C241.359115,298.666667 298.666667,241.359115 298.666667,170.666667 C298.666667,99.9742187 241.359115,42.6666667 170.666667,42.6666667 Z M192,85.3333333 L191.999333,149.333333 L256,149.333333 L256,192 L191.999333,191.999333 L192,256 L149.333333,256 L149.333333,191.999333 L85.3333333,192 L85.3333333,149.333333 L149.333333,149.333333 L149.333333,85.3333333 L192,85.3333333 Z"
              id="Combined-Shape"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  </router-link>
  <div
    v-for="task in tasks"
    :key="task.id"
    class="w-1/3 h-8 bg-sky-700 rounded relative flex justify-center items-center shadow-md"
  >
    <p class="text-lg font-bold text-gray-100">{{ task.title }}</p>
    <svg
      viewBox="0 0 100 100"
      width="64"
      height="64"
      class="absolute top-0 left-0 h-8 w-8"
    >
      <g>
        <rect
          v-if="task.completed"
          x="0"
          y="0"
          height="100"
          width="100"
          fill="green"
        />
        <rect
          v-else
          rx="14"
          x="0"
          y="0"
          height="95"
          width="95"
          fill="red"
          stroke="red"
          strok-width="5"
        />
      </g>
    </svg>
    <div
      id="ud"
      class="absolute right-0 h-8 top-0 flex justify-center items-center"
    >
      <router-link :to="'/taskDelete/' + task.id" class="mx-1">
        <svg
          viewBox="0 0 1024 1024"
          fill="#ffffff"
          class="icon w-4 h-4"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
          stroke-width="47.104"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M32 241.6c-11.2 0-20-8.8-20-20s8.8-20 20-20l940 1.6c11.2 0 20 8.8 20 20s-8.8 20-20 20L32 241.6zM186.4 282.4c0-11.2 8.8-20 20-20s20 8.8 20 20v688.8l585.6-6.4V289.6c0-11.2 8.8-20 20-20s20 8.8 20 20v716.8l-666.4 7.2V282.4z"
              fill=""
            ></path>
            <path
              d="M682.4 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM367.2 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM524.8 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM655.2 213.6v-48.8c0-17.6-14.4-32-32-32H418.4c-18.4 0-32 14.4-32 32.8V208h-40v-42.4c0-40 32.8-72.8 72.8-72.8H624c40 0 72.8 32.8 72.8 72.8v48.8h-41.6z"
              fill=""
            ></path>
          </g>
        </svg>
      </router-link>
      <router-link :to="'/taskEdit/' + task.id" class="mx-1">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
          class="w-4 h-4"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g clip-path="url(#clip0_429_11139)">
              <path
                d="M5 16L4 20L8 19L19.5858 7.41421C20.3668 6.63316 20.3668 5.36683 19.5858 4.58579L19.4142 4.41421C18.6332 3.63316 17.3668 3.63317 16.5858 4.41421L5 16Z"
                stroke="#FFFFFF"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M15 6L18 9"
                stroke="#FFFFFF"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M13 20H21"
                stroke="#FFFFFF"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_429_11139">
                <rect width="24" height="24" fill="white"></rect>
              </clipPath>
            </defs>
          </g>
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Task } from "../../types/index";

export default defineComponent({
  name: "TasksComponent",
  props: {
    tasks: {
      type: Array as PropType<Array<Task>>,
      required: true,
    },
  },
});
</script>
