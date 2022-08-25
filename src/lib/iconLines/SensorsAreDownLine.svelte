<script lang="ts">
  import IconLine from '$lib/IconLine.svelte';
  import LineDate from '$lib/LineDate.svelte';
  import LineIcon from '$lib/LineIcon.svelte';
  import SubHeading from '$lib/SubHeading.svelte';
  import SubHeadingTitle from '$lib/SubHeadingTitle.svelte';
  import Alexa from '$lib/svgs/Alexa.svelte';
  import Aws from '$lib/svgs/Aws.svelte';
  import Serverless from '$lib/svgs/Serverless.svelte';
  import Flow from '$lib/svgs/Flow.svelte';
  import { iconClassName } from './util';
</script>

<SubHeading>
  <SubHeadingTitle>Sensors Are Down</SubHeadingTitle>
  <IconLine>
    <LineDate>2017</LineDate>
    <LineIcon
      title="Amazon Alexa"
      href="https://www.developer.amazon.com/en-US/alexa/"
    >
      <Alexa class={iconClassName} />
    </LineIcon>
    <LineIcon title="Amazon Web Services" href="https://aws.amazon.com/">
      <Aws class={iconClassName} />
    </LineIcon>
    <LineIcon title="Serverless Framework" href="https://www.serverless.com/">
      <Serverless class={iconClassName} />
    </LineIcon>
    <LineIcon title="Flow" href="https://flow.org/">
      <Flow class={iconClassName} />
    </LineIcon>
  </IconLine>
</SubHeading>
