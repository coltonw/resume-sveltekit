<script context="module" lang="ts">
  import Intro from '$lib/sections/Intro.svelte';
  import VotingIntro from '$lib/sections/VotingIntro.svelte';
  import Golang from '$lib/sections/Golang.svelte';
  import BGV from '$lib/sections/BGV.svelte';
  import Revonarchy from '$lib/sections/Revonarchy.svelte';
  import Judgement from '$lib/sections/Judgement.svelte';
  import SensorsAreDown from '$lib/sections/SensorsAreDown.svelte';
  import ICG from '$lib/sections/ICG.svelte';
  import BoatsAndBridges from '$lib/sections/BoatsAndBridges.svelte';
  import PuzzleSync from '$lib/sections/PuzzleSync.svelte';
  import DanyconSchedule from '$lib/sections/DanyconSchedule.svelte';
  import Museum from '$lib/sections/Museum.svelte';
  import Outro from '$lib/sections/Outro.svelte';

  export const prerender = true;
</script>

<Intro />
<VotingIntro />
<Golang />
<BGV />
<Revonarchy />
<Judgement />
<SensorsAreDown />
<ICG />
<BoatsAndBridges />
<PuzzleSync />
<DanyconSchedule />
<Museum />
<Outro />
