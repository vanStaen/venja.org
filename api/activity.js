const express = require("express");
const router = express.Router();
const { Client } = require("pg");


// Init Postgres
const client = new Client({ connectionString: process.env.DATABASE_URL, ssl: true })
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0; // This bypasses the SSL verification

// Connect to Postgres 
client.connect(err => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('Activity API:', 'Connected to postgres db!')
    }
})

// GET list of all columns in table
router.get("/:table", async (req, res) => {
    try {
        const querry = `
                        SELECT COLUMN_NAME
                        FROM   INFORMATION_SCHEMA.COLUMNS
                        WHERE  TABLE_NAME = '${req.params.table}'
                        `
        const results = await client.query(querry)
        const activities = results.rows.filter(result => {
            if (result.column_name === "year" ||
                result.column_name === "month" ||
                result.column_name === "day") {
                return false;
            } else {
                return true;
            }
        });
        res.status(201).json(activities);
    } catch (err) {
        res.status(400).json({
            error: `${err})`,
        });
    }
});


// DELETE single column from a table (based on column_name 'activity')
router.delete("/", async (req, res) => {
    const deleteQuery1 = `
                        ALTER TABLE ${req.body.table}
                        DROP COLUMN ${req.body.activity};
                        `;
    const deleteQuery2 = `
                        DELETE FROM activities 
                        WHERE activity='${req.body.activity}'
                        `;
    try {
        await client.query(deleteQuery1);
        await client.query(deleteQuery2);
        res.status(201).json({ success: `Column ${req.body.activity} deleted from ${req.body.table}.` });
    } catch (err) {
        res.status(400).json({
            error: `${err})`,
        });
    }
});

// POST add activity
router.post("/", async (req, res) => {
    const alterQuery = `
                        ALTER TABLE ${req.body.table}
                        ADD ${req.body.activity} ${req.body.datatype};
                        `;
    const insertQuery = `
                        INSERT INTO activities (activity, icon, category, unit) 
                        VALUES ('${req.body.activity}', '${req.body.icon}', '${req.body.category}', '${req.body.unit}' )
                        `;
    try {
        await client.query(alterQuery);
        await client.query(insertQuery);
        res.status(201).json({ success: `Column ${req.body.activity} added to ${req.body.table}.` });
    } catch (err) {
        res.status(400).json({
            error: `${err})`,
        });
    }
});

// PATCH single data from songbook(based on id)
router.patch("/", async (req, res) => {
    let updateField = '';
    if (req.body.icon !== undefined) {
        updateField = updateField + "icon='" + req.body.icon + "',";
    }
    if (req.body.category) {
        updateField = updateField + "category='" + req.body.category + "',";
    }
    if (req.body.unit !== undefined) {
        updateField = updateField + "unit='" + req.body.unit + "',";
    }
    const updateFieldEdited = updateField.slice(0, -1) // delete the last comma
    const updateQuery = `UPDATE activities SET ${updateFieldEdited} WHERE activity='${req.body.activity}'`;
    console.log(updateQuery);
    try {
        const udpate = await client.query(updateQuery);
        if (udpate.rowCount > 0) {
            res.status(200).json({
                success: `Activity '${req.body.activity}' has been updated.`,
            });
        } else {
            res.status(400).json({
                error: `No data found for activitiy ${req.body.activity}`,
            });
        }
    } catch (err) {
        res.status(400).json({
            error: `${err}`,
        });
    }

});

module.exports = router;
