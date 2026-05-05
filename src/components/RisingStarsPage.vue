<template>
    <div className="rising-stars-page">
        <RisingStarsHero />
        <section>
            <AreasOfCollaboration />
        </section>
        <LetsChat />
    </div>
</template>


<script setup> 
import AreasOfCollaboration from './AreasOfCollaboration.vue'
import RisingStarsHero from './RisingStarsHero.vue'
import LetsChat from './LetsChat.vue'

</script>
<style scoped>

.rising-stars-page {
    text-align: center;
    margin: auto;
    margin-bottom: 50px;
}

</style>