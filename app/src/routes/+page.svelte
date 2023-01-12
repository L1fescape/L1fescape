<script>
  import profilePic from '$lib/assets/me.jpg';
  import Socials from '$lib/components/socials.svelte';
</script>

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
}

.hi {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  box-sizing: border-box;
  max-width: 60rem;
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

<div class="home">
  <section class="hi">
    <div class="pic">
      <img class="w-12 rounded-full profile h-23" src={profilePic} alt="L1fescape doing a kickflip" />
    </div>
    <div class="blurb">
      <h2>hi! i'm andrew</h2>
      <p>
        i'm a programmer currently living in berlin. i really enjoy music and
        software.
      </p>
      <p>
        you can find more info about me elsewhere on the internet:
      </p>
      <div class="socials">
        <Socials />
      </div>
    </div>
  </section>
</div>
