module.exports = function(pool) {

    //return the total number of trips made
    async function totalTripCount() {
        var sql = await pool.query(`select count(*) as Alltrips from trips`);

        return sql.rows;
    }

    //find all the regions 
    async function findAllRegions() {
        var region = await pool.query(`select count(*)as Allregions from regions`);
        return region.rows;

    }

    async function findTaxisForRegion(region) {
        var taxi = await pool.query(`select registration from taxi join routes on taxi.routes_id= routes.routes_id join regions on regions.region_id=routes.region_id where region = $1`, [region]);
        return taxi.rows;
    }
    async function findTripsByRegNumber(regnumber) {
        var reg = await pool.query(`select routes from trips join taxi on trips.taxi_id=taxi.taxi_id join routes on routes.routes_id = trips.routes_id where registration=$1`, [regnumber])
        return reg.rows
    }
    async function findTripsByRegion(region) {
        var trip = await pool.query(`select routes from trips join taxi on trips.taxi_id=taxi.taxi_id join routes on routes.routes_id = trips.routes_id join regions on regions.region_id = routes.region_id where region = $1`, [region])
        return trip.rows;
    }
    async function findIncomeByRegNumber(pertaxi) {
        var Income = await pool.query(`select fare from trips join taxi on trips.taxi_id=taxi.taxi_id join routes on routes.routes_id = trips.routes_id where registration=$1`, [pertaxi])
        return Income.rows;
    }
    async function findTotalIncomePerTaxi(pertaxi) {
        var totalIncome = await pool.query(`select sum(fare) from trips join taxi on trips.taxi_id=taxi.taxi_id join routes on routes.routes_id = trips.routes_id where registration=$1`, [pertaxi])
        return totalIncome.rows;
    }
    async function findTotalIncome() {
        var total = await pool.query(`select sum(fare) from trips join taxi on trips.taxi_id=taxi.taxi_id join routes on routes.routes_id = trips.routes_id`)
        return total.rows;
    }

    async function findTotalIncomeByRegion(region) {
        var taxi = await pool.query(`select sum(fare) from taxi join routes on taxi.routes_id= routes.routes_id join regions on regions.region_id=routes.region_id where region = $1`, [region]);
        return taxi.rows;
    }

    return {
        totalTripCount,
        findAllRegions,
        findTaxisForRegion,
        findTripsByRegNumber,
        findTripsByRegion,
        findTotalIncomePerTaxi,
        findIncomeByRegNumber,
        findTotalIncome,
        findTotalIncomeByRegion
    }

}