<script lang="ts">
  import SectionHeading from '../SectionHeading.svelte';
  import Paragraph from '../Paragraph.svelte';
  import Link from '../Link.svelte';
  import MuseumLine from '../iconLines/MuseumLine.svelte';
</script>

<SectionHeading>The museum is its own exhibit</SectionHeading>
  <MuseumLine />
  <Paragraph>
    Last, but certainly not least, I want to discuss the very site you are on
    right now. The intention is to have several implementations in different
    UI frameworks both as a quick way to learn a bunch of technologies and as
    a demonstration of their performance against each other on a simple two
    page website.
  </Paragraph>
  <Paragraph>
    This museum implementation is built using Deno Fresh. For styling it uses{" "}
    <Link href="https://twind.dev/">Twind</Link> which is a tailwind-in-js
    solution which came with the Deno Fresh starting template.
  </Paragraph>