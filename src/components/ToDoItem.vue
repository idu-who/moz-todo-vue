<template>
    <div>
        <input type="checkbox" :id="id" :checked="done" />
        <label :for="id">{{ label }} {{ id }}</label>
    </div>
</template>

<script>
import uniqueId from "lodash.uniqueid";

export default {
    props: {
        label: { required: true, type: String },
        done: { default: false, type: Boolean },
    },
    data() {
        return {
            id: uniqueId("todo-"),
        };
    },
};
</script>

<style></style>
