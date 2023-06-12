<template>
    <section class="login grid-center">
        <header class="login-header">
            <h3>Admin</h3>
        </header>
        <div class="login-box">
            <router-link to="/">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-lg"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
                    />
                </svg>
            </router-link>
            <h3>Buy-Tech</h3>
            <form @submit.prevent="loginUser">
                <input type="email" v-model="email" required placeholder="Email" />
                <input type="password" v-model="password" required placeholder="Password" />
                
               
                
                    <action-button>
                        <button-preloader v-if="loggedin" />
                        <span v-else>Login</span>
                    </action-button>
                    <template v-if="loginError1">
                        <p class="weak">
                            {{ loginError1 }}<br>
                            {{ loginError2 }}
                        </p>
                    </template>
                <router-link class="link" to="/forgot-password"
                    >Forgot Password?</router-link>
            </form>
        </div>
    </section>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ButtonPreloader from "@/components/preloaders/ButtonPreloader.vue";
import { mapActions } from "vuex";
import axios from "axios";

export default {
    components: { ActionButton, ButtonPreloader },
    name: "AdminLogin",
    data() {
        return {
            loggedin: false,
            loginError1: "",
            loginError2: "",
        };
    },
    methods: {
        ...mapActions(["set_user"]),
        async loginUser() {
            // Send a POST request
            this.loggedin = true;
            await axios({
                method: "post",
                url: "http://164.92.134.202:8099/api/user/login",
                data: {
                    login: this.email,
                    password: this.password,
                },
            })
                .then((res) => {
                    if (res.status == 200 && res.data.admin==true) {
                        res.data.password="********";
                        console.log(res.data);
                        this.set_user(res.data);
                        this.loggedin = false;
                        this.$router.push("/admin/overview");
                        localStorage.setItem("User", JSON.stringify(res.data));
                    } else {
                        throw res;
                    }
                })
                .catch((err) => {
                    this.loggedin = false;
                    this.loginError1 = "mots de passe ou login incorrect"
                    this.loginError2 = "(Possible vous étez pas admin)";
                });
        },
    },
};
</script>

<style scoped>
.grid-center {
    display: grid;
    place-items: center;
}

.login-header {
    position: absolute;
    top: 0;
    background: var(--dim-blue);
    color: white;
    left: 0;
    right: 0;
    text-align: center;
    padding-block: 10px;
}

.login {
    background-color: var(--grey-2);
    height: 100vh;
}

.login-box {
    text-align: center;
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 50px 30px;
    min-width: 300px;
    margin-inline: auto;
    position: relative;
}

.login-box i {
    font-size: 15px;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
}

.login-box i:hover {
    color: var(--dim-blue);
}

.login-box h3 {
    font-weight: 400;
}

.login-box form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
}

.login-box form button {
    width: 100%;
}
.login-box svg {
    font-size: 15px;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
}

.login-box svg:hover {
    color: var(--dim-blue);
}

.link {
    font-size: 15px;
    color: cornflowerblue;
}

.link:hover {
    color: var(--text);
}

</style>
