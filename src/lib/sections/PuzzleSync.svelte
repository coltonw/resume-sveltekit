<script lang="ts">
  import SectionHeading from '$lib/SectionHeading.svelte';
  import Paragraph from '$lib/Paragraph.svelte';
  import Link from '$lib/Link.svelte';
  import EmbeddedVideo from '$lib/EmbeddedVideo.svelte';
  import PuzzleSyncLine from '$lib/iconLines/PuzzleSyncLine.svelte';
</script>

<SectionHeading>Fun with Family</SectionHeading>
<PuzzleSyncLine />
<Paragraph>
  My family does an annual get-together where we play games and solve puzzles
  together. For the occasion I decided to make a little quiz game, sort of a
  cooperative version of sporcle. I used the opportunity to learn Gatsby and
  sharpen my skills with websockets (<Link
    href="https://github.com/coltonw/simple-websockets-chat-app/"
  >
    backend source
  </Link>
  ; frontend has private source and implementation).
</Paragraph>
<EmbeddedVideo
  webm="/videos/puzzlesync.webm"
  mp4="/videos/puzzlesync.mp4"
  width={1194}
  height={790}
/>
<Paragraph>
  It was my first time using any sort of react based static site generator. I
  found Gatsby to be annoying to use especially their GraphQL internal api. I
  had been working with TypeScript at work a bit and so I started developing all
  side projects in TypeScript starting with this project. I deployed the
  frontend using CircleCI for CI/CD and Amazon S3 to host. I learned Auth0 for
  authentication and authorization.
</Paragraph>
<Paragraph>
  I used an aws official sample for a chat app as the foundation for my backend.
  I deployed the backend using Serverless and included Lambdas, DynamoDB, and
  ApiGateway from AWS.
</Paragraph>
