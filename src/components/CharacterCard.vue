<template>
    <div class="character-card col-4">
        <div @click="setActive" class="card bg-danger text-white action char-card">
            <img :src="!((character.thumbnail.path+'.'+character.thumbnail.extension).includes('_not_avail')) ? character.thumbnail.path+'.'+character.thumbnail.extension : 'https://cdn.vox-cdn.com/thumbor/9yAot9JLM_cX6thEgvOaZIxTr7Q=/0x0:4677x3280/1200x800/filters:focal(2346x1127:3094x1875)/cdn.vox-cdn.com/uploads/chorus_image/image/62282455/615970090.jpg.0.jpg'" alt="character-img" class="card-img top">
            <div class="card-body">
            <h2>{{character.name}}</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name: "character-card",
   props: ['character'],
   data() {
      return {}
   },
   computed: {},
   methods: {
       setActive() {
           this.$store.dispatch('setActiveCharacter', this.character)
       }
   },
   components: {}
}
</script>

<style>
.char-card:hover {
    box-shadow: 0 0 5px 3px var(--danger), 0 2px 10px 5px black;
}
.my-shadow:hover {
    text-shadow: 0 0 5px green;
}
</style>
