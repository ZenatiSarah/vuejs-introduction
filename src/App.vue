<template>
  <nav>
    <router-link to="/">Accueil</router-link> |
    <router-link to="/about">A propos</router-link> |
    <router-link :to="{ name: 'Product', params: { name: 'Skate' } }"
      >Produit 1</router-link
    >
    |
    <router-link :to="{ name: 'Product', params: { name: 'Trotinette' } }"
      >Produit 2</router-link
    >
    |
    <button @click="showProduct('Roller')">Produit 3</button>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
  methods: {
    showProduct: function (name) {
      this.$router.push({ name: "Product", params: { name: name } });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  text-decoration: none;
  color: #999;
}
.router-link-active {
  font-weight: bold;
  color: blueviolet;
}
</style>