<script lang="ts">
  import IconLine from '$lib/IconLine.svelte';
  import LineDate from '$lib/LineDate.svelte';
  import LineIcon from '$lib/LineIcon.svelte';
  import SubHeading from '$lib/SubHeading.svelte';
  import SubHeadingTitle from '$lib/SubHeadingTitle.svelte';
  import Elixir from '$lib/svgs/Elixir.svelte';
  import Phoenix from '$lib/svgs/Phoenix.svelte';
  import CircleCI from '$lib/svgs/CircleCI.svelte';
  import Aws from '$lib/svgs/Aws.svelte';
  import React from '$lib/svgs/React.svelte';
  import Nivo from '$lib/svgs/Nivo.svelte';
  import Bulma from '$lib/svgs/Bulma.svelte';
  import Webpack from '$lib/svgs/Webpack.svelte';
  import { iconClassName } from './util';
</script>

<SubHeading>
  <SubHeadingTitle>Majority Judgment</SubHeadingTitle>
  <IconLine>
    <LineDate>2019</LineDate>
    <LineIcon title="elixir" href="https://elixir-lang.org/">
      <Elixir class={iconClassName} />
    </LineIcon>
    <LineIcon
      title="Phoenix Framework"
      href="https://www.phoenixframework.org/"
    >
      <Phoenix class={iconClassName} />
    </LineIcon>
    <LineIcon title="CircleCI" href="https://circleci.com/">
      <CircleCI class={iconClassName} />
    </LineIcon>
    <LineIcon title="Amazon Web Services" href="https://aws.amazon.com/">
      <Aws class={iconClassName} />
    </LineIcon>
    <LineIcon title="React" href="https://reactjs.org/">
      <React class={iconClassName} />
    </LineIcon>
    <LineIcon title="nivo" href="https://nivo.rocks/">
      <Nivo class={iconClassName} />
    </LineIcon>
    <LineIcon title="Bulma" href="https://bulma.io/">
      <Bulma class={iconClassName} />
    </LineIcon>
    <LineIcon title="Webpack" href="https://webpack.js.org/">
      <Webpack class={iconClassName} />
    </LineIcon>
  </IconLine>
</SubHeading>
