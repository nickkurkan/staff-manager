<template>
  <div class="staff-list">
    <div class="card">
      <h2 class="staff-list_title">Staff List</h2>
      <Employee v-for="(employee, id) in staff" :key="id" v-bind="employee" :id="id"></Employee>
    </div>
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
    Employee
  }
};
</script>

<style lang="sass" scoped>
.staff-list
  width: 50%
  display: flex
  flex-direction: column
  justify-content: flex-start

@media screen and (max-width: 1024px)
  .staff-list
    width: 60%

@media screen and (max-width: 576px)
  .staff-list
    width: 100%
    margin: 0 10px 5% 10px
    position: static
</style>