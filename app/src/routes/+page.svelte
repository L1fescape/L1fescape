<style>
section {
  padding: 4rem 2rem;
}
section p:first-child {
  margin-top: 0;
}

section p:last-child {
  margin-bottom: 0;
}


.hi {
  display: flex;
  flex-direction: column;
  max-width: 60rem;
  box-sizing: border-box;
  align-self: center;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}

.pic {
  display: flex;
  align-items: center;
}

.blurb {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

.blurb h2 {
  margin-bottom: 0.5rem;
}

.profile {
  width: 12rem;
  height: 12rem;
  object-position: 0 60%;
  object-fit: cover;
  flex-shrink: 0;
}

.track-list {
  display: grid;
  grid-gap: 1rem;
  max-width: 100rem;
  margin-top: 2rem;
}

.nfts p {
  margin: 2rem 0;
}

.links {
  display: flex;
  flex-direction: column;
}

.view-src {
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: smaller;
}
</style>

<svelte:head>
  <title>L1fescape</title>
</svelte:head>

<script lang="ts">
  import profilePic from '$lib/assets/me.jpg'
  import NFTTrackList from '$lib/components/NFTTrackList.svelte'
  import SocialsList from '$lib/components/SocialsList.svelte'
  import SocialLink from '$lib/components/SocialLink.svelte'
	import { SocialPlatform } from '$lib/data/socials'
  import type { PageData } from './$types'

  export let data: PageData 
</script>

<section class="hi">
  <div class="pic">
    <img class="w-12 rounded-full profile h-23" src={profilePic} alt="L1fescape doing a kickflip" />
  </div>
  <div class="blurb">
    <h2>hi! i'm andrew</h2>
    <p>
      i'm a programmer living in berlin, and currently
      <SocialLink platform={SocialPlatform.Linkedin}>looking for a job</SocialLink>!
    </p>
    <p>
      i'm really passionate about music and software and i enjoy discovering new ways to bridge them together.
    <p>
      here are a few other places you can find me on the <span class="whitespace-nowrap">internet &#x2935;</span>
    </p>
    <SocialsList />
  </div>
</section>

{#if data?.tracks?.length}
<section class="nfts bg-slate-900">
  <p>
    this is my music nft collection. it contains songs from artists i admire a lot and want to support - please have a listen!
  </p>
  <div class="track-list sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <NFTTrackList tracks={data.tracks} />
  </div>
</section>
{/if}

<section class="view-src bg-zinc-950">
  <p>
    <a href="https://github.com/L1fescape/L1fescape/tree/main/app" target="_blank" rel="noreferrer">view page source</a>
  </p>
</section>
