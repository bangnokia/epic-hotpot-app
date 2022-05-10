<script lang="ts">
    import Button from "./Button.svelte";
    import FireCircle from "./FireCircle.svelte";
</script>

<main class="w-full h-screen flex flex-col justify-between">
    <div class="pt-10 w-250px h-250px flex items-center justify-center mx-auto">
        <FireCircle />
    </div>
    <div class="pb-10 flex items-center justify-center gap-5">
        <Button>-</Button>
        <Button>+</Button>
    </div>
</main>
