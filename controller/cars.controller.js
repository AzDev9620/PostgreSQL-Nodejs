const db = require('../helper/db');

class CarsController {
    async getCars(req, res) {
        const posts = await db.query(`SELECT * FROM cars;`);
        res.json(posts.rows)
    }
}

module.exports = new CarsController();