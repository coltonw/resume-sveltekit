<script lang="ts">
  import IconLine from '../IconLine.svelte';
  import LineDate from '../LineDate.svelte';
  import LineIcon from '../LineIcon.svelte';
  import SubHeading from '../SubHeading.svelte';
  import SubHeadingTitle from '../SubHeadingTitle.svelte';
  import Elixir from '../svgs/Elixir.svelte';
  import Phoenix from '../svgs/Phoenix.svelte';
  import CircleCI from '../svgs/CircleCI.svelte';
  import Aws from '../svgs/Aws.svelte';
  import React from '../svgs/React.svelte';
  import Nivo from '../svgs/Nivo.svelte';
  import Bulma from '../svgs/Bulma.svelte';
  import Webpack from '../svgs/Webpack.svelte';
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
      <Phoenix class={`${iconClassName} w-12`} />
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
