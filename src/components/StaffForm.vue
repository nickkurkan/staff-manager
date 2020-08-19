<template>
  <div class="staff-form">
    <div class="card">
      <h2>Add employee</h2>
      <form @submit.prevent="addOrEditEmployee" novalidate="true">
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
import { mapState, mapActions } from "vuex";
export default {
  data: () => ({
    errors: {
      name: false,
      position: false,
      email: false,
      phone: false,
    },
  }),
  computed: mapState({
    formMode: "formMode",
    edEmp: "edEmp",
    employeeData() {
      if (this.formMode) {
        return {
          name: "",
          position: "",
          email: "",
          phone: "",
          // name: "Nick K",
          // position: "Cheaf",
          // email: "test@test.com",
          // phone: "380111111111",
        };
      } else {
        return {
          name: this.edEmp.name,
          position: this.edEmp.position,
          email: this.edEmp.email,
          phone: this.edEmp.phone,
        };
      }
    },
  }),
  methods: {
    ...mapActions({
      add: "addEmployee",
      edit: "editEmployee",
      addMode: "addMode",
    }),
    addOrEditEmployee() {
      let action = this.formMode ? this.addEmployee : this.editEmployee;
      action();
    },
    addEmployee() {
      if (this.checkForm()) {
        this.add(this.employeeData);
        this.clearForm();
      }
    },
    editEmployee() {
      if (this.checkForm()) {
        this.edit(this.employeeData);
        this.clearForm();
      }
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
          break;
        } else {
          validPass = true;
        }
      }

      return validPass;
    },
    clearForm() {
      this.employeeData.name = "";
      this.employeeData.position = "";
      this.employeeData.email = "";
      this.employeeData.phone = "";
      this.addMode();
    },
    validName(name) {
      let re = /^(([A-za-zА-яа-я]+[\s]{1}[A-za-zА-яа-я]+))$/g;
      this.errors.name = re.test(name) ? false : true;
    },
    validPosition(position) {
      let re = /^[A-za-zА-яа-я\s]{5,30}$/g;
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