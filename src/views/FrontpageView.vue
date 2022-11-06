<template>
    <div>
        <div class="flex flex-col w-full justify-center items-center">
            <div class="bg-teal-100 mt-10 pl-5 pr-5 pb-9 rounded-md">
                <h1 class="text-9xl font-semibold">
                    {{ title
                    }}<span class="font-bold text-teal-400" v-if="dotVisible"
                        >.</span
                    >
                </h1>
            </div>
        </div>
        <div
            class="flex flex-row gap-20 mt-20 w-full justify-center items-center">
            <shiny-button
                class="from-red-800 to-red-400 text-white"
                @click="$router.push('/register')"
                >Register</shiny-button
            >
            <shiny-button
                class="from-purple-800 to-purple-400 text-white"
                @click="$router.push('/login')"
                >Log in</shiny-button
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ShinyButton from "@/components/shinybutton.vue";
import { useRouter } from "vue-router";

const delay = 300;

const fullTitle = "Puncty";
let title = ref("");
let dotVisible = ref(false);

const writeTitle = () => {
    title.value += fullTitle[title.value.length];
    if (title.value !== fullTitle)
        setTimeout(
            () => writeTitle(),
            delay * Math.abs(Math.sin(title.value.length)),
        );
    else setTimeout(() => (dotVisible.value = true), delay * 2);
};

writeTitle();
</script>
