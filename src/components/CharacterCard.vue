<template>
  <div class="servant-card">
    <div class="servant-card__primary">
      <h2 class="mdc-typography mdc-typography--headline6">
        {{ servant.name }}
        <small v-if="servant.nickname">
          {{ '/' + servant.nickname }}
        </small>
      </h2>
      <h3 class="mdc-typography mdc-typography--subtitle2">
        {{ servant.department }}
      </h3>

      <div class="mdc-chip">
        <i class="mdc-chip__icon mdc-chip__icon--leading line-height-0">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-user-2-line"></use>
          </svg>
        </i>
        <div class="mdc-chip__text">
          <template v-for="position in servant.positions">
            {{ position }}
          </template>
        </div>
      </div>

      <div class="mdc-chip" v-if="servant.department">
        <i class="mdc-chip__icon mdc-chip__icon--leading line-height-0">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-community-line"></use>
          </svg>
        </i>
        <div class="mdc-chip__text">{{ servant.department }}</div>
      </div>

      <div class="servant-card-description">
        <p v-html="servant.description"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    servant: Object
  }
}
</script>

<style lang="scss">
.line-height-0 {
  line-height: 0;
}

.mdc-icon-button {
  line-height: 1;
}

.servant-card {
  display: flex;
  border-radius: 4px;
  min-height: 160px;
  background: rgba(0, 0, 0, 0.6);
  border-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  transition: 0.5s;

  &:hover {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3) !important;
  }

  &__primary {
    width: 100%;
  }

  &-description {
    margin: 5px;
  }
}

.mdc-chip {
  margin: 4px;
}
</style>
