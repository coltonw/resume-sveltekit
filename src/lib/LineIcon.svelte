<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    title,
    href,
    children,
  }: { title: string; href: string; children?: Snippet } = $props();
</script>

<a {title} {href}>
  {@render children?.()}
</a>
