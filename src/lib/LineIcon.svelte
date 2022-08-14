<script lang="ts">
  export let title: string;
  export let href: string;
</script>

<a {title} {href}>
  <slot />
</a>
