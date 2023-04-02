<style>
section {
  padding: 4rem 2rem;
}

.hi {
  display: flex;
  flex-direction: column;
  max-width: 60rem;
  box-sizing: border-box;
  align-self: center;
  align-items: center;
  justify-content: center;
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
  margin-bottom: 1rem;
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

.socials {
  margin-top: 1rem;
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
      i really like music, software, and skateboarding
    </p>
  </div>
</section>

<section class="nfts bg-slate-900">
  <p>i've been exploring more and more of the music nft scene over the past few months. what's really drawn me in are all the different the communities and projects forming around the artists, the music, and the tech. there's so much passion and there are so many amazing people building really cool things or getting involved in different ways - it's really contagious!</p>
  <p>i've picked up a few music nfts from my favorite artists over the past few months - please have a listen and check out their stuff!</p>
  <div class="track-list sm:grid-cols-2 md:grid-cols-3">
    <NFTTrackList tracks={data.tracks} />
  </div>
</section>

<section class="links bg-neutral-900">
  <p>
    here are a few other places you can find me on the internet &#x2935;
  </p>
  <div class="socials">
    <SocialsList />
  </div>
</section>
