<template>
    <div class="flex flex-col min-w-full gap-y-4">
    <div class="Projects">
        <p>My Projects</p>
    </div>
    <div class="flex min-w-full">
        
        <div class="date w-1/3">
            <p>Nov 2022 - Present</p>
        </div>
        <div class="w-2/3 flex flex-col">
            <div class="title">
                <p>eastonthewes.com</p>
            </div>
            <div class="desc text-just">
                <p class="pt-2"> <b>-</b> Simple static website built using Vue with Nuxt, with styling using tailwindcss</p>
                <p class="pt-2"> <b>-</b> Hosted using Netlify</p>
                <a class="link" href="https://github.com/EastonThewes/eastonthewes.com" target="_blank"><p class="underline pt-2">GitHub Repo</p></a>
            </div>
        </div>

        
        
        
    </div>
    <div class="flex min-w-full">
        
        <div class="date w-1/3">
            <p>May 2022</p>
        </div>
        <div class="w-2/3 flex flex-col">
            <div class="title">
                <p>Micromouse Final Project</p>
            </div>
            <div class="desc text-just">
                <p class="pt-2"> <b>-</b> Developed an algorithm in C to solve a maze with a simulated Micromouse robot</p>
                <a class="link" href="https://github.com/EastonThewes/FloodFill-MicroMouse" target="_blank"><p class="underline pt-2">GitHub Repo</p></a>
            </div>
        </div>

        
        
        
    </div>
    <div class="flex min-w-full">
        
        <div class="date w-1/3">
            <p>Feb 2021 - May 2021</p>
        </div>
        <div class="w-2/3 flex flex-col">
            <div class="title">
                <p>CS230 Final Project</p>
            </div>
            <div class="desc text-just">
                <p class="pt-2"> <b>-</b> Developed a video game review website using basic HTML, CSS, along with Bootstrap</p>
                <p class="pt-2"> <b>-</b> Used PHP to interface with our MySQL database to host user information and allow for Signing Up and Logging In</p>
                <p class="pt-2"> <b>-</b> Designed a user profile page and navigation bar profile dropdown that showed user profile photo and allowed the user to view their profile, leave a review, or take a quiz </p>
                <a class="link" href="https://github.com/EastonThewes/WVU_CS230_2021.01_Group04-main" target="_blank"><p class="underline pt-2">GitHub Repo</p></a>
            </div>
        </div>

        
        
        
    </div>
</div>
</template>


<style lang="scss" scoped>
    .Projects p {
        color:ghostwhite;
        font-weight: bold;
    }
    .date p {
        color:darkgray;
        font-weight: bold;
    }

    .title p {
        color: darkgray;
        font-weight: bold;
    }

    .desc p {
        color: gray;
        font-weight: bold;
    }

    .link p {
        color: ghostwhite;
    }
</style>