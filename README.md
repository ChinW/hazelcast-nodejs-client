<<<<<<< HEAD

This client version is forked from https://github.com/hazelcast/hazelcast-nodejs-client/

[Doc](DOCUMENTATION.md#121-setting-up-a-hazelcast-imdg-cluster).
=======
<p align="center">
    <a href="https://github.com/hazelcast/hazelcast-nodejs-client/">
        <img src="https://3l0wd94f0qdd10om8642z9se-wpengine.netdna-ssl.com/images/logos/hazelcast-logo-horz_md.png" />
    </a>
    <h2 align="center">Hazelcast Node.js Client</h2>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/hazelcast-client"><img src="https://img.shields.io/npm/v/hazelcast-client" alt="NPM version"></a>
    <a href="https://slack.hazelcast.com"><img src="https://img.shields.io/badge/slack-chat-green.svg" alt="Chat on Slack"></a>
    <a href="https://twitter.com/Hazelcast"><img src="https://img.shields.io/twitter/follow/Hazelcast.svg?style=flat-square&colorA=1da1f2&colorB=&label=Follow%20on%20Twitter" alt="Follow on Twitter"></a>
</p>
>>>>>>> c52a41f831fecb21cca161c26c4046a2213e2af8

---

[Hazelcast](https://hazelcast.org/) is an open-source distributed in-memory data store and computation platform that
provides a wide variety of distributed data structures and concurrency primitives.

Hazelcast Node.js client is a way to communicate to Hazelcast IMDG clusters and access the cluster data.
The client provides a Promise-based API with a builtin support for native JavaScript objects.

### Hazelcast

Hazelcast Node.js client requires a working Hazelcast IMDG cluster to run. This cluster handles the storage and
manipulation of the user data.

A Hazelcast IMDG cluster consists of one or more cluster members. These members generally run on multiple virtual or
physical machines and are connected to each other via the network. Any data put on the cluster is partitioned to
multiple members transparent to the user. It is therefore very easy to scale the system by adding new members as
the data grows. Hazelcast IMDG cluster also offers resilience. Should any hardware or software problem causes a crash
to any member, the data on that member is recovered from backups and the cluster continues to operate without any
downtime.

The quickest way to start a single member cluster for development purposes is to use our
[Docker images](https://hub.docker.com/r/hazelcast/hazelcast/).

```bash
docker run -p 5701:5701 hazelcast/hazelcast:4.0.2
```

You can also use our ZIP or TAR [distributions](https://hazelcast.org/imdg/download/archives/#hazelcast-imdg)
as described [here](DOCUMENTATION.md#121-setting-up-a-hazelcast-imdg-cluster).

### Client

```bash
npm i @chiw/hazelcast-client
```
