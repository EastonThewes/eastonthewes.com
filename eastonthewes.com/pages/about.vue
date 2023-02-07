<template>
    <div class="flex pt-16 bg-secondary height">
        <div class="flex flex-col justify-center pl-64 w-4/6">
            <p class=" text-primary butler text-3xl pb-4">My name is Easton Thewes and I am 23 years old</p>
            <p class=" text-primary butler text-3xl pb-4">I just finished my degree in Computer Engineering at West Virginia University in Morgantown, WV</p>
        </div>
        <AboutPagePicture><img class="rounded-3xl" src="../assets/images/eastontree.jpg"></AboutPagePicture>
    </div>

    <div class="flex pt-32 pb-32 bg-secondary height">
        <AboutPagePicture><img class="rounded-3xl" src="../assets/images/easton.jpg"></AboutPagePicture>
        <div class="flex flex-col justify-center pl-0 pr-64 w-4/6">
            <p class=" text-primary butler text-3xl pb-4">I have a love for learning and programming and decided to build this website to broaden my skills and learn new tech</p>
            <p class=" text-primary butler text-3xl pb-4">In 2023 I'm hoping to find a full time position developing full stack web applications or embedded software developing</p>
            <p class=" text-primary butler text-3xl pb-4">I would love to learn more about low level systems or application development through hands on experience</p>
        </div>
    </div>

</template>

<script>
    import AboutPagePicture from '../components/AboutPagePicture.vue'

    export default {
        data() {
            return {
                filename:""
            }
        }
    }
 
</script>

<style lang="scss" scoped>
    @font-face {
        font-family: Cocogoose;
        src: url(assets/fonts/Cocogoose_trial.otf);
    }

    @font-face {
        font-family: Butler;
        src: url(assets/fonts/Butler_Regular.otf);
    }

    .cocogoose {
        font-family: Cocogoose;
    }

    .butler {
        font-family: Butler;
    }

    .height {
        height: 48rem;
    }
</style>