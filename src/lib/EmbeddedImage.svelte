<script lang="ts">
  // TODO: Look up Sveltekit images
  export let src: string;
  export let alt: string;
  export let width: number;
  export let height: number;
</script>

<img {src} class="border-2 border-stone-200 my-6" {alt} {width} {height} />
