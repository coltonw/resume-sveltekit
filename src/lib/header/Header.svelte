<script lang="ts">
  import Wkc from '$lib/svgs/Wkc.svelte';
  import Github from '$lib/svgs/Github.svelte';
</script>

<header class="flex items-center justify-between px-4 py-3 text-base">
  <div class="flex items-center justify-between p-0">
    <div>
      <a href="/">
        <Wkc class="w-8 h-8 inline align-middle" />
        <span
          class="align-middle hidden sm:inline pl-2 text-l font-black text-blue-gray-400"
        >
          Will Colton's Side Project Museum
        </span>
      </a>
    </div>
  </div>
  <nav class="flex p-0">
    <a
      href="https://github.com/coltonw"
      class="block px-2 py-1 text-stone-600 rounded hover:text-stone-700"
      aria-label="Github"
    >
      <Github class="h-6 w-6" />
    </a>
  </nav>
</header>
<header
  class="mb-12 flex items-center justify-start px-4 text-base border-b-2 border-stone-200"
>
  <div class="hidden sm:block px-2 py-1 text-stone-800">Implementations:</div>
  <a
    href="https://cra.willcolton.com/"
    class="block px-2 py-1 text-stone-600 font-semibold hover:text-stone-700"
  >
    CRA
  </a>
  <a
    href="https://fresh.willcolton.com"
    class="block px-2 py-1 text-stone-600 font-semibold hover:text-stone-700"
  >
    Deno Fresh
  </a>
  <a
    href="https://svelte.willcolton.com"
    class="block -mb-[2px] px-2 pt-1 pb-[2px] text-stone-600 font-bold hover:text-stone-700 border-b-4 border-stone-600 hover:border-stone-700"
  >
    Sveltekit
  </a>
</header>
