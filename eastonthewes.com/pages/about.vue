<template>
    <div class="flex flex-col md:flex-row pt-16 bg-secondary">
        <div class=" w-5/6 md:w-4/6 text-2xl md:text-3xl m-auto md:pl-32">
            <p class="text-primary butler pb-4 ">My name is Easton Thewes and I am 23 years old</p>
            <p class="text-primary butler pb-4 ">I just finished my degree in Computer Engineering at West Virginia University in Morgantown, WV</p>
        </div>
        <div class="pt-8 md:pt-0 flex w-11/12 justify-center m-auto">
            <AboutPagePicture><img class="rounded-3xl" src="../assets/images/eastontree.jpg"></AboutPagePicture>
        </div>
    </div>

    <div class="flex flex-col-reverse md:flex-row pt-32 pb-12 bg-secondary">
        <div class="pt-8 md:pt-0 flex w-11/12 justify-center m-auto">
            <AboutPagePicture><img class="rounded-3xl" src="../assets/images/easton.jpg"></AboutPagePicture>
        </div>
        <div class=" w-5/6 md:w-4/6 text-2xl md:text-3xl m-auto md:pr-32">
            <p class="text-primary butler pb-4 ">My name is Easton Thewes and I am 23 years old</p>
            <p class="text-primary butler pb-4 ">I just finished my degree in Computer Engineering at West Virginia University in Morgantown, WV</p>
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

    .pic {
        width: 60%;
    }
</style>