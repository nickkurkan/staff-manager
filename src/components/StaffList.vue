<template>
  <div class="staff-list card">
    <h2 class="staff-list_title">Staff List</h2>
    <Employee v-for="(employee, id) in staff" :key="employee.name" v-bind="employee" :id="id"></Employee>
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
.staff-list
  width: 50%
</style>