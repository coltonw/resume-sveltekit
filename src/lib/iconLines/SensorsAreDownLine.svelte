<script lang="ts">
  import IconLine from '../IconLine.svelte';
  import LineDate from '../LineDate.svelte';
  import LineIcon from '../LineIcon.svelte';
  import SubHeading from '../SubHeading.svelte';
  import SubHeadingTitle from '../SubHeadingTitle.svelte';
  import Alexa from '../svgs/Alexa.svelte';
  import Aws from '../svgs/Aws.svelte';
  import Serverless from '../svgs/Serverless.svelte';
  import Flow from '../svgs/Flow.svelte';
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
