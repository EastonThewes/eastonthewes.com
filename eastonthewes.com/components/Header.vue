<template>
    <!-- Header -->
    <div class="bg-zinc-900 text-gray-100 py-3.5 md:px-48 shadow px-6 md:flex justify-between items-center z-50">
        <!-- eastonthewes.com -->
        <div class="flex items-center">
            <span class="text-primary text-2xl mr-1 font">
                <nuxt-link to="/">eastonthewes.com</nuxt-link>
            </span>
        </div>

        <!-- Button -->
        <span @click="MenuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
            <i :class="[open ? 'bi bi-x' : 'bi bi-list']"></i>
        </span>
       
        <ul class="md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute font text-primary bg-zinc-900 md:w-auto w-full top-14 duration-200 ease-in z-[100]"
        :class="[open ? 'left-0' : 'left-[-100%]']">
            <li class="md:mx-4 md:my-0 my-6" v-for="(link,name) in Links" :key="name">
                <nuxt-link :to="link.link" class="text-xl hover:text-green-500">{{ link.name }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import Button from '../components/Button.vue'
    export default {
        components: {
            Button
        },
        setup() {
            let open = ref(false)
            let Links = [
                // {name: "Home", link:"/"},
                {name: "About", link:"/about"},
                {name: "Professional Experience", link:"/xp"},
                {name: "Projects", link:"/projects"},
            ]

            function MenuOpen() {
                open.value = !open.value
            }

            return {Links,open,MenuOpen}
        }
    }
</script>

<style lang="scss" scoped>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css");

    @font-face {
        font-family: Cocogoose;
        src: url(assets/fonts/Cocogoose_trial.otf);
    }

    .font {
        font-family: Cocogoose;
    }

</style>