<template>
    <div class="flex w-3/6 " id="AboutPagePicture">
        <div class="flex justify-center">
             <slot />
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