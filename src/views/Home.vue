<template>
  <div class="home container-fluid">
    <h1>Mar<span><img alt="Vue logo" src="../assets/logo.png"></span>el</h1>
    <div class="row">
      <div class="col-6">
        <div class="row">
          <character-card :character="character" v-for="character in characters"></character-card>
        </div>
      </div>
      <div v-if="activeCharacter.name" class="col-6 my-shadow">
        {{activeCharacter}}
      </div>
    </div>
  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard.vue'
export default {
   name: "home",
   props: [],
   data() {
      return {}
   },
   computed: {
     characters() {
       return this.$store.state.characters
     },
     activeCharacter() {
       return this.$store.state.activeCharacter
     }
   },
   methods: {},
   components: {//registering child components
    CharacterCard
   }
}
</script>
