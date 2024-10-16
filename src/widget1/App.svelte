<script lang="ts">
    import { onMount } from "svelte";
    import { initApp } from "../lib/util";
    import CheckListForm from "../containers/CheckListForm/CheckListForm.svelte";
    import commonStyle from '../common/common.module.css';

    onMount(async() => {
        await initApp();
    });
</script>

<main class="cover">
    <CheckListForm/>
</main>

<style>
    :global(#app){
        height: 100vh;
    }
</style>
