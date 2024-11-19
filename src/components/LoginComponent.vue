<template>
    <div class="container">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input id="username" v-model="username" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input id="password" type="password" v-model="password" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async handleLogin() {
        try {
          const response = await axios.post('http://localhost:8081/api/login', {
            username: this.username,
            password: this.password,
          });
          this.$store.dispatch('auth/login', response.data.token);
          this.$router.push('/dashboard');
        } catch (error) {
          alert('Invalid credentials');
        }
      },
    },
  };
  </script>
  