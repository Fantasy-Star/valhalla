<template>
  <div>
    <h1 class="mdc-typography--headline2">{{ title }}</h1>
    <div v-for="year in years" :key="year">
      <h2 class="mdc-typography--headline4">{{ year }}</h2>
      <hr>
      <div class="mdc-layout-grid">
        <div class="mdc-layout-grid__inner">
          <template v-for="(servant, key) in servants">
            <div v-if="servant.year===year" class="mdc-layout-grid__cell" :key="key">
              <character-card :servant="servant"></character-card>
            </div>
          </template>
        </div>
      </div>
    </div>
    <back-to-top>
      <button class="mdc-fab" aria-label="Favorite">
        <span class="mdc-fab__icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-arrow-up-s-line"></use>
          </svg>
        </span>
      </button>
    </back-to-top>
  </div>
</template>

<script>
import servants from '../assets/json/servants.json'
import CharacterCard from '@/components/CharacterCard.vue'
export default {
  name: 'HelloWorld',
  components: {
    CharacterCard
  },
  data () {
    return {
      title: '幻星英灵殿',
      servants,
      since: 2014
    }
  },
  computed: {
    years () {
      let years = []
      for (let i = 0; i <= new Date().getFullYear() - this.since; i++) {
        years[i] = this.since + i
      }
      return years
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.right-tag {
  float: right;
  margin-left: 5px;
}

.mdc-fab {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
