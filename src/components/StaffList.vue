<template>
  <div class="card">
    <h2>Staff List</h2>
    <Employee v-for="employee in staff" :key="employee.name" :name="employee.name" :position="employee.position" :email="employee.email" :phone="employee.phone"></Employee>
  </div>
</template>

<script>
import Employee from './Employee'
export default {
  computed: {
    staff() {
      return this.$store.state.staff
    }
  },
  components: {
    'Employee': Employee
  }
};
</script>

<style lang="sass" scoped>
</style>