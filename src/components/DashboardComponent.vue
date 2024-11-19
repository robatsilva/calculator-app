<template>
    <div class="container">
      <h1>Dashboard</h1>
      <p>Welcome, {{ user.username }}!</p>
      <p>Your current balance is: {{ user.balance }}</p>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      user() {
        return this.$store.state.auth.user || {};
      },
    },
    mounted() {
      // Fetch user info if not already in state
      if (!this.user.username) {
        // Call an API endpoint to fetch user details
      }
    },
  };
  </script>
  