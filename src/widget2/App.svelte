<script lang="ts">
    import { onMount } from "svelte";
    import { initApp } from "../lib/util";
    import AgentCheckList from "../containers/AgentCheckList/AgentCheckList.svelte";

    onMount(async () => {
        await initApp();
    });
</script>

<main>
    <AgentCheckList/>
</main>
