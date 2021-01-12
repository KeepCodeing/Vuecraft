<template>
  <div>
    <IntroPage />
    <LettersPage />
    <CardsPage />
  </div>
</template>

<script>
  import CardsPage from "../components/CardsPage";
  import IntroPage from "../components/IntroPage";
  import LettersPage from "../components/LettersPage";
  export default {
    name: "Home",
    components: {
      CardsPage,
      IntroPage,
      LettersPage
    }
  }
</script>

<style scoped>

</style>
