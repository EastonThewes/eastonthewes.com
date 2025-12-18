<template>
<div class="flex flex-col min-w-full gap-y-4">
    <div class="xp">
        <p>Work Experience</p>
    </div>

    <!-- Eagle Research -->
    <div class="flex min-w-full">
        
        <div class="date w-1/3">
            <p>May 2023 - Present</p>
        </div>
        <div class="w-2/3 flex flex-col">
            <div class="title">
                <p>Firmware Engineer - Eagle Research Corporation</p>
            </div>
            <div class="desc text-just">
                <p class="pt-2"> <b>-</b> Developing firmware for Natural Gas Flow Computers using ARM Cortex M4, M0, and MSP430 processors</p>
                <p class="pt-2"> <b>-</b> Diagnosed, evaluated, and resolved complex firmware and hardware issues, improving performance and reliability</p>
                <p class="pt-2"> <b>-</b> Authored and maintained technical documentaion between RTU's and other devices, ensuring seamless integration and industry compliance</p>
                <p class="pt-2"> <b>-</b> Developed and deployed a modern SCADA web application using React and .NET, SQLServer, streamlining data monitoring and reporting, improving secuirty and user experience</p>
            </div>
        </div>
    </div>

    <!-- Encova -->
    <div class="flex min-w-full">
        
        <div class="date w-1/3">
            <p>May 2022 - Dec 2022</p>
        </div>
        <div class="w-2/3 flex flex-col">
            <div class="title">
                <p>Application Developer Intern - Encova Insurance</p>
            </div>
            <div class="desc text-just">
                <p class="pt-2"> <b>-</b> Designed and developed internal applications using Angular, C# and .NET</p>
                <p class="pt-2"> <b>-</b> Evaluated existing applications and provided updates to meet business needs</p>
                <p class="pt-2"> <b>-</b> Provided user support and handled support tickets through ServiceNow for internal web applications</p>
            </div>
        </div>
        
        
    </div>
</div>
    
</template>

<script>

</script>

<style lang="scss" scoped>

    .xp p {
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

</style>
