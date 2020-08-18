<template>
  <div class="card">
    <h2>Staff List</h2>
    <Employee name="John Doe" position="CEO" email="johndoe@mail.com" phone="+380 63 123 45 67"></Employee>
  </div>
</template>

<script>
import Employee from './Employee'
export default {
  components: {
    'Employee': Employee
  }
};
</script>

<style lang="sass" scoped>
</style>