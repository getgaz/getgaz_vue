const fs = require("fs");
const db = require("../server/knex.js");
const util = require("util");

(async () => {
  try {
    const locations = JSON.parse(fs.readFileSync("./data/locations.json"));
    for (const location of locations) {
      const siteId = location.Site.SiteId;
      const customFields = location.CustomFields;
      for (const field of customFields) {
        const amenity_id = field.CustomField.Id;
        const amenity_display_name = field.CustomField.DisplayName;

        const insert = await db("amenities")
          .insert({
            id: amenity_id,
            display_name: amenity_display_name
          })
          .toString();

        const update = db("amenities")
          .update({
            id: amenity_id,
            display_name: amenity_display_name
          })
          .whereRaw(`amenities.id = '${amenity_id}'`)
          .toString();

        const query = util.format(
          "%s ON CONFLICT (id) DO UPDATE SET %s",
          insert,
          update.replace(/^update\s.*\sset\s/i, "")
        );
        await db.raw(query);

        await db("location_amenity").insert({
          location_id: siteId,
          amenity_id
        });
      }
    }
    console.log("these are amenities");
    await process.exit();
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
