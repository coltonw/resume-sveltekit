<script lang="ts">
  import IconLine from '$lib/IconLine.svelte';
  import LineDate from '$lib/LineDate.svelte';
  import LineIcon from '$lib/LineIcon.svelte';
  import SubHeading from '$lib/SubHeading.svelte';
  import SubHeadingTitle from '$lib/SubHeadingTitle.svelte';
  import NodeJs from '$lib/svgs/NodeJs.svelte';
  import Express from '$lib/svgs/Express.svelte';
  import Npm from '$lib/svgs/Npm.svelte';
  import MongoDB from '$lib/svgs/MongoDB.svelte';
  import Heroku from '$lib/svgs/Heroku.svelte';
  import Mocha from '$lib/svgs/Mocha.svelte';
  import TravisCI from '$lib/svgs/TravisCI.svelte';
  import Bootstrap from '$lib/svgs/Bootstrap.svelte';
  import { iconClassName } from './util';
</script>

<SubHeading>
  <SubHeadingTitle>Indifference Engine</SubHeadingTitle>
  <IconLine>
    <LineDate>2014-2015</LineDate>
    <LineIcon title="Node.js" href="https://nodejs.org/en/">
      <NodeJs class={iconClassName} />
    </LineIcon>
    <LineIcon title="Express" href="https://expressjs.com/">
      <Express class={iconClassName} />
    </LineIcon>
    <LineIcon title="npm" href="https://www.npmjs.com/">
      <Npm class={iconClassName} />
    </LineIcon>
    <LineIcon title="MongoDB" href="https://www.mongodb.com/">
      <MongoDB class={iconClassName} />
    </LineIcon>
    <LineIcon title="Heroku" href="https://www.heroku.com/">
      <Heroku class={iconClassName} />
    </LineIcon>
    <LineIcon title="Mocha" href="https://mochajs.org/">
      <Mocha class={iconClassName} />
    </LineIcon>
    <LineIcon title="Travis CI" href="https://www.travis-ci.com/">
      <TravisCI class={iconClassName} />
    </LineIcon>
    <LineIcon title="Bootstrap" href="https://getbootstrap.com/">
      <Bootstrap class={iconClassName} />
    </LineIcon>
    <LineIcon title="Dust.js" href="https://www.dustjs.com/">
      <div class="flex-none mx-2 text-stone-700 text-sm font-thin">Dust.js</div>
    </LineIcon>
  </IconLine>
</SubHeading>
