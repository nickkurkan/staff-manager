<template>
  <div class="card card__primary">
    <div class="employee">
      <div class="wrap">
        <h2 class="employee_name">{{name}}</h2>
        <div class="employee_actions">
          <button class="employee_edit btn-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21 20C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21C2 20.4477 2.44772 20 3 20H21ZM6.29289 13.2929L17.2929 2.29289C17.6534 1.93241 18.2206 1.90468 18.6129 2.2097L18.7071 2.29289L21.7071 5.29289C22.0676 5.65338 22.0953 6.22061 21.7903 6.6129L21.7071 6.70711L10.7071 17.7071C10.5508 17.8634 10.3481 17.9626 10.1314 17.9913L10 18H7C6.48716 18 6.06449 17.614 6.00673 17.1166L6 17V14C6 13.779 6.07316 13.5655 6.20608 13.392L6.29289 13.2929L17.2929 2.29289L6.29289 13.2929ZM18 4.41421L8 14.4142V16H9.58579L19.5858 6L18 4.41421Z"
                fill="black"
              />
            </svg>
          </button>
          <button class="employee_delete btn-icon" @click="deleteThisEmployee">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17 8C17.5523 8 18 8.44772 18 9V19C18 20.6569 16.6569 22 15 22H9C7.34315 22 6 20.6569 6 19V9C6 8.44772 6.44772 8 7 8H17ZM16 10H8V19C8 19.5523 8.44772 20 9 20H15C15.5523 20 16 19.5523 16 19V10ZM9 3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3V4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H5C4.44772 6 4 5.55228 4 5C4 4.44772 4.44772 4 5 4H9V3Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
      <p class="employee_position">{{position}}</p>
      <p class="employee_contacts">{{email}} | {{phone}}</p>
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
    id: Number,
  },
  methods: {
    deleteThisEmployee() {
      this.$store.dispatch('deleteEmployee', this.id)     
    }
  }
};
</script>

<style lang="sass" scoped>
.card
  &__primary
    margin-bottom: 1rem
    &:last-of-type
      margin-bottom: 0

.employee
  .wrap
    display: flex
    justify-content: space-between
    align-items: flex-start
  &_edit
    margin-right: 1rem
  &_contacts
    margin-bottom: 0
</style>