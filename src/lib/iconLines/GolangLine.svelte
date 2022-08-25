<script lang="ts">
  import IconLine from '$lib/IconLine.svelte';
  import LineDate from '$lib/LineDate.svelte';
  import LineIcon from '$lib/LineIcon.svelte';
  import SubHeading from '$lib/SubHeading.svelte';
  import SubHeadingTitle from '$lib/SubHeadingTitle.svelte';
  import Golang from '$lib/svgs/Golang.svelte';
  import { iconClassName } from './util';
</script>

<SubHeading>
  <SubHeadingTitle>Go Vote Tally</SubHeadingTitle>
  <IconLine>
    <LineDate>2013-2014</LineDate>
    <LineIcon title="Go" href="https://go.dev/">
      <Golang class={iconClassName} />
    </LineIcon>
  </IconLine>
</SubHeading>
