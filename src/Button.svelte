<script lang="ts">
    import { longpress } from "./actions";

    export let type = "button";
</script>

<button {type}
    class="px-14 py-2 text-5xl bg-transparent border-0 rounded text-white transition-all active:bg-gray-800 active:text-red-500"
    use:longpress
    on:longpress
    on:longpresscancel
    on:click>
    <slot />
</button>
