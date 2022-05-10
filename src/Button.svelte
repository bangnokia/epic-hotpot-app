<script lang="ts">
    export let type = "button";
</script>

<button {type} class="px-14 py-2 text-5xl bg-transparent border-0 rounded text-white transition-all active:bg-gray-800 active:text-red-500" on:click>
    <slot />
</button>
