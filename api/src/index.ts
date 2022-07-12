import { Router } from "itty-router";

import * as Soundcloud from "./services/soundcloud";

const router = Router({
  base: "/api",
});

router.get("/music", async ({ params }) => {
  const mixes = await Soundcloud.getMixes();
  const lastfmTracks = await Lastfm.getRecentTracks();
  const data = {
    mixes,
    lastfm_tracks: lastfmTracks,
  };
  const returnData = JSON.stringify(data, null, 2);
  return new Response(returnData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
});

router.get("/randfail", () => {
  if (Math.floor(Math.random() * 100) < 25) {
    return new Response("it failed!", {
      status: 400,
    });
  }
  return new Response("it worked!");
});

router.all("*", () => new Response("404, not found!", { status: 404 }));

addEventListener("fetch", (e) => {
  e.respondWith(router.handle(e.request));
});
