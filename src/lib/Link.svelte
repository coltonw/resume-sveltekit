<script lang="ts">
  export let href: string | undefined = undefined;
  export let onClick: (() => void) | undefined = undefined;
</script>

<a
  {href}
  {onClick}
  class="text-stone-600 font-bold hover:underline cursor-pointer"
>
  <slot />
</a>
