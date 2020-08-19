<template>
  <div class="container">
    <div class="row">
      <h1>Staff Manager</h1>
    </div>
    <div class="row">
      <StaffForm></StaffForm>
      <StaffList></StaffList>
    </div>
  </div>
</template>

<script>
import StaffForm from "@/components/StaffForm";
import StaffList from "@/components/StaffList";
export default {
  components: {
    StaffForm,
    StaffList,
  },
};
</script>

<style lang="sass" scoped>
h1
  width: 100%
  text-align: center
</style>