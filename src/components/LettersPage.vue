<template>
  <v-container fluid class="cyan lighten-4">
    <v-row justify="center" align="center" class="pt-8 pb-10" dense>
      <v-col md="12">
        <p class="display-3 cyan--text text--darken-3 text-center font-weight-medium">Minecraft Memories</p>
      </v-col>
      <v-col md="7" v-for="i in 3">
        <v-list style="background: none">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="mb-3 font-weight-bold text-h5 cyan--text lighten-1--text">Lorem ipsum</v-list-item-title>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar risus quis mauris interdum, in euismod nibh pretium. Etiam pulvinar tincidunt dapibus. Quisque sollicitudin, mauris a consequat consectetur, turpis nisl sollicitudin enim, id consectetur neque neque nec metus. Pellentesque dolor nisi, vulputate quis lobortis ac, tincidunt et quam. Mauris pulvinar blandit nisi nec mattis. Aliquam accumsan ut sem eget efficitur. Vivamus in tortor gravida eros laoreet condimentum nec vel dui. Nullam quam massa, ultrices eget tincidunt a, pulvinar ac libero.</p>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "LettersPage"
  }
</script>

<style scoped>

</style>
