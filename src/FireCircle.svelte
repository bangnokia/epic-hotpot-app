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

<div class="w-48 h-48 rounded-full border-2 border-white/10 flex items-center justify-center">
    {#if value}
        <div class="bg-transparent opacity-50" style="width: {width}px; height: {width}px; max-width: 169px; max-height: 169px;">
            <section style="box-shadow: {shadowString}; background: red" class="animate animate-pulse w-full h-full rounded-full transform transition transition-all duration-500" />
        </div>
    {/if}
</div>
