title: Syncing Your Home Directory
---

References
- version your home directory: https://martinovic.blog/post/home_git/

## Issues
- working on multiple machines and having changes synced
    - don't want to remember to save changes
    - don't want to create lots of tmp commits
- storing build / dependency files in sync'd folder
    - lack of ignore options for filetypes, folders, patterns, etc
    - depending on provider, new changes will not sync for a while
    - wasted bandwidth syncing GBs of useless files
- storage provider settings / visibility into implementation
    - needs to be fast
    - unsure of how/when things will sync

## Solutions
- git/vscode script to create commit and push to tmp branch on-save
    - can be to a different repo/server
    - pros
        - easy to selectively sync folders
    - cons
        - merge conflicts not fun to fix (?)
- 

## Providers
- iCloud
- Google Drive
- One Drive
- Dropbox
- syncthis

These are the ones I have tried because I use them one way or another (paying for iCloud because lots of photos on my iPhone, paying for Google Drive because used it when on Android, One Drive installed on Windows already, used Dropbox in the past, heard syncthis could ignore files better)

### What if I don't want to pay for another cloud storage solution?
You have two options: be careful about where build files are being stored.