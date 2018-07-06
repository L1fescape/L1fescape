---
title: Using Wireguard
---

Follow the [installation instructions](https://www.wireguard.com/install/) on the wireguard website for both your client os and host os.

on both the host and client:

```
$ wg genkey > private
$ wg pubkey < private
$ ip link add wg0 type wireguard
$ wg set wg0 private-key ./private
$ ip link set wg0 up
```

On the host:

```
$ ip address add dev wg0 192.168.2.1/24
$ wg set wg0 listen-port 51820
$ wg set wg0 peer ABCDEF... allowed-ips 192.168.2.1/24 endpoint 209.202.254.14:8172
```

On the client:

```
$ ip address add dev wg0 192.168.2.1/24
$ wg set wg0 listen-port 51820
$ wg set wg0 peer ABCDEF... allowed-ips 192.168.2.1/24 endpoint 209.202.254.14:8172
```

