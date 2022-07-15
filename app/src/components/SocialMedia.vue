<template>
  <ul class="social-media list-none">
    <li class="inline" v-for="account in accounts" :key="account.name">
      <a :href="account.url" target="_blank">{{ account.name }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
const accounts = [
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
export default {
  name: "SocialMedia",
  props: {
    hide: [String, Array],
  },
  data({ hide }) {
    let filteredAccounts = accounts;
    if (typeof hide !== "undefined") {
      let toHide = hide;
      if (typeof toHide === "string") {
        toHide = [toHide];
      }
      filteredAccounts = accounts.filter(
        (account) => toHide.indexOf(account.name) === -1
      );
    }
    return {
      accounts: filteredAccounts,
    };
  },
};
</script>

<style scoped>
.social-media li {
  margin: 0 0.5rem;
}
.social-media li:first-child {
  margin-left: 0;
}
.social-media li:last-child {
  margin-right: 0;
}
</style>
