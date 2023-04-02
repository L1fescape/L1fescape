<script lang="ts">
  import SocialLink from './SocialLink.svelte'
  import { socialAccountsList } from '../data/socials'
</script>

<style>
.social-media li {
  margin: 0 1rem 0 0;
}
.social-media li:last-child {
  margin-right: 0;
}
</style>

<ul class="flex flex-wrap list-none social-media">
  {#each socialAccountsList as account}
    <li class="inline">
      <SocialLink platform={account.name} />
    </li>
  {/each}
</ul>
