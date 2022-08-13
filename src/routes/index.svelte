<script context="module" lang="ts">
  import Intro from '$lib/sections/Intro.svelte';
  import VotingIntro from '$lib/sections/VotingIntro.svelte';
  import Golang from '$lib/sections/Golang.svelte';
  import Outro from '$lib/sections/Outro.svelte';

  export const prerender = true;
</script>

<Intro />
<VotingIntro />
<Golang />
<Outro />
