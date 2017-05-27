<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
        <p>Age: {{ userAge }}</p>
        <button @click="resetName">Reset name</button>
        <button @click="resetFn()">Reset name</button>
    </div>
</template>

<script>
import { eventBus } from '../main';

    export default {
        props: {
            name: {
                type: String
            },
            userAge: {
                type: Number
            },
            resetFn: Function
        },
        methods: {
            resetName() {
                this.name = 'Max';
                this.$emit('nameWasReset', this.name);
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (data) => {
                this.userAge = data;
            });

        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
