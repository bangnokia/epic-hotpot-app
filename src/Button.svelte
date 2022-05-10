<script lang="ts">
    export let type = "button";
</script>

<button {type} on:click>
    <slot />
</button>

<style>
    button {
        padding: 1rem 4rem;
    }
</style>
