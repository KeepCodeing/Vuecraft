<template>
  <v-card>
    <v-card-title>
      <p>Message Box</p>
    </v-card-title>
    <v-list  three-line>
      <v-list-item v-for="item in messages">
        <v-avatar>
          <v-img :src="item.avatar" />
        </v-avatar>
        <v-list-item-content class="ml-5">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.content }}</v-list-item-subtitle>
          <v-divider />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    name: "Message",
    data() {
      return {
        messages: [
          { title: '今天也是好天气!', content: '不妨来休息...', avatar: './images/minecraft-wallpaper1.jpg' },
          { title: '那明天呢？', content: '一定是神社倒闭的日子啦...', avatar: './images/minecraft-wallpaper2.jpg' },
          { title: 'La fille aux cheveux de lin', content: '亚麻色头发的少女', avatar: './images/minecraft-wallpaper3.png' },
          { title: 'Ave Maria', content: 'Ave Marina...', avatar: './images/minecraft-wallpaper4.jpg' },
          { title: '今天也是好天气!', content: '不妨来休息...', avatar: './images/minecraft-wallpaper1.jpg' },
          { title: '那明天呢？', content: '一定是神社倒闭的日子啦...', avatar: './images/minecraft-wallpaper2.jpg' },
          { title: 'La fille aux cheveux de lin', content: '亚麻色头发的少女', avatar: './images/minecraft-wallpaper3.png' },
          { title: 'Ave Maria', content: 'Ave Marina...', avatar: './images/minecraft-wallpaper4.jpg' },
          { title: '今天也是好天气!', content: '不妨来休息...', avatar: './images/minecraft-wallpaper1.jpg' },
          { title: '那明天呢？', content: '一定是神社倒闭的日子啦...', avatar: './images/minecraft-wallpaper2.jpg' },
          { title: 'La fille aux cheveux de lin', content: '亚麻色头发的少女', avatar: './images/minecraft-wallpaper3.png' },
          { title: 'Ave Maria', content: 'Ave Marina...', avatar: './images/minecraft-wallpaper4.jpg' },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
