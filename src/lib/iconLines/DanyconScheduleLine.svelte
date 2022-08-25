<script lang="ts">
  import IconLine from '../IconLine.svelte';
  import LineDate from '../LineDate.svelte';
  import LineIcon from '../LineIcon.svelte';
  import SubHeading from '../SubHeading.svelte';
  import SubHeadingTitle from '../SubHeadingTitle.svelte';
  import NextJs from '../svgs/NextJs.svelte';
  import Vercel from '../svgs/Vercel.svelte';
  import Bulma from '../svgs/Bulma.svelte';
  import Aws from '../svgs/Aws.svelte';
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
