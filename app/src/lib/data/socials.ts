export enum SocialPlatform {
  SoundCloud = 'soundcloud',
  LastFm = 'last.fm',
  Spotify = 'spotify',
  Github = 'github',
  Instagram = 'instagram',
  Twitter = 'twitter',
  Linkedin = 'linkedin',
} 

export type SocialPlatformData = {
  name: SocialPlatform,
  url: string,
}

export const socialAccountsList: SocialPlatformData[] = [
  {
    name: SocialPlatform.SoundCloud,
    url: "https://soundcloud.com/l1fescape",
  },
  {
    name: SocialPlatform.LastFm,
    url: "https://www.last.fm/user/l1fescape",
  },
  {
    name: SocialPlatform.Spotify,
    url: "https://open.spotify.com/user/1224725738",
  },
  {
    name: SocialPlatform.Github,
    url: "https://github.com/l1fescape",
  },
  {
    name: SocialPlatform.Twitter,
    url: "https://twitter.com/l1fescape",
  },
  {
    name: SocialPlatform.Instagram,
    url: "https://instagram.com/l1fescape",
  },
  {
    name: SocialPlatform.Linkedin,
    url: "https://www.linkedin.com/in/l1fescape/",
  },
];


export const socialAccounts: { [key in SocialPlatform]: SocialPlatformData } =
  socialAccountsList.reduce((acc, platform) => {
    acc[platform.name] = platform
    return acc
  }, {} as { [key in SocialPlatform]: SocialPlatformData })