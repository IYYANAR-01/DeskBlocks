<script lang="ts">
    import { onMount, setContext } from "svelte";
    import { Button } from "deskblocks";
    import { initApp } from "../lib/util";
    import CheckListForm from "../containers/CheckListForm/CheckListForm.svelte";
    import commonStyle from '../common/common.module.css';

    let App;
    setContext("App", App);

    onMount(async() => {
        App = await initApp();
    });
</script>

<main class="cover">
    <CheckListForm/>
</main>

<style>
    :global(#app){
        height: 100%;
    }
</style>
