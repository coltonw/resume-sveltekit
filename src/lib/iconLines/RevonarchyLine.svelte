<script lang="ts">
  import IconLine from '../IconLine.svelte';
  import LineDate from '../LineDate.svelte';
  import LineIcon from '../LineIcon.svelte';
  import SubHeading from '../SubHeading.svelte';
  import SubHeadingTitle from '../SubHeadingTitle.svelte';
  import Bower from '../svgs/Bower.svelte';
  import Koa from '../svgs/Koa.svelte';
  import Less from '../svgs/Less.svelte';
  import Gulp from '../svgs/Gulp.svelte';
  import Ramda from '../svgs/Ramda.svelte';
  import React from '../svgs/React.svelte';
  import { iconClassName } from './util';
</script>

<SubHeading>
  <SubHeadingTitle>Revonarchy</SubHeadingTitle>
  <IconLine>
    <LineDate>2015</LineDate>
    <LineIcon title="Bower" href="https://bower.io/">
      <Bower class={iconClassName} />
    </LineIcon>
    <LineIcon title="Koa" href="https://koajs.com/">
      <Koa class={iconClassName} />
    </LineIcon>
    <LineIcon title="Less" href="https://lesscss.org/">
      <Less class={iconClassName} />
    </LineIcon>
    <LineIcon title="Gulp" href="https://gulpjs.com/">
      <Gulp class={iconClassName} />
    </LineIcon>
    <LineIcon title="Ramda" href="https://ramdajs.com/">
      <Ramda class={iconClassName} />
    </LineIcon>
    <LineIcon title="React" href="https://reactjs.org/">
      <React class={iconClassName} />
    </LineIcon>
  </IconLine>
</SubHeading>
