<template>
  <nav>
    <v-app-bar
      app
      flat
      color="blue darken-2">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title>
        <span class="black--text font-weight-light text--darken-2">Vue</span>
        <span>Craft</span>
      </v-app-bar-title>
      <v-spacer />
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" temporary class="blue darken-3 lighten-2">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="font-weight-black text-h5">Menu</v-list-item-title>
            <v-list-item-subtitle class="text-overline">VueCraft</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list flat>
        <v-list-item-group v-model="selectedItem" color="white lighten-2">
          <v-list-item v-for="item in items" :to="item.path">
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{item.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  export default {
    name: "AppBar",
    data() {
      return {
        selectedItem: 0,
        items: [
          { text: 'Home', icon: 'mdi-home-circle', path: '/home' },
          { text: 'Message', icon: 'mdi-chat-processing-outline', path: '/message' },
          { text: 'About', icon: 'mdi-account-circle', path: '/about' },
        ],
        drawer: false,
      }
    }
  }
</script>

<style scoped>

</style>
