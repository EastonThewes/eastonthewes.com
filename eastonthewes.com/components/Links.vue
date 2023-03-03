<template>
    <div class="flex flex-col min-w-full" >
        <div class="my-links gap-y-4">
            <p>My Links</p>
        </div>
        <div class="flex pt-4">
            <div class="link-name w-1/4">LinkedIn</div>
            <div class="link"><a class="link" href="https://www.linkedin.com/in/eastonthewes/" target="_blank"><p class="underline">@EastonThewes</p></a></div>
        </div>
        <div class="flex pt-4">
            <div class="link-name w-1/4">Github</div>
            <div class="link"><a class="link" href="https://github.com/EastonThewes" target="_blank"><p class="underline">@EastonThewes</p></a></div>
        </div>
        <div class="flex pt-4">
            <div class="link-name w-1/4">Resume</div>
            <div class="link"><a class="link" href="https://www.dropbox.com/s/knuszuxcii2fxak/ThewesEaston_Resume.pdf?dl=0" target="_blank"><p class="underline">ThewesEaston_Resume.pdf</p></a></div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
    .my-links p {
        color: ghostwhite;
        font-weight: bold;
    }

    .link-name {
        color: darkgray;
        font-weight: bold;
    }

    .link {
        color: gray;
        font-weight: bold;
    }
</style>