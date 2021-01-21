<template>
  <div class="login p-0 pt-5">
    <form
      class="form row  border border-info p-5 rounded"
      @submit.prevent=""
      novalidate
    >
      <div class="form-group sm-col-6 md-col-4  p-0 mb-0">
        <input
          type="email"
          class="form-control"
          placeholder="Email"
          v-model="email"
        />
      </div>

      <div class="form-group sm-col-6 md-col-4 p-0 mb-0">
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="password"
        />
      </div>

      <base-button type="submit" class="sm-col-12 md-col-4" @click="signUp()">
        SIGNUP / LOGIN
      </base-button>
    </form>

    <p v-if="!formIsValid" class="warning mt-3 p-1">
      Kérlek adj meg egy felhasználónevet, érvényes e-mail címet és egy legalább
      8 karakter hosszúságú jelszót!
    </p>
  </div>
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
    signUp() {
      if (
        this.name === "" ||
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 8
      ) {
        this.formIsValid = false;
        return;
      } else {
        console.log(this.password.length);

        this.$store.dispatch("registerUser", {
          email: this.email,
          password: this.password,
          name: this.name,
        });
        this.$router.push("/Home");
      }
    },
  },
};
</script>
