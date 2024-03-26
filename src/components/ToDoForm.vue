<template>
    <form @submit.prevent="onSubmit">
        <label for="new-todo-input"> What needs to be done? </label>
        <input type="text" id="new-todo-input" name="new-todo" autocomplete="off" v-model.lazy.trim="label" />
        <button type="submit">Add</button>
    </form>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            label: "",
        };
    },
    methods: {
        onSubmit(event) {
            if (this.label === "") {
                return;
            }
            this.$emit("todo-added", this.label);
            this.label = "";
            // manually clearing input
            let newToDoInput = event.target.querySelector("#new-todo-input");
            if (newToDoInput) {
                newToDoInput.value = "";
            }
        },
    },
};
</script>
