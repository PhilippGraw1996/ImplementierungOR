import db from "./connection.mjs";
 
db.runCommand(
    {
        update: 'test',
        updates: [
            {
                q: {}, // query selector to match all documents in collection
                u: [ // update of each matched document
                    {
                        $set: {
                            newloc: {
                                "type": "Point",
                                "coordinates": [{$toDecimal: "$newlat"}, {$toDecimal: "$newlng"}]
                            },
                            oldloc: {
                                "type": "Point",
                                "coordinates": [{$toDecimal: "$oldlat"}, {$toDecimal: "$oldlng"}]
                            },

                        }
                    },
                ],
                // Do no forget this line to be able to update multiple documents
                multi: true
            }
        ]
    }
)

db.test.createIndex( { newloc: "2dsphere" } )
db.test.createIndex( { oldloc: "2dsphere" } )