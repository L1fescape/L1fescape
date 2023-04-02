<script lang="ts">
  import { socialAccounts, SocialPlatform } from '../data/socials'
  export let platform: SocialPlatform
  const account = socialAccounts[platform]
</script>

<a href={account.url} target="_blank" rel="noreferrer">
  <slot>
    { account.name }
  </slot>
</a>

