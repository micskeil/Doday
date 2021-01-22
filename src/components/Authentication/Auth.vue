<template>
  <form class="form row m-1" @submit.prevent="" novalidate>
    <div class="form-group col-12 col-md-4 m-0 p-1">
      <input
        type="email"
        class="form-control rounded m-0
          "
        placeholder="Email"
        v-model="email"
      />
    </div>

    <div class="form-group col-12 col-md-4 m-0 p-1">
      <input
        type="password"
        class="form-control rounded m-0"
        placeholder="Password"
        v-model="password"
      />
    </div>

    <div class="form-group col-12 col-md-4 m-0 p-1">
      <base-button
        type="submit"
        class="form-control rounded m-0"
        @click="login"
      >
        SIGNUP / LOGIN
      </base-button>
    </div>
  </form>

  <p v-if="!formIsValid" class="warning text-center p-3">
    Please add your correct e-mail address and password (minimum 6 character)!
  </p>
</template>

<script>
export default {
  data() {
    return {
      formIsValid: true,
      name: "",
      email: "",
      password: "",
    };
  },

  methods: {
    login() {
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      } else {
        this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
      }
    },
  },
};
</script>

<style scoped>
.slot {
  background-color: white;
}
.form {
}

.rounded {
  border-radius: 20px !important;
}
</style>
