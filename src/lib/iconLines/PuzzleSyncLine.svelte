<script lang="ts">
  import IconLine from '../IconLine.svelte';
  import LineDate from '../LineDate.svelte';
  import LineIcon from '../LineIcon.svelte';
  import SubHeading from '../SubHeading.svelte';
  import SubHeadingTitle from '../SubHeadingTitle.svelte';
  import Gatsby from '../svgs/Gatsby.svelte';
  import React from '../svgs/React.svelte';
  import Typescript from '../svgs/Typescript.svelte';
  import Graphql from '../svgs/Graphql.svelte';
  import Auth0 from '../svgs/Auth0.svelte';
  import CircleCI from '../svgs/CircleCI.svelte';
  import Aws from '../svgs/Aws.svelte';
  import Serverless from '../svgs/Serverless.svelte';
  import { iconClassName } from './util';
</script>

<SubHeading>
  <SubHeadingTitle>PuzzleSync</SubHeadingTitle>
  <IconLine>
    <LineDate>2020</LineDate>
    <LineIcon title="Gatsby" href="https://www.gatsbyjs.com/">
      <Gatsby class={iconClassName} />
    </LineIcon>
    <LineIcon title="React" href="https://reactjs.org/">
      <React class={iconClassName} />
    </LineIcon>
    <LineIcon title="TypeScript" href="https://www.typescriptlang.org/">
      <Typescript class={iconClassName} />
    </LineIcon>
    <LineIcon title="GraphQL" href="https://graphql.org/">
      <Graphql class={`${iconClassName} text-pink-600`} />
    </LineIcon>
    <LineIcon title="Auth0" href="https://auth0.com/">
      <Auth0 class="${iconClassName} text-orange-600" />
    </LineIcon>
    <LineIcon title="CircleCI" href="https://circleci.com/">
      <CircleCI class={iconClassName} />
    </LineIcon>
    <LineIcon title="Amazon Web Services" href="https://aws.amazon.com/">
      <Aws class={iconClassName} />
    </LineIcon>
    <LineIcon title="Serverless Framework" href="https://www.serverless.com/">
      <Serverless class={iconClassName} />
    </LineIcon>
  </IconLine>
</SubHeading>