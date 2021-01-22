<template>
  <div class="slot pl-3 border p-3 rounded rounded">
    <form class="form row" @submit.prevent="" novalidate>
      <div class="form-group col-12  col-md-4">
        <input
          type="email"
          class="form-control rounded
          "
          placeholder="Email"
          v-model="email"
        />
      </div>

      <div class="form-group col-12 col-md-4">
        <input
          type="password"
          class="form-control rounded"
          placeholder="Password"
          v-model="password"
        />
      </div>

      <div class="form-group col-12 col-md-4">
        <base-button
          type="submit"
          class="form-control rounded"
          @click="signUp()"
        >
          SIGNUP / LOGIN
        </base-button>
      </div>
    </form>

    <p v-if="!formIsValid" class="warning mt-3">
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
