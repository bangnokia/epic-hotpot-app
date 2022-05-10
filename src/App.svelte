<script lang="ts">
    import Button from "./Button.svelte";
    import FireCircle from "./FireCircle.svelte";
    import { fade } from "svelte/transition";

    let temp = 0;
    let step = 100;

    function down() {
        temp -= step;
    }
    function up() {
        temp += step;
    }
</script>

<main class="font-mono w-full h-screen flex flex-col justify-around bg-gray-900">
    <div class="h-1/3 shrink-0 grow-0 pt-10 w-250px h-250px flex items-center justify-center mx-auto">
        <FireCircle value={temp} {step} />
    </div>
    <div class="flex items-center justify-center">
        <div class="text-7xl font-bold text-center lining-nums">
            {#if temp > 0}
                <span class="text-red-500" transition:fade>{temp}</span>
            {:else}
                <span class="text-white">--</span>
            {/if}
        </div>
    </div>
    <div class="pb-10 flex items-center justify-center gap-5">
        <Button on:click={down}>-</Button>
        <Button on:click={up}>+</Button>
    </div>
</main>
