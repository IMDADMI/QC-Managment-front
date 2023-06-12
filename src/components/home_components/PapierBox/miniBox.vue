<template>
    <div class="minibox">
        <slot></slot>
        <p><strong>{{ name }}</strong></p>
    </div>
</template>

<script>
import { booleanLiteral } from '@babel/types';

export default {
    name: "minibox",
    props: {
        name: String,
        
    },
};
</script>

<style scoped>
.minibox {
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 5px;
    border: 1px solid var(--grey);
    padding: 10px 25px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.05s ease-in;
    width: 15em;
}

.minibox:hover {
    transform: scale(1.02);
}
.minibox:active {
    background-color:var(--dim-blue);
    border-color:var(--dim-blue);
}
.minibox slot{




}




@media (max-width: 387px) {
    .minibox {
        width: 70%;
        text-align: center;
    }

    .minibox .image {
        margin-inline: auto;
        margin-top:20em
    }
}
</style>
