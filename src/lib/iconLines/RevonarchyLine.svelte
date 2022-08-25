<script lang="ts">
  import IconLine from '$lib/IconLine.svelte';
  import LineDate from '$lib/LineDate.svelte';
  import LineIcon from '$lib/LineIcon.svelte';
  import SubHeading from '$lib/SubHeading.svelte';
  import SubHeadingTitle from '$lib/SubHeadingTitle.svelte';
  import Bower from '$lib/svgs/Bower.svelte';
  import Koa from '$lib/svgs/Koa.svelte';
  import Less from '$lib/svgs/Less.svelte';
  import Gulp from '$lib/svgs/Gulp.svelte';
  import Ramda from '$lib/svgs/Ramda.svelte';
  import React from '$lib/svgs/React.svelte';
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
