let assert = require("assert");
let TaxiTrips = require("../taxi-trips");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://nkully:nkully@localhost:5432/taxi_trips_tests';


const pool = new Pool({
    connectionString
});

describe('Taxi Trips', function() {

    // beforeEach(async function() {
    //     console.log("********");
    //     await pool.query("DELETE FROM greetings;");
    // });

    it('should find how many trips all the taxis made', async function() {

        const taxiTrips = TaxiTrips(pool);


        assert.deepEqual([{
            alltrips: '27'
        }], await taxiTrips.totalTripCount());


    });

    it('should find all the regions', async function() {

        const taxiTrips = TaxiTrips(pool);

        assert.deepEqual([{
            allregions: '3'
        }], await taxiTrips.findAllRegions());

    });

    it('should find all the taxis for a region', async function() {
        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual([{
            "registration": "ZN 123 166"
        }, {
            "registration": "ZN 1166"
        }, {
            "registration": "ZN 123-11"
        }], await taxiTrips.findTaxisForRegion('Durban'));
        assert.deepStrictEqual([{
            "registration": "CA 123-123"
        }, {
            "registration": "CA 00126"
        }, {
            "registration": "CA 123 166"
        }], await taxiTrips.findTaxisForRegion('Cape Town'));
        assert.deepStrictEqual([{
            "registration": "GP 123 166"
        }, {
            "registration": "GP 123-166"
        }, {
            "registration": "GP 1236"
        }], await taxiTrips.findTaxisForRegion('Gauteng'));

    })

    it('should find all the trips for a reg number', async function() {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual([{
            routes: 'Alexandra - Sandton'
        }, {
            routes: 'Alexandra - Sandton'
        }, {
            routes: 'Alexandra - Sandton'
        }], await taxiTrips.findTripsByRegNumber('GP 123-166'));
        assert.deepStrictEqual([{
            "routes": "Durban Central - Umhlanga Rocks"
        }, {
            "routes": "Durban Central - Umhlanga Rocks"
        }, {
            "routes": "Durban Central - Umhlanga Rocks"
        }], await taxiTrips.findTripsByRegNumber('ZN 1166'));

    });

    it('Find all the trips made for a given region', async function() {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual([{
            routes: 'Cape Town - Bellville'
        }, {
            routes: 'Cape Town - Bellville'
        }, {
            routes: 'Cape Town - Bellville'
        }, {
            routes: 'Cape Town - Gugulethu'
        }, {
            routes: 'Cape Town - Gugulethu'
        }, {
            routes: 'Cape Town - Gugulethu'
        }, {
            routes: 'Cape Town - Langa'
        }, {
            routes: 'Cape Town - Langa'
        }, {
            routes: 'Cape Town - Langa'
        }], await taxiTrips.findTripsByRegion('Cape Town'));
        assert.deepStrictEqual([{
            "routes": "Sandton - Randburg"
        }, {
            "routes": "Sandton - Randburg"
        }, {
            "routes": "Sandton - Randburg"
        }, {
            "routes": "Alexandra - Sandton"
        }, {
            "routes": "Alexandra - Sandton"
        }, {
            "routes": "Alexandra - Sandton"
        }, {
            "routes": "Sandton - Midrand"
        }, {
            "routes": "Sandton - Midrand"
        }, {
            "routes": "Sandton - Midrand"
        }], await taxiTrips.findTripsByRegion('Gauteng'));
        assert.deepStrictEqual([{
            routes: 'Umlazi - Durban Central'
        }, {
            routes: 'Umlazi - Durban Central'
        }, {
            routes: 'Umlazi - Durban Central'
        }, {
            routes: 'Durban Central - Umhlanga Rocks'
        }, {
            routes: 'Durban Central - Umhlanga Rocks'
        }, {
            routes: 'Durban Central - Umhlanga Rocks'
        }, {
            routes: 'Durban Central - Umbilo'
        }, {
            routes: 'Durban Central - Umbilo'
        }, {
            routes: 'Durban Central - Umbilo'
        }], await taxiTrips.findTripsByRegion('Durban'));

    });

    it('find the total income for a given reg number', async function() {

        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual([{
            fare: 10
        }, {
            fare: 10
        }, {
            fare: 10
        }], await taxiTrips.findIncomeByRegNumber("CA 123-123"));
        // assert.deepStrictEqual(0, await taxiTrips.findIncomeByRegNumber('***'));

    });

    it('find the total income for each taxi', async function() {

        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual([{
            sum: '30'
        }], await taxiTrips.findTotalIncomePerTaxi("CA 123-123"));

    });

    it('find the total income for all the taxis', async function() {
        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual([{
            sum: '420'
        }], await taxiTrips.findTotalIncome());
    });


    after(function() {
        pool.end();
    });

});