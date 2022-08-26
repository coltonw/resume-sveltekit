<script lang="ts">
  export let src: string;
  export let fallback: string;
  export let alt: string;
  export let width: number;
  export let height: number;
</script>

<picture>
  <source srcset={src} />
  <img
    src={fallback}
    class="border-2 border-stone-200 my-6"
    {alt}
    {width}
    {height}
  />
</picture>
