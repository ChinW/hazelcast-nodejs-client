/*
 * Copyright (c) 2008-2020, Hazelcast, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const RC = require('../RC');
const Client = require('../../').Client;
const Aggregators = require('../../').Aggregators;
const Predicates = require('../../').Predicates;
const fillMap = require('../Util').fillMap;
const expect = require('chai').expect;

describe('MapAggregatorsDoubleTest', function () {

    let cluster, client;
    let map;

    before(function () {
        return RC.createCluster(null, null).then(function (cl) {
            cluster = cl;
            return RC.startMember(cluster.id);
        }).then(function () {
            return Client.newHazelcastClient({ clusterName: cluster.id });
        }).then(function (cl) {
            client = cl;
            return client.getMap('aggregatorsMap');
        }).then(function (mp) {
            map = mp;
        });
    });

    after(function () {
        return client.shutdown()
            .then(() => RC.terminateCluster(cluster.id));
    });

    beforeEach(function () {
        return fillMap(map, 50, 'key', 0);
    });

    afterEach(function () {
        return map.destroy();
    });

    it('count', function () {
        return map.aggregate(Aggregators.count()).then(function (count) {
            return expect(count.toNumber()).to.equal(50);
        });
    });

    it('count with attribute path', function () {
        return map.aggregate(Aggregators.count('this')).then(function (count) {
            return expect(count.toNumber()).to.equal(50);
        });
    });

    it('count with predicate', function () {
        return map.aggregateWithPredicate(Aggregators.count(), Predicates.greaterEqual('this', 1))
            .then(function (count) {
                return expect(count.toNumber()).to.equal(49);
            });
    });

    it('doubleAvg', function () {
        return map.aggregate(Aggregators.doubleAvg()).then(function (avg) {
            return expect(avg).to.equal(24.5);
        });
    });

    it('doubleAvg with attribute path', function () {
        return map.aggregate(Aggregators.doubleAvg('this')).then(function (avg) {
            return expect(avg).to.equal(24.5);
        });
    });

    it('doubleAvg with predicate', function () {
        return map.aggregateWithPredicate(Aggregators.doubleAvg(), Predicates.greaterEqual('this', 47))
            .then(function (avg) {
                return expect(avg).to.equal(48);
            });
    });

    it('doubleSum', function () {
        return map.aggregate(Aggregators.doubleSum()).then(function (sum) {
            return expect(sum).to.equal(1225);
        });
    });

    it('doubleSum with attribute path', function () {
        return map.aggregate(Aggregators.doubleSum('this')).then(function (sum) {
            return expect(sum).to.equal(1225);
        });
    });

    it('doubleSum with predicate', function () {
        return map.aggregateWithPredicate(Aggregators.doubleSum(), Predicates.greaterEqual('this', 47))
            .then(function (avg) {
                return expect(avg).to.equal(144);
            });
    });

    it('floatingPointSum', function () {
        return map.aggregate(Aggregators.floatingPointSum()).then(function (sum) {
            return expect(sum).to.equal(1225);
        });
    });

    it('floatingPointSum with attribute path', function () {
        return map.aggregate(Aggregators.floatingPointSum('this')).then(function (sum) {
            return expect(sum).to.equal(1225);
        });
    });

    it('floatingPointSum with predicate', function () {
        return map.aggregateWithPredicate(Aggregators.floatingPointSum(), Predicates.greaterEqual('this', 47))
            .then(function (sum) {
                return expect(sum).to.equal(144);
            });
    });

    it('numberAvg', function () {
        return map.aggregate(Aggregators.numberAvg()).then(function (avg) {
            return expect(avg).to.equal(24.5);
        });
    });

    it('numberAvg with attribute path', function () {
        return map.aggregate(Aggregators.numberAvg('this')).then(function (avg) {
            return expect(avg).to.equal(24.5);
        });
    });

    it('numberAvg with predicate', function () {
        return map.aggregateWithPredicate(Aggregators.numberAvg(), Predicates.greaterEqual('this', 47))
            .then(function (avg) {
                return expect(avg).to.equal(48);
            });
    });

    it('max', function () {
        return map.aggregate(Aggregators.max()).then(function (avg) {
            return expect(avg).to.equal(49);
        });
    });

    it('max with attribute path', function () {
        return map.aggregate(Aggregators.max('this')).then(function (avg) {
            return expect(avg).to.equal(49);
        });
    });

    it('max with predicate', function () {
        return map.aggregateWithPredicate(Aggregators.max(), Predicates.lessEqual('this', 3))
            .then(function (avg) {
                return expect(avg).to.equal(3);
            });
    });

    it('min', function () {
        return map.aggregate(Aggregators.min()).then(function (avg) {
            return expect(avg).to.equal(0);
        });
    });

    it('min with attribute path', function () {
        return map.aggregate(Aggregators.min('this')).then(function (avg) {
            return expect(avg).to.equal(0);
        });
    });

    it('min with predicate', function () {
        return map.aggregateWithPredicate(Aggregators.min(), Predicates.greaterEqual('this', 3))
            .then(function (avg) {
                return expect(avg).to.equal(3);
            });
    });
});
