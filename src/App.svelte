<script lang="ts">
    import Button from "./Button.svelte";
    import FireCircle from "./FireCircle.svelte";

    let temp = 0;
    let step = 100;

    function down() {
        temp -= step;
    }
    function up() {
        temp += step;
    }
</script>

<main class="w-full h-screen flex flex-col justify-between bg-gray-900">
    <div class="pt-10 w-250px h-250px flex items-center justify-center mx-auto">
        <FireCircle value={temp} {step} />
    </div>
    <div class="flex items-center justify-center">
        <strong class="text-7xl font-bold text-rose-500 text-center lining-nums">
            {temp}
        </strong>
    </div>
    <div class="pb-10 flex items-center justify-center gap-5">
        <Button on:click={down}>-</Button>
        <Button on:click={up}>+</Button>
    </div>
</main>
