<style>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home section {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  max-width: 60rem;
}

.hi {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  box-sizing: border-box;
  flex-direction: row;
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

.profile {
  width: 12rem;
  height: 12rem;
  object-position: 0 60%;
  object-fit: cover;
  flex-shrink: 0;
}
</style>

<svelte:head>
  <title>L1fescape</title>
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte'
  import profilePic from '$lib/assets/me.jpg'
  import SocialsList from '$lib/components/SocialsList.svelte'
  import SocialLink from '$lib/components/SocialLink.svelte'
	import { SocialPlatform } from '$lib/data/socials'
	import type { NFT } from '$lib/types/nft'

  let myNFTs: NFT[] = []

  onMount(async () => {
    const nftResp = await fetch('/api/music-nfts')
    const nftData = await nftResp.json()
    myNFTs = nftData.nfts
  })
</script>

<div class="home">
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
        i really like music, software, and skateboarding.
      </p>
    </div>
  </section>
  <section class="nfts">
    <p>Here are the music nfts I currently own:</p>

    {#each myNFTs as nft}
      <p>{nft.title}</p>
    {/each}
  </section>
  <section class="links">
    <p>
      here are a few other places you can find me on the internet &#x2935;
    </p>
    <SocialsList />
  </section>
</div>
