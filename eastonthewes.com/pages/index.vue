<template>
    <title>eastonthewes.com</title>
    <div class="main-screen min-h-screen">
        <div class="website md:sticky text-xl pl-8 md:top-8 pt-8 md:pt-0"><h1>eastonthewes.com</h1></div>
        <div class="flex justify-center pb-24">
            
            <div class="flex flex-col items-center mx-4 w-4/6 md:w-1/2 lg:w-1/3 gap-y-4 pt-24">
                <Name />
                <AboutMe />
                <Work />
                <Projects />
                <Links />
            </div>
            
            
        </div>
    </div>

    
</template>

<script setup>
    import Name from '../components/Name.vue'
    import AboutMe from '../components/AboutMe.vue'
    import Work from '../components/Work.vue'
    import Projects from '../components/Projects.vue'
    import Links from '../components/Links.vue'
</script>

<style lang="css" scoped>
  
@font-face {
    font-family: Newake;
    src: url(assets/fonts/Newake-Font-Demo.otf);
}

    .website h1 {
        color: ghostwhite;
        font-weight: bold;
    }
    .main-screen {
        background-color: #141414;
        min-height: 100vh;
        height: auto; 
    }

    .main-content {
        color: whitesmoke;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400;
        font-size: 1.0rem;
    
    }

    .header {
        height: 10rem;
    }

    .image {

        height: 100px;
        width: 100px;
        object-fit: cover;
        overflow: hidden;
        border-radius: 50%;
    }

    .sub-text{
        color:gray;
        font-size: 1rem;
        font-family:Arial, Helvetica, sans-serif;
        letter-spacing: 0;
        font-weight: 500;
    }

    .work {
        color:gray;
    }


    .about-me p {
        color:gray;
        
    }

    .date {
        font-size: .8rem;
    }
    .title {
        font-size: .8rem;
    }

</style>