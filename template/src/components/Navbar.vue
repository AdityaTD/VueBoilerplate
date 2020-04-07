<template>
  <nav class="navbar is-fixed-top is-info" role="navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item is-size-5" href="/">
          VueBoilerplate
        </a>

        <a role="button" class="navbar-burger has-text-white" :class="{'is-active': navIsActive}" @click='toggleMenu' data-target=”mainNav” aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="animated fadeInDown navbar-menu" id="mainNav" :class="{'is-active': navIsActive}">
        <div class="navbar-end">
          <a class="navbar-item" @click="push('/')">
            <i class="fas fa-home" style="margin-right: 5px;" />Home
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
	name: "Navbar",
	data () {
		return {
			navIsActive: false
		};
	},
	methods: {
		toggleMenu: function () {
			this.navIsActive = !this.navIsActive;
		},
		push: function (url) {
		  return this.$router.push(url);
		}
	}
};
</script>
