<script lang="ts">
  import type { Snippet } from 'svelte';
  import Header from '$lib/header/Header.svelte';
  import '../app.css';

  let { children }: { children?: Snippet } = $props();
</script>

<svelte:head>
  <title>Will Colton's Side Project Museum</title>
  <meta
    name="description"
    content="Will Colton's digital museum of side projects"
  />
</svelte:head>

<main class="mx-auto max-w-screen-md p-2 font-sans text-lg">
  <Header />
  {@render children?.()}
</main>
