<template>
    <div class="flex w-3/6 " id="AboutPagePicture">
        <div class="flex justify-center">
            <img class="rounded-3xl" :src=" filename ">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            filename: String
        }
    }
</script>

<style lang="scss" scoped>

</style>