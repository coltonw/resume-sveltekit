<script lang="ts">
  import Header from '$lib/header/Header.svelte';
  import '../app.css';
</script>

<svelte:head>
  <title>Will Colton's Side Project Museum</title>
  <meta
    name="description"
    content="Will Colton's digital museum of side projects"
  />
</svelte:head>

<div class="mx-auto max-w-screen-md p-2 font-sans text-lg">
  <Header />
  <slot />
</div>
