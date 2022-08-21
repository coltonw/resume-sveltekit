<script lang="ts">
  import IconLine from '../IconLine.svelte';
  import LineDate from '../LineDate.svelte';
  import LineIcon from '../LineIcon.svelte';
  import SubHeading from '../SubHeading.svelte';
  import SubHeadingTitle from '../SubHeadingTitle.svelte';
  import Unity from '../svgs/Unity.svelte';
  import CSharp from '../svgs/CSharp.svelte';
  import Python from '../svgs/Python.svelte';
  import Aws from '../svgs/Aws.svelte';
  import Serverless from '../svgs/Serverless.svelte';
  import { iconClassName } from './util';
</script>

<SubHeading>
  <SubHeadingTitle>Unity</SubHeadingTitle>
  <IconLine>
    <LineDate>2019</LineDate>
    <LineIcon title="Unity" href="https://unity.com/">
      <Unity class={iconClassName} />
    </LineIcon>
    <LineIcon title="C#" href="https://docs.microsoft.com/en-us/dotnet/csharp/">
      <CSharp class={iconClassName} />
    </LineIcon>
    <LineIcon title="Python" href="https://www.python.org/">
      <Python class={iconClassName} />
    </LineIcon>
    <LineIcon title="Amazon Web Services" href="https://aws.amazon.com/">
      <Aws class={iconClassName} />
    </LineIcon>
    <LineIcon title="Serverless Framework" href="https://www.serverless.com/">
      <Serverless class={iconClassName} />
    </LineIcon>
  </IconLine>
</SubHeading>
