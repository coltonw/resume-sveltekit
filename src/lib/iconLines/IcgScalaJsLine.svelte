<script lang="ts">
  import IconLine from '../IconLine.svelte';
  import LineDate from '../LineDate.svelte';
  import LineIcon from '../LineIcon.svelte';
  import SubHeading from '../SubHeading.svelte';
  import SubHeadingTitle from '../SubHeadingTitle.svelte';
  import ScalaJs from '../svgs/ScalaJs.svelte';
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
