<script lang="ts">
  import { throttle } from 'lodash-es';
  import Redo from '$lib/svgs/Redo.svelte';

  let video: HTMLVideoElement;
  let playing = false;
  let played = false;
  let loading = false;
  let canPlay = false;
  let isVisible = false;
  export let webm: string,
    mp4: string,
    width: number,
    height: number,
    preload: boolean = false;

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
    windowHeight: number
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
    250
  ) as () => void;

  $: if (isVisible && !loading && !canPlay && video && !played) {
    video.load();
    loading = true;
  }
  $: if (isVisible && canPlay && video && !played) {
    video.play();
    playing = true;
    played = true;
  }
</script>

<svelte:window
  on:scroll={throttledIsVideoVisible}
  on:resize={throttledIsVideoVisible}
/>
<!-- Note: in my brief experimentation, aspectRatio on the parent did a better job
preventing layout shift than anything I could do on the video itself -->
<div
  class="relative my-6 border-2 border-stone-200"
  style="aspectRatio: {width + 4} / {height + 4}"
>
  {#if !playing && played}
    <Redo
      class="absolute inset-0 m-auto w-16 h-16 text-5xl bg-stone-100 p-2 rounded-lg text-stone-800 cursor-pointer"
    />
  {/if}
  <video
    bind:this={video}
    on:canplaythrough={() => {
      canPlay = true;
    }}
    on:ended={() => {
      playing = false;
    }}
    on:click={() => {
      if (!playing && video) {
        playing = true;
        video.play();
      }
    }}
    playsInline
    muted
    {width}
    {height}
    preload={preload ? 'auto' : 'metadata'}
  >
    <source type="video/webm" src={webm} />
    <source type="video/mp4" src={mp4} />
  </video>
</div>
