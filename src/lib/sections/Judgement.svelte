<script lang="ts">
  import SectionHeading from '$lib/SectionHeading.svelte';
  import Paragraph from '$lib/Paragraph.svelte';
  import Link from '$lib/Link.svelte';
  import EmbeddedVideo from '$lib/EmbeddedVideo.svelte';
  import JudgementLine from '$lib/iconLines/JudgementLine.svelte';
</script>

<SectionHeading>A Triumphant Return to Voting</SectionHeading>
<JudgementLine />
<Paragraph>
  After a long hiatus, I decided to go back to the drawing board with voting. I
  had been reading about this new interesting voting method known as
  <Link href="https://en.wikipedia.org/wiki/Majority_judgment">
    Majority Judgement
  </Link>. I implemented a modernized board game night voting site (<Link
    href="https://github.com/coltonw/majudge">source</Link
  >; site no longer deployed).
</Paragraph>
<EmbeddedVideo
  webm={'/videos/judgement.webm'}
  mp4={'/videos/judgement.mp4'}
  width={1030}
  height={810}
/>
<Paragraph>
  After learning a lot of frontend work in my day job, this project became
  focused on learning more backend and devops. I used Elixir's Phoenix Framework
  for the backend and deployed it using CircleCI and Amazon ECS. The frontend
  was React using nivo for charts, Bulma for CSS, and webpack for bundling.
</Paragraph>
