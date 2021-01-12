<template>
  <v-container fluid>
    <v-row class="mt-8 mt-6 mb-6" justify="center">
      <v-col md="12">
        <p class="text-h3 font-weight-black text-center">Minecraft And Vuecraft</p>
      </v-col>
      <v-col md="3" v-for="item in info">
        <v-card height="630" raised shaped>
          <v-img :src="item.image" height="450">
            <p class="black--text font-weight-bold text-h4 ma-4">{{item.title}}</p>
          </v-img>
          <v-card-title>{{item.title}}</v-card-title>
          <v-card-text class="gray--text">{{item.text}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "CardsPage",
    data() {
      return {
        info: [
          { title: 'Building', image: './images/minecraft-wallpaper2.jpg', text: 'The Keto diet is a high-fat, adequate-protein, low-carbohydrate diet. The diet forces the body to burn fats rather than carbohydrates by putting the body into ketosis.' },
          { title: 'Outdoor', image: './images/minecraft-wallpaper1.jpg', text: 'The Keto diet is a high-fat, adequate-protein, low-carbohydrate diet. The diet forces the body to burn fats rather than carbohydrates by putting the body into ketosis.' },
          { title: 'World', image: './images/minecraft-wallpaper3.png', text: 'The Keto diet is a high-fat, adequate-protein, low-carbohydrate diet. The diet forces the body to burn fats rather than carbohydrates by putting the body into ketosis.' },
        ],
      }
    }
  }
</script>

<style scoped>

</style>
