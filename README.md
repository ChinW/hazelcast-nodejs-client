
This client version is forked from https://github.com/hazelcast/hazelcast-nodejs-client/

[Doc](DOCUMENTATION.md#121-setting-up-a-hazelcast-imdg-cluster).

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
