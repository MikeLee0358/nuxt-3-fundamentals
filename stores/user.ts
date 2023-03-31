import { defineStore, acceptHMRUpdate } from "pinia";
export const useUser = defineStore("user", {
  state: () => {
    return {
      isLogin: false,
    };
  },
  getters: {},
  actions: {
    login() {
      this.isLogin = true;
      useRouter().push("/");
    },
  },
});

// make sure to pass the right store definition, `useUser` in this case.
// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot));
// }
