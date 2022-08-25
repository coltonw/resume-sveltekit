<script lang="ts">
  import IconLine from '../IconLine.svelte';
  import LineDate from '../LineDate.svelte';
  import LineIcon from '../LineIcon.svelte';
  import SubHeading from '../SubHeading.svelte';
  import SubHeadingTitle from '../SubHeadingTitle.svelte';
  import Golang from '../svgs/Golang.svelte';
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
