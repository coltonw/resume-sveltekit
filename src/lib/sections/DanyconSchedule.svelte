<script lang="ts">
  import Paragraph from '$lib/Paragraph.svelte';
  import Link from '$lib/Link.svelte';
  import EmbeddedVideo from '$lib/EmbeddedVideo.svelte';
  import DanyconScheduleLine from '$lib/iconLines/DanyconScheduleLine.svelte';
</script>

<DanyconScheduleLine />
<Paragraph>
  The most recent family get-together I decided to make a digital schedule. I
  added some functionality where attendees could pick which games they were
  going to join (
  <Link href="https://github.com/coltonw/danycon-schedule/">source</Link>;{' '}
  <Link href="https://danycon-schedule.vercel.app/">site</Link> - use username Will
  and give it a few minutes for vercel to start the server before refreshing and
  logging in).
</Paragraph>
<EmbeddedVideo
  webm="/videos/danyconschedule.webm"
  mp4="/videos/danyconschedule.mp4"
  width={1080}
  height={868}
/>
<Paragraph>
  I had the pleasure of building this site using Next.js and deploying using
  Vercel. It made my life really easy and I definitely want to work with Next.js
  more in the future. For styling I used Bulma and as a database I used AWS
  DynamoDB.
</Paragraph>
