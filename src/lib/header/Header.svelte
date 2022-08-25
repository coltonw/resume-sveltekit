<script lang="ts">
  import Wkc from '$lib/svgs/Wkc.svelte';
  import Github from '$lib/svgs/Github.svelte';
</script>

<header class="mb-12 flex items-center justify-between px-4 py-3 text-base">
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
    <!-- <a
      href="https://cra.willcolton.com/"
      class="block px-2 py-1 text-stone-600 font-semibold rounded hover:text-stone-700"
    >
      CRA
    </a>
    <a
      href="https://fresh.willcolton.com"
      class="mt-1 block px-2 py-1 text-stone-600 font-semibold rounded hover:text-stone-700 sm:mt-0 sm:ml-2"
    >
      Deno Fresh
    </a>
    <a
      href="https://svelte.willcolton.com"
      class="block px-2 py-1 text-stone-600 font-semibold rounded hover:text-stone-700"
    >
      Svelte
    </a> -->
    <a
      href="https://github.com/coltonw"
      class="block px-2 py-1 text-stone-600 rounded hover:text-stone-700"
      aria-label="Github"
    >
      <Github class="h-6 w-6" />
    </a>
  </nav>
</header>
