<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
	components: {
		Navbar
	}
};
</script>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");
@import "~bulma/sass/utilities/_all";
@import "~bulma";

#app {
  margin: 0;
  padding: 0;
}

* {
  transition-duration: 0.35s;
}

body {
  background-color: #212121;
}

</style>
