<script lang="ts">
  import SectionHeading from '$lib/SectionHeading.svelte';
  import RevonarchyLine from '$lib/iconLines/RevonarchyLine.svelte';
  import Paragraph from '$lib/Paragraph.svelte';
  import Link from '$lib/Link.svelte';
  import EmbeddedVideo from '$lib/EmbeddedVideo.svelte';
</script>

<SectionHeading>No More Voting!</SectionHeading>
<RevonarchyLine />
<Paragraph>
  I got tired of my favorite games never getting picked, so I decided to move
  away from voting to let people just pick a game and then rotate who picks the
  game each time. The problem that quickly showed up was that some people would
  only show up rarely and yet got to pick just as often, Thus Revonarchy was
  born. (
  <Link href="https://github.com/coltonw/revonarchy">Source</Link>; site was
  never deployed)
</Paragraph>
<EmbeddedVideo
  webm={'/videos/revonarchy.webm'}
  mp4={'/videos/revonarchy.mp4'}
  width={922}
  height={580}
/>
<Paragraph>
  Revonarchy was relatively short lived but I still learned some great stuff
  including Bower, Koa, Less, Gulp, Ramda, and most importantly React.
</Paragraph>
