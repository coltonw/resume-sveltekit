<script lang="ts">
  import SectionHeading from '$lib/SectionHeading.svelte';
  import Paragraph from '$lib/Paragraph.svelte';
  import Link from '$lib/Link.svelte';
  import SensorsAreDownLine from '$lib/iconLines/SensorsAreDownLine.svelte';
</script>

<SectionHeading>Gaming Side Projects</SectionHeading>
<SensorsAreDownLine />
<Paragraph>
  I have always loved designing and programming video games, but the problem is
  that video games have a lot of art and I do not enjoy making art.
</Paragraph>
<Paragraph>
  Enter Alexa. I could make an audio only game! I decided to create an Alexa
  space combat game (
  <Link href="https://github.com/coltonw/sensors-are-down">source</Link>; never
  published).
</Paragraph>
<Paragraph>
  In the end, I created something that just wasn't very fun. I fell into the
  trap of making a system too complex considering you cannot see the current
  state. I think I had some good ideas and I have follow-up ideas for redesigns
  but I shelved the game for now.
</Paragraph>
<audio src="/sensorsaredown.mp3" controls class="w-full" />
<div class="text-xs text-center">Sorry for poor audio quality</div>
<Paragraph>
  This project involved mostly learning various AWS technologies that go into
  making an Alexa skill. I used an AWS Lambda which I deployed to using the
  Serverless Framework. I also tried typed JavaScript for the first time but
  picked a losing horse and used flow-typed.
</Paragraph>
