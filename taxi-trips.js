module.exports = function(pool) {
    //return the total number of trips made
    async function totalTripCount(trips) {
        const sql = await pool.query(`select registration from Taxi where registration = $1`, [trips]);
        console.log(sql.rows.length);
        if (sql.rows.length == 0) {
            await pool.query(`insert into Taxi (registration,registration_id) values ($1 , $2)`, [1, trips])
        }
    }
    //find all the regions 
    async function findAllRegions(region) {
        await pool.query(`select registration from taxi join cape_town on taxi.registration_id join durban on taxi.registration_id join gauteng on taxi.registration_id= cape_town.region_id where region = $1`, [region]);

    }
    return {
        totalTripCount,
        findAllRegions
    }

}