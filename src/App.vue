<script>
import AppHeader from './components/App.Header.vue';
import AppFooter from './components/App.Footer.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>


<style lang="scss">
 @use './assets/scss/main.scss' as *;
</style>
