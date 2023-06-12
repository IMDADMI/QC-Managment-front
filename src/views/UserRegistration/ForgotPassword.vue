<template>
    <section class="forgot grid-center">
        <div class="forgot-box">
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
            <form>
                <input type="email" required placeholder="Email" />

                <action-button btnvalue="Récupérer mot de passe" />
                <router-link class="link" to="/login">Login</router-link>
            </form>
        </div>
    </section>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
export default {
    components: { ActionButton },
    name: "ForgotPassword",
};
</script>

<style>
.grid-center {
    display: grid;
    place-items: center;
}

.forgot {
    background-color: var(--grey-2);
    height: 100vh;
}

.forgot-box {
    text-align: center;
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 30px 30px;
    min-width: 320px;
    margin-inline: auto;
    position: relative;
}

.forgot-box svg {
    font-size: 15px;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
}

.forgot-box i:hover {
    color: var(--dim-blue);
}

.forgot-box h3 {
    font-weight: 400;
}

.forgot-box form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
}

.link {
    font-size: 15px;
    color: cornflowerblue;
}

.link:hover {
    color: var(--text);
}
</style>
