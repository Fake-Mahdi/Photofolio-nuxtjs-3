<template>
  <div class="hello">
        <div>
            <div class="container">
                <div class="rows">
                    <div v-for="anime in animelist" :key="anime.name" class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div class="card">
                            <h2>{{ anime.name }}</h2>
                            <p>{{ anime.description }}</p>
                            <p><strong>Publish Date:</strong> {{ anime.publish_date }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import animes from '@/json/main.json'

// Initialize animelist directly from the JSON data
const animelist = ref(animes.anime)

// Log data to the console when component is mounted
onMounted(() => {
  console.log('Animelist data:', animelist.value[0])
})

// Define component properties if needed
const props = defineProps({
  name: 'list'
})
</script>
<style scoped>

</style>