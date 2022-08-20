<script lang="ts">
  import IconLine from '../IconLine.svelte';
  import LineDate from '../LineDate.svelte';
  import LineIcon from '../LineIcon.svelte';
  import SubHeading from '../SubHeading.svelte';
  import SubHeadingTitle from '../SubHeadingTitle.svelte';
  import NodeJs from '../svgs/NodeJs.svelte';
  import Express from '../svgs/Express.svelte';
  import Npm from '../svgs/Npm.svelte';
  import MongoDB from '../svgs/MongoDB.svelte';
  import Heroku from '../svgs/Heroku.svelte';
  import Mocha from '../svgs/Mocha.svelte';
  import TravisCI from '../svgs/TravisCI.svelte';
  import Bootstrap from '../svgs/Bootstrap.svelte';
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
