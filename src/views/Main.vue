<template>
  <div class="container">
    <h1>Staff Manager</h1>
    <StaffForm></StaffForm>
    <StaffList></StaffList>
  </div>
</template>

<script>
import StaffForm from '@/components/StaffForm'
import StaffList from '@/components/StaffList'
export default {
  components: {
    StaffForm, StaffList
  }
};
</script>

<style lang="sass" scoped>
h1
  width: 100%
  text-align: center
</style>