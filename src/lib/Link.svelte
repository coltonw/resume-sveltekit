<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    href = undefined,
    children,
  }: { href?: string; children?: Snippet } = $props();
</script>

<a {href} class="text-stone-600 font-bold hover:underline cursor-pointer">
  {@render children?.()}
</a>
