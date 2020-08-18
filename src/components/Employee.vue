<template>
  <div class="card card__primary">
    <div class="employee">
      <div class="wrap">
        <h3 class="employee_name">{{name}}</h3>
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
                d="M14.9833 5.48122L3.66957 16.7949L3.42466 19.4889C3.36812 20.1109 3.88915 20.6319 4.51109 20.5754L7.2051 20.3304L18.5188 9.01675L14.9833 5.48122Z"
                fill="#2E3A59"
              />
              <path
                d="M19.2259 8.30964L21.3472 6.18831C21.7378 5.79778 21.7378 5.16462 21.3472 4.77409L19.2259 2.65277C18.8354 2.26225 18.2022 2.26225 17.8117 2.65277L15.6904 4.77411L19.2259 8.30964Z"
                fill="#2E3A59"
              />
            </svg>
          </button>
          <button class="employee_delete btn-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="#2E3A59"
              />
            </svg>
          </button>
        </div>
      </div>
      <p class="employee_position">{{position}}</p>
      <p class="employee_contacts">
        <span class="employee_email">{{email}} |</span>
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