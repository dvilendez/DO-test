<template>
  <v-row
    style="padding-top: 20px"
    no-gutters
  >
    <v-col
      offset="4"
      col="4"
      style="text-align: center"
    >
      <h1>Luke Skywalker</h1>
      <h2>Información de su planeta</h2>
      <h3>Nombre: {{planet.name}}</h3>
      <h3>Poblacion: {{planet.population}}</h3>
      <h3>Diámetro: {{planet.diameter}}</h3>
      <h3>Gravedad: {{planet.gravity}}</h3>
    </v-col>
    <!-- Para hacer el espacio al final -->
    <v-col col="4"></v-col>
  </v-row>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { getPeopleById } from '../services/people.service'
  import { request } from '../services/request'

  const people = ref({})
  const planet = ref({})

  onMounted(async() => {
    // console.log(PeopleService)
    people.value = await getPeopleById(1)
    planet.value = await request(people.value.homeworld)
  })
</script>