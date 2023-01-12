<script lang="ts">
const accounts: {name: string, url: string}[] = [
  {
    name: "soundcloud",
    url: "https://soundcloud.com/L1fescape",
  },
  {
    name: "last.fm",
    url: "https://www.last.fm/user/L1fescape",
  },
  {
    name: "spotify",
    url: "https://open.spotify.com/user/1224725738?si=DUfTrXamShCL0iZUCXNF7Q",
  },
  {
    name: "github",
    url: "https://github.com/L1fescape",
  },
  {
    name: "twitter",
    url: "https://twitter.com/L1fescape",
  },
  {
    name: "instagram",
    url: "https://instagram.com/L1fescape",
  },
];
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
  {#each accounts as account}
    <li class="inline">
      <a href={account.url} target="_blank" rel="noreferrer">{ account.name }</a>
    </li>
  {/each}
</ul>
