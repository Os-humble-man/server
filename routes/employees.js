const express = require('express');
const { con } = require('../db');

const router = express.Router();


router.get('/heure', (req, res) => {

    con.query('SELECT * FROM heure_service', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching hours of service');
            return;
        }
        res.json(results);
    });
});

router.get('/', async (req, res) => {
    const sql =
        "SELECT * FROM employees INNER JOIN heure_service ON heure_service.id = employees.heureId";

    await con.query(sql, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send(result);
    });
});


router.post('/', async (req, res) => {
    const { heureId, nom, prenom, email } = req.body;
    const sql = "INSERT INTO employees(heureId,nom,prenom,email) VALUES(?,?,?,?)";

    await con.query(sql, [heureId, nom, prenom, email], (err, result) => {
        if (err) throw err;
        res.status(200).send(result)
    })
})




module.exports = router;