<script lang="ts">
  import IconLine from '$lib/IconLine.svelte';
  import LineDate from '$lib/LineDate.svelte';
  import LineIcon from '$lib/LineIcon.svelte';
  import SubHeading from '$lib/SubHeading.svelte';
  import SubHeadingTitle from '$lib/SubHeadingTitle.svelte';
  import ScalaJs from '$lib/svgs/ScalaJs.svelte';
  import { iconClassName } from './util';
</script>

<SubHeading>
  <SubHeadingTitle>Scala.js</SubHeadingTitle>
  <IconLine>
    <LineDate>2018</LineDate>
    <LineIcon title="Scala.js" href="https://www.scala-js.org/">
      <ScalaJs class={iconClassName} />
    </LineIcon>
  </IconLine>
</SubHeading>
