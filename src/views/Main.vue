<template>
  <div class="main">
    <div class="container">
    <div class="row">
      <h1>Staff Manager</h1>
    </div>
    <div class="row">
      <StaffForm></StaffForm>
      <StaffList></StaffList>
    </div>
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
.main
  padding: 50px 0
.row
  justify-content: center

@media screen and (max-width: 768px)
  .main
    padding: 25px 0
</style>