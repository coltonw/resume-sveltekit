<script lang="ts">
  let {
    src,
    fallback,
    alt,
    width,
    height,
  }: {
    src: string;
    fallback: string;
    alt: string;
    width: number;
    height: number;
  } = $props();
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
