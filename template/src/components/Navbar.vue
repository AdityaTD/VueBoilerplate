<template>
  <b-navbar fixed-top="true" wrapper-class="container" type="is-info" shadow="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <p class="is-size-5">VueBoilerplate</p>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item :to="{ path: '/' }"><fai icon="home" class="nav-icon"/>Home</b-navbar-item>
    </template>
  </b-navbar>
</template>
