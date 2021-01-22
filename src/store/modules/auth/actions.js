import { auth } from "@/firebase";

export default {
  async registerUser(contex, payload) {
    try {
      await auth.createUserWithEmailAndPassword(
        payload.email,
        payload.password
      );
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + ": " + errorMessage);
    }
  },

  async login(contex, user) {
    try {
      const response = await auth.signInWithEmailAndPassword(
        user.email,
        user.password
      );
      contex.commit("setUser", {
        isLoggedIn: true,
        user: response.user,
      });
    } catch (error) {
      console.log(error.code + ": " + error.message);
      try {
        await auth.createUserWithEmailAndPassword(user.email, user.password);
        const response = await auth.signInWithEmailAndPassword(
          user.email,
          user.password
        );
        contex.commit("setUser", {
          isLoggedIn: true,
          user: response.user,
        });
      } catch (error) {
        console.log(error.code + ": " + error.message);
      }
    }
  },

  autoLogin(contex) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      contex.commit("setUser", {
        isLoggedIn: true,
        user: user,
      });
    }
  },

  async logout(contex) {
    await auth.signOut();
    contex.commit("clearUser");
    localStorage.removeItem("user");
  },
};
