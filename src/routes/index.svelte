<script context="module" lang="ts">
  import Intro from '$lib/sections/Intro.svelte';
  import Outro from '$lib/sections/Outro.svelte';
  import VotingIntro from '$lib/sections/VotingIntro.svelte';

  export const prerender = true;
</script>

<Intro />
<VotingIntro />
<Outro />
