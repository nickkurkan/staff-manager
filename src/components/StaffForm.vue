<template>
  <div class="staff-form card">
    <h2>Add employee</h2>
    <form>
      <p>Full name</p>
      <input type="text">
      <p>Position</p>
      <input type="text">
      <p>Email</p>
      <input type="email">
      <p>Phone number</p>
      <input type="tel">
      <button class="btn btn__primary" type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.staff-form
  width: 25%
  margin-right: 5%
</style>