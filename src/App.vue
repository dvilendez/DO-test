<template>
  <v-app>
    <v-app-bar>
      <v-btn to="/">
        Ejercicio 1
      </v-btn>
      <v-btn to="/exercise-two">
        Ejercicio 2
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
