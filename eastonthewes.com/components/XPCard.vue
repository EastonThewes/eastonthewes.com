<template>
    <div class="mx-auto w-4/5 md:w-1/2 rounded-xl pb-4" id="XPCard">
        <div  class="text-amber-400 text-2xl title pl-4 pt-4"><h1>{{ title }}</h1></div>
        <div class="text-primary text-md title pl-4 "><h1><i>{{ company }}</i></h1></div> 
        <div class="text-primary text-md title pl-4 "><h1><i>{{ startDate }} - {{ endDate }}</i></h1></div>
        <div class="pt-4 pl-8 desc text-2xl"><p class="text-primary ">- {{ desc1 }}</p></div>
        <div class="pt-4 pl-8 desc text-2xl"><p class="text-primary">- {{ desc2 }}</p></div>
        <div class="pt-4 pl-8 desc text-2xl"><p class="text-primary">- {{ desc3 }}</p></div>
    </div>
</template>

<script>
    export default {
        props: {
            title:String,
            company:String,
            startDate:String,
            endDate:String,
            desc1:String,
            desc2:String,
            desc3:String
        }
    }
</script>

<style lang="scss" scoped>
    @font-face {
        font-family: Cocogoose;
        src: url(assets/fonts/Cocogoose_trial.otf);
    }

    .title {
        font-family: Cocogoose;
    }

    @font-face {
        font-family: Butler;
        src: url(assets/fonts/Butler_Regular.otf);
    }

    .desc  {
        font-family: Butler;
    }
</style>