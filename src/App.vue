<template>
  <div id="app">
    <!-- Navbar ou header da aplicação -->
    <b-navbar variant="light" type="light">
      <b-navbar-brand href="#">Calculator App</b-navbar-brand>
    </b-navbar>

    <!-- Container principal para o conteúdo -->
    <b-container class="mt-3">
      <!-- Router View para exibir as páginas configuradas no vue-router -->
      <router-view></router-view>
    </b-container>

    <!-- Footer -->
    <b-footer class="text-center mt-3">
      <p>© 2024 Calculator App - Todos os direitos reservados</p>
    </b-footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Adicione estilos globais ou relacionados ao layout */
#app {
  font-family: Arial, sans-serif;
  color: #333;
}
</style>
