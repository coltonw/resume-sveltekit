<script lang="ts">
  export let href: string | undefined = undefined;
</script>

<a {href} class="text-stone-600 font-bold hover:underline cursor-pointer">
  <slot />
</a>
