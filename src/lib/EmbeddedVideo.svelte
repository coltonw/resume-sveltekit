<script lang="ts">
  import { throttle } from 'lodash-es';
  import Redo from '$lib/svgs/Redo.svelte';

  let {
    webm,
    mp4,
    width,
    height,
    preload = false,
  }: {
    webm: string;
    mp4: string;
    width: number;
    height: number;
    preload?: boolean;
  } = $props();

  let video: HTMLVideoElement | undefined = $state();
  let playing = $state(false);
  let played = $state(false);
  let loading = $state(false);
  let canPlay = $state(false);
  let isVisible = $state(false);

  // Code modified from https://github.com/fkhadra/react-on-screen
  const checkIsVisible = (
    {
      top,
      bottom,
      height,
    }: {
      top: number;
      bottom: number;
      height: number;
    },
    windowHeight: number,
  ) => {
    if (top + bottom === 0) {
      return false;
    }

    const topThreshold = 0;
    const heightCheck = windowHeight;

    return height > heightCheck
      ? top + height >= topThreshold && bottom - height <= heightCheck
      : top >= topThreshold && bottom <= heightCheck;
  };

  const isVideoVisible = (videoEl: HTMLVideoElement | undefined) => {
    setTimeout(() => {
      if (!videoEl) return;

      const html = document.documentElement;
      const boundingClientRect = videoEl.getBoundingClientRect();
      const windowHeight = window.innerHeight || html.clientHeight;

      isVisible = checkIsVisible(boundingClientRect, windowHeight);
    }, 0);
  };

  const throttledIsVideoVisible = throttle(
    () => isVideoVisible(video),
    250,
  ) as () => void;

  $effect(() => {
    if (isVisible && !loading && !canPlay && video && !played) {
      video.load();
      loading = true;
    }
  });
  $effect(() => {
    if (isVisible && canPlay && video && !played) {
      video.play();
      playing = true;
      played = true;
    }
  });

  const replay = () => {
    if (!video) return;
    video.currentTime = 0;
    playing = true;
    void video.play();
  };
</script>

<svelte:window
  onscroll={throttledIsVideoVisible}
  onresize={throttledIsVideoVisible}
/>
<!-- Note: in my brief experimentation, aspectRatio on the parent did a better job
preventing layout shift than anything I could do on the video itself -->
<div
  class="relative my-6 border-2 border-stone-200"
  style="aspect-ratio: {width + 4} / {height + 4}"
>
  {#if !playing && played}
    <button
      type="button"
      aria-label="Replay video"
      class="absolute inset-0 m-auto w-16 h-16 bg-stone-100 p-2 rounded-lg text-stone-800 cursor-pointer"
      onclick={replay}
    >
      <Redo class="w-full h-full" />
    </button>
  {/if}
  <video
    bind:this={video}
    oncanplaythrough={() => {
      canPlay = true;
    }}
    onended={() => {
      playing = false;
    }}
    onclick={() => {
      if (!playing && video) {
        playing = true;
        void video.play();
      }
    }}
    playsinline
    muted
    {width}
    {height}
    preload={preload ? 'auto' : 'metadata'}
  >
    <source type="video/webm" src={webm} />
    <source type="video/mp4" src={mp4} />
  </video>
</div>
