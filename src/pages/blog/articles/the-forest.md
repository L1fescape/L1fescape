---
title: "The Forest: Dedicated Server"
date: 2018-05-31
---



### Requirements

- Windows server
- 


https://www.reddit.com/r/TheForest/comments/8n4816/dedicated_server_keeps_needing_reset_to_bring/

### Installation

Install steamcmd

install the forest dedicated server

```+wrap
C:\Users\[Account Name]\Desktop\steamcmd\steamcmd.exe +login anonymous +force_install_dir "C:\servers\theforest" +app_update 556450 validate +quit
```


### Running the server


#### Useful links

- [World Map](https://theforestmap.com/)

### Bugs

#### Corrupted save files

Don't manually run `/save` or `/reboot`. It will corrupt/modify save files such that the server won't load them correctly the next time it boots up. Regularly backup ` C:\Users\Administrator\AppData\LocalLow\SKS\TheForestDedicatedServer\ds\Multiplayer\Slot[1-5]` so that you can revert to a older save if the server can't load your current progress.

#### All buildings gone except rock paths

theories: 
- creating a steam game server token and adding `serverSteamAccount` setting to `Server.cfg` will allow you to backup you save game data. Occassionally the dedicated server can't connect to steam and will wipe all structures. Rebooting the server will fix this.
- logging in on steam client, save data stored there

#### Link steam account

Go to https://steamcommunity.com/dev/managegameservers and generate a Login Token for the game `242760`. Update or add the following field to `Server.cfg`:

```
// Your Steam account name. blank means anonymous
serverSteamAccount [Login Token]
```


#### Server not showing up

Might need to restart steam