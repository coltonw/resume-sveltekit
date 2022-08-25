<script lang="ts">
  import IconLine from '../IconLine.svelte';
  import LineDate from '../LineDate.svelte';
  import LineIcon from '../LineIcon.svelte';
  import SubHeading from '../SubHeading.svelte';
  import SubHeadingTitle from '../SubHeadingTitle.svelte';
  import Tailwindcss from '../svgs/TailwindCss.svelte';
  import { iconClassName } from './util';
</script>

<SubHeading>
  <SubHeadingTitle>Deno Fresh</SubHeadingTitle>
  <IconLine>
    <LineDate>2020-2022</LineDate>
    <!-- <LineIcon title="Deno" href="https://deno.land/">
      <Deno class={iconClassName} />
    </LineIcon>
    <LineIcon title="Fresh" href="https://fresh.deno.dev/">
      <Fresh class={iconClassName} />
    </LineIcon> -->
    <LineIcon title="Tailwind CSS" href="https://tailwindcss.com/">
      <Tailwindcss class={`${iconClassName} text-sky-400`} />
    </LineIcon>
  </IconLine>
</SubHeading>
