<script lang="ts">
    export let type = "button";
</script>

<button {type}>
    <slot />
</button>

<style>
    button {
        padding: 1rem 4rem;
    }
</style>
