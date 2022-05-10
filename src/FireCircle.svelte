<script lang="ts">
    export let value: number;
    export let step: number;

    $: width = value * 0.05;
    $: times = value / step;
    $: shadowString = [...Array(times).keys()]
        .map(function (i) {
            return `0 0 ${i * 10}px red`;
        })
        .join(", ");
</script>

<div class="w-48 h-48 rounded-full border-2 border-gray-500 flex items-center justify-center">
    {#if value}
        <div class="bg-transparent opacity-50" style="width: {width}px; height: {width}px;">
            <section style="box-shadow: {shadowString}" class="animate animate-pulse w-full h-full rounded-full  transform transition-transform duration-500" />
        </div>
    {/if}
</div>

<style>
    section {
        background: rgba(255, 0, 0);
        /* box-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red, 0 0 40px red, 0 0 250px red, 0 0 300px red; */
    }
</style>
