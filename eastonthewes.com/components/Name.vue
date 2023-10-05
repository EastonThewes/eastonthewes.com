<template>
    <div class="flex gap-4 justify-center h-min min-w-full">
        <img class="image" src="../static/files/easton.jpg" alt="">
        <div class="flex flex-col justify-center">
            <div class="name">
                Easton Thewes
            </div>
            <div class="sub-text">
                Firmware Engineer <br>
                <a href="https://www.eagleresearchcorp.com">@Eagle Research Corporation</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.name {
    color:whitesmoke;
    font-weight: bold;
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
    font-weight: bold;
}

</style>