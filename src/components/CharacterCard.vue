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

      <div class="servant-card-chip">
        <i class="servant-card-chip__icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-user-2-line"></use>
          </svg>
        </i>
        <div class="servant-card-chip__text">
          <template v-for="position in servant.positions">
            {{ position }}
          </template>
        </div>
      </div>

      <div class="servant-card-chip" v-if="servant.department">
        <i class="servant-card-chip__icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-community-line"></use>
          </svg>
        </i>
        <div class="servant-card-chip__text">{{ servant.department }}</div>
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

  &-chip {
    display: inline-flex;
    border-radius: 1rem;
    background-color: #e0e0e0;
    color: rgba(0,0,0,.87);
    font-size: .9rem;
    line-height: 1.4;
    margin: 4px;
    padding: 6px 10px;
    cursor: pointer;
    transition: .2s;

    &:hover {
      background-color: rgba(#e0e0e0, 0.9);
    }

    &:active {
      background-color: rgba(#e0e0e0, 0.8);
    }

    &__icon {
      line-height: 1;
      font-size: 20px;
    }

    &__text {
      margin-left: 2px;
    }
  }

  &-description {
    margin: 5px;
  }
}
</style>
