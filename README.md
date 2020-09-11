# L1fescape.com

> internet site with cool things 🎉

## install

dependencies

- [node](https://nodejs.org/en/download/)

```
$ npm install
```

## run

start a dev server

```
$ npm start
```

run in a docker container

```
$ docker build -f web/Dockerfile -t l1fescape.com:latest .
$ docker run -it -p 8000:80 l1fescape.com:latest
```

## build

```
$ npm run build
```

re-generate lastfm/spotify data

```
$ LASTFM_KEY= \
  SPOTIFY_CLIENT_ID= \
  SPOTIFY_CLIENT_SECRET= \
  SPOTIFY_TOKEN= \
  npm run data
```

```
npm run

## test

```

\$ npm test

```

## issues?

[let's solve 'em!](https://github.com/L1fescape/L1fescape/issues/new)
```
