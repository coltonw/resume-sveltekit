<script lang="ts">
  import IconLine from '$lib/IconLine.svelte';
  import LineDate from '$lib/LineDate.svelte';
  import LineIcon from '$lib/LineIcon.svelte';
  import SubHeading from '$lib/SubHeading.svelte';
  import SubHeadingTitle from '$lib/SubHeadingTitle.svelte';
  import NodeJs from '$lib/svgs/NodeJs.svelte';
  import Babel from '$lib/svgs/Babel.svelte';
  import Webpack from '$lib/svgs/Webpack.svelte';
  import Unity from '$lib/svgs/Unity.svelte';
  import CSharp from '$lib/svgs/CSharp.svelte';
  import Rust from '$lib/svgs/Rust.svelte';
  import { iconClassName } from './util';
</script>

<SubHeading>
  <SubHeadingTitle>Boats and Bridges</SubHeadingTitle>
  <IconLine>
    <LineDate>2020-2021</LineDate>
    <LineIcon title="Node.js" href="https://nodejs.org/en/">
      <NodeJs class={iconClassName} />
    </LineIcon>
    <LineIcon title="Lodash" href="https://lodash.com/">
      <div
        class="flex-none mx-2 text-black underline decoration-blue-600 decoration-2 font-bold"
      >
        Lo
      </div>
    </LineIcon>
    <LineIcon title="Babel" href="https://babeljs.io/">
      <Babel class={`${iconClassName} text-yellow-600`} />
    </LineIcon>
    <LineIcon title="Webpack" href="https://webpack.js.org/">
      <Webpack class={iconClassName} />
    </LineIcon>
    <LineIcon title="Unity" href="https://unity.com/">
      <Unity class={iconClassName} />
    </LineIcon>
    <LineIcon title="C#" href="https://docs.microsoft.com/en-us/dotnet/csharp/">
      <CSharp class={iconClassName} />
    </LineIcon>
    <LineIcon title="Rust" href="https://www.rust-lang.org/">
      <Rust class={iconClassName} />
    </LineIcon>
  </IconLine>
</SubHeading>
