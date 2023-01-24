<template>
    <div class="pt-16 bg-secondary">
        <XPCard 
        title="Application Developer"
        company="Encova Insurance"
        startDate="May 2022"
        endDate="December 2022" 
        desc1="Designed and implemented front-end solutions using the Angular framework in combination with TypeScript, C# and the .NET framework to automate regulatory file processing and add quality of life features for internal tool users"
        desc2="Evaluated existing applications and provided updates and modifications based on business needs"
        desc3="Provided user support through ServiceNow for interal web applications"/>
        <!-- <XPCard title="TBA" company="Your Company" startDate="soon" endDate="N/A"></XPCard> -->
    </div>
</template>

<script>
    import XPCard from '../components/XPCard.vue'
    export default {
        components: {
            XPCard
        },
        data() {
            return {     
                    title:'',
                    company:'',
                    startDate:'',
                    endDate:'',
                    desc1:'',
                    desc2:'',
                    desc3:''

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>