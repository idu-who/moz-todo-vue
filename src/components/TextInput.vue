<template>
    <div>
        <label :for="id">{{ label }}</label>
        <input type="text" :id :value="value" />
    </div>
</template>

<script>
let uniqueId = 0; // shared across all TextInput components

export default {
    props: {
        label: { required: true, type: String },
        value: { default: "", type: String },
    },
    data() {
        return {
            id: null,
        };
    },
    mounted() {
        this.id = "textinput-" + uniqueId;
        uniqueId++;
    },
};
</script>
