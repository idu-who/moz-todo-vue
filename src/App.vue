<template>
    <div id="app">
        <text-input label="Enter your name: "></text-input>
        <h1>To-Do List</h1>
        <text-input label="Create task: "></text-input>
        <ul>
            <li>
                <to-do-item label="Make custom component" :done="true"></to-do-item>
                <to-do-item label="Get a life"></to-do-item>
            </li>
        </ul>
    </div>
</template>

<script>
import ToDoItem from "./components/ToDoItem.vue";
import TextInput from "./components/TextInput.vue";

export default {
    name: "App",
    components: {
        ToDoItem,
        TextInput,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
