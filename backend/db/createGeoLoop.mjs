import db from "./connection.mjs";

db = db.getSiblingDB("test");

db.dvf.find().forEach(function(element) {
     element.oldloc = {
         "type": "Point", 
         "coordinates": [{$toDecimal: element.oldlat}, {$toDecimal: element.oldlng}]
     };
     db.dvf.save(element);
});