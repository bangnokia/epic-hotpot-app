<script lang="ts">
    import Button from "./Button.svelte";
    import FireCircle from "./FireCircle.svelte";

    let temp = 0;
    let step = 100;

    function down() {
        temp = temp >= step ? temp - step : temp;
    }
    function up() {
        temp += step;
    }

    function handleDown() {
        down();
    }

    function handleUp() {
        up();
    }

    let pressingUp;
    let pressingUpInterval;
    $: {
        clearInterval(pressingUpInterval);
        if (pressingUp) {
            pressingUpInterval = setInterval(up, 100);
        }
    }

    let pressingDown;
    let pressingDownInterval;
    $: {
        clearInterval(pressingDownInterval);
        if (pressingDown) {
            pressingDownInterval = setInterval(down, 100);
        }
    }
</script>

<main class="font-mono w-full h-screen flex flex-col justify-around bg-gray-900 select-none">
    <div class="h-1/3 shrink-0 grow-0 pt-10 w-250px h-250px flex items-center justify-center mx-auto">
        <FireCircle value={temp} {step} />
    </div>
    <div class="flex items-center justify-center">
        <div class="text-7xl font-digital font-bold text-center tabular-nums">
            {#if temp > 0}
                <span class="text-red-500">{temp}</span>
            {:else}
                <span class="text-white">--</span>
            {/if}
        </div>
    </div>
    <div class="pb-10 flex items-center justify-center gap-5">
        <Button on:click={handleDown} on:longpress={() => (pressingDown = true)} on:longpresscancel={(e) => (pressingDown = false)}>-</Button>
        <Button on:click={handleUp} on:longpress={() => (pressingUp = true)} on:longpresscancel={(e) => (pressingUp = false)}>+</Button>
    </div>
</main>
