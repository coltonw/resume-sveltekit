<script lang="ts">
  import SectionHeading from '$lib/SectionHeading.svelte';
  import Paragraph from '$lib/Paragraph.svelte';
  import Link from '$lib/Link.svelte';
  import MuseumLine from '$lib/iconLines/MuseumLine.svelte';
</script>

<SectionHeading>The museum is its own exhibit</SectionHeading>
<MuseumLine />
<Paragraph>
  Last, but certainly not least, I want to discuss the very site you are on
  right now. The intention is to have several implementations in different UI
  frameworks both as a quick way to learn a bunch of technologies and as a
  demonstration of their performance against each other on a simple two page
  website.
</Paragraph>
<Paragraph>
  This museum implementation is built using Sveltekit. For styling it uses
  TailwindCSS. It is deployed using Cloudflare Pages.
</Paragraph>
