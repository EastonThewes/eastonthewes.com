<template>
    
        <div class="mx-auto md:mx-8" >
            <h2 class="text-5xl md:text-8xl font-semibold pb-8 drop-shadow-xl text-left  easton">hi, i'm <b class="text-amber-400">easton</b></h2>
            <p class="text-2xl md:text-4xl font-extralight drop-shadow-2xl about  ">I am a recent graduate from West Virginia University and I am looking for a full time position!</p>
        </div>
        <div class="flex gap-12 text-4xl pt-8 justify-center md:justify-start md:ml-8">
            <a href="https://github.com/eastonthewes" class="hover:text-6xl hover:text-amber-400 ease-in-out duration-75"><i class="bi bi-github" title="My Github!"></i></a>    
            <a href="https://www.linkedin.com/in/eastonthewes/" class="hover:text-6xl hover:text-amber-400 ease-in-out duration-75"><i class="bi bi-linkedin" title="My LinkedIn!"></i></a>
            <a href="mailto: theweseaston@gmail.com" class="hover:text-6xl hover:text-amber-400 ease-in-out duration-75"><i class="bi bi-envelope" title="Email Me!"></i></a>
            <a href="_nuxt/assets/ThewesEaston_Resume.pdf" target="_blank" class="hover:text-6xl hover:text-amber-400 ease-in-out duration-75"><i class="bi bi-filetype-pdf" title="My Resume!"></i></a>
        </div>


</template>

<style lang="scss" scoped>
    @font-face {
        font-family: Cocogoose;
        src: url(assets/fonts/Cocogoose_trial.otf);
    }

    @font-face {
        font-family: Butler;
        src: url(assets/fonts/Butler_Regular.otf);
    }

    .easton {
        font-family: Cocogoose;
    }

    .about {
        font-family: Butler;
    }
    

    
</style>