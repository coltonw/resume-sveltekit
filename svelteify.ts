// This quick deno script converts a preact component file from my resume-fresh repo into a svelte file
if (Deno.args.length < 2) {
  console.log('Needs a source and destination');
  Deno.exit(1);
}

const svgTsx = await Deno.readTextFile(Deno.args[0]);

let svgSvelte = svgTsx.replace(/^\/[^/]*\/\n/s, '');
svgSvelte = svgSvelte.replace(/^import[^\n]*"preact";\n/, '');
svgSvelte = svgSvelte.replace(/^import[^\n]*twind";\n/, '');
svgSvelte = svgSvelte.replace(/(import [^"\n]*)"([^"]*)"/g, "$1'$2'");
svgSvelte = svgSvelte.replace(/\.tsx/g, '.svelte');
svgSvelte = svgSvelte.replace(/\.ts/g, '');
svgSvelte = svgSvelte.replace(/iconClassName\(\)/g, 'iconClassName');
svgSvelte = svgSvelte.replace(/class=\{tw`([^`]*)`\}/g, 'class="$1"');
svgSvelte = svgSvelte.replace(/warmGray/g, 'stone');

const svgRegexExec =
  /^((?:import [^\n]*\n)*)(?:[^<\n]|\n[^i])*(<[\s\S]*>)[^>]*$/.exec(svgSvelte);
if (svgRegexExec && svgRegexExec[1].indexOf('i') >= 0) {
  svgSvelte = `<script lang="ts">
${svgRegexExec[1].replace(/\n$/, '').replace(/(^|\n)/g, '$1  ')}
</script>

${svgRegexExec[2].replace(/(^|\n) {2}/g, '$1')}`;
} else if (svgRegexExec) {
  svgSvelte = svgRegexExec[2].replace(/(^|\n) {2}/g, '$1');
} else {
  console.log('Unknown parsing error');
  Deno.exit(1);
}

// console.log(svgSvelte);

await Deno.writeTextFile(Deno.args[1], svgSvelte);
