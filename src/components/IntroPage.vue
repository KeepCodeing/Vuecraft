<template>
  <v-container style="height: 100vh;" fill-height fluid class="page_image">
    <v-row no-gutters align="center" justify="center">
      <v-col md="12">
        <div class="display-4 white--text font-weight-regular text-center">
          <span class="blue--text lighten-2">M</span>
          <span>inecraft</span>
        </div>
      </v-col>
      <v-col md="12" class="text-center">
        <span class="display-1 white--text font-wight-thin">Wish you were here</span>
      </v-col>
      <v-col class="text-center mt-15">
        <v-icon class="display-3 white--text">mdi-arrow-collapse-down</v-icon>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "IntroPage"
  }
</script>

<style scoped>
.page_image {
  background-image: url("../assets/images/minecraft-wallpaper2.jpg");
  background-size: cover;
}
</style>
