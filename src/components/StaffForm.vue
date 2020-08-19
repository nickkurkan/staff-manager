<template>
  <div class="staff-form">
    <div class="card">
      <h2>Add employee</h2>
      <form @submit.prevent="checkForm" novalidate="true">
        <p>Full name</p>
        <input type="text" v-model.trim="employeeData.name" />
        <p
          class="staff-form_error error"
          v-if="errors.name"
        >Field must contain First and Last name separated by a space</p>
        <p>Position</p>
        <input type="text" v-model.trim="employeeData.position" />
        <p class="staff-form_error error" v-if="errors.position">Enter at least 5 characters</p>
        <p>Email</p>
        <input type="email" v-model.trim="employeeData.email" />
        <p class="staff-form_error error" v-if="errors.email">Enter a valid email</p>
        <p>Phone number</p>
        <input type="tel" v-model.trim="employeeData.phone" />
        <p class="staff-form_error error" v-if="errors.phone">Enter a valid phone number</p>
        <button class="btn btn__primary" type="submit">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    employeeData: {
      name: "Nick K",
      position: "Cheaf",
      email: "test@test.com",
      phone: "380111111111",
    },
    errors: {
      name: false,
      position: false,
      email: false,
      phone: false,
    },
  }),
  methods: {
    addEmployee() {
      this.$store.dispatch("addEmployee", this.employeeData);
    },
    checkForm() {
      this.validName(this.employeeData.name);
      this.validPosition(this.employeeData.position);
      this.validEmail(this.employeeData.email);
      this.validPhone(this.employeeData.phone);

      let validPass;

      for (let error in this.errors) {
        if (this.errors[error]) {
          validPass = false;
          console.log(validPass);
          break
        } else {
          validPass = true;
        }
      }

      if (validPass) {
        this.$store.dispatch('addEmployee', this.employeeData)
      }
    },
    validName(name) {
      let re = /^(([A-za-zА-яа-я]+[\s]{1}[A-za-zА-яа-я]+))$/g;
      this.errors.name = re.test(name) ? false : true;
    },
    validPosition(position) {
      let re = /^[A-za-zА-яа-я]{5,30}$/g;
      this.errors.position = re.test(position) ? false : true;
    },
    validEmail(email) {
      let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
      this.errors.email = re.test(email) ? false : true;
    },
    validPhone(phone) {
      let re = /^(\+380|380|0){1}([0-9]{2}){1}([0-9]{7}){1}$/;
      this.errors.phone = re.test(phone) ? false : true;
    },
  },
};
</script>

<style lang="sass" scoped>
.staff-form
  width: 25%
  max-height: 800px
  margin-right: 5%
  position: sticky
  top: 2rem
</style>