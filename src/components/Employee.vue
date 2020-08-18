<template>
  <div class="card card__primary">
    <div class="employee">
      <h3 class="employee_name">{{name}}</h3>
      <p class="employee_position">{{position}}</p>
      <p class="employee_contacts">
        <span class="employee_email">{{email}} | </span>
        <span class="employee_phone">{{phone}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    position: String,
    email: String,
    phone: String,
  },
};
</script>

<style lang="sass" scoped>
.employee

  &_contacts
    margin-bottom: 0
</style>