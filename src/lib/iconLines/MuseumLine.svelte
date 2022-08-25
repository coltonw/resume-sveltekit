<script lang="ts">
  import IconLine from '$lib/IconLine.svelte';
  import LineDate from '$lib/LineDate.svelte';
  import LineIcon from '$lib/LineIcon.svelte';
  import SubHeading from '$lib/SubHeading.svelte';
  import SubHeadingTitle from '$lib/SubHeadingTitle.svelte';
  import Svelte from '$lib/svgs/Svelte.svelte';
  import Cloudflare from '$lib/svgs/Cloudflare.svelte';
  import Tailwindcss from '$lib/svgs/TailwindCss.svelte';
  import { iconClassName } from './util';
</script>

<SubHeading>
  <SubHeadingTitle>Sveltekit</SubHeadingTitle>
  <IconLine>
    <LineDate>2020-2022</LineDate>
    <LineIcon title="Sveltekit" href="https://kit.svelte.dev/">
      <Svelte class={iconClassName} />
    </LineIcon>
    <LineIcon title="Cloudflare Pages" href="https://pages.cloudflare.com/">
      <Cloudflare class={`${iconClassName} text-amber-600`} />
    </LineIcon>
    <LineIcon title="Tailwind CSS" href="https://tailwindcss.com/">
      <Tailwindcss class={`${iconClassName} text-sky-400`} />
    </LineIcon>
  </IconLine>
</SubHeading>
