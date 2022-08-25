<script lang="ts">
  import IconLine from '$lib/IconLine.svelte';
  import LineDate from '$lib/LineDate.svelte';
  import LineIcon from '$lib/LineIcon.svelte';
  import SubHeading from '$lib/SubHeading.svelte';
  import SubHeadingTitle from '$lib/SubHeadingTitle.svelte';
  import NextJs from '$lib/svgs/NextJs.svelte';
  import Vercel from '$lib/svgs/Vercel.svelte';
  import Bulma from '$lib/svgs/Bulma.svelte';
  import Aws from '$lib/svgs/Aws.svelte';
  import { iconClassName } from './util';
</script>

<SubHeading>
  <SubHeadingTitle>Convention Schedule</SubHeadingTitle>
  <IconLine>
    <LineDate>2022</LineDate>
    <LineIcon title="Next.js" href="https://nextjs.org/">
      <NextJs class={iconClassName} />
    </LineIcon>
    <LineIcon title="Vercel" href="https://vercel.com/home">
      <Vercel class={iconClassName} />
    </LineIcon>
    <LineIcon title="Bulma" href="https://bulma.io/">
      <Bulma class={iconClassName} />
    </LineIcon>
    <LineIcon title="Amazon Web Services" href="https://aws.amazon.com/">
      <Aws class={iconClassName} />
    </LineIcon>
  </IconLine>
</SubHeading>
