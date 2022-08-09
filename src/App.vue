<template>
  <form @submit.prevent="createUser">
    <h2>Create User</h2>
    <input type="text" placeholder="First Name" required v-model="firstName">
    <input type="text" placeholder="Last Name" required v-model="lastName">
    <button>Submit</button>
  </form>
  <hr>
  <p v-for="user in users" :key="user.firstName">
    {{user.firstName}} {{user.lastName}}
  </p>
</template>

<script>
import { collection, addDoc, onSnapshot } from 'firebase/firestore'
import {db} from './firebase/init';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      users: []
    }
  },
  created() {
    this.createUser();
    this.getUsers();
  },
  methods: {
    async createUser() {
      const dataObj = {firstName: this.firstName, lastName: this.lastName}
      await addDoc(collection(db, 'users'), dataObj)
    },
    async getUsers() {
      onSnapshot(collection(db, 'users'), snap => {
        this.users = []
        snap.forEach(doc => this.users.push(doc.data()))
      })
    }
  }
}
</script>
