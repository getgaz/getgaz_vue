const fs = require("fs");
const db = require("../server/knex.js");
const util = require("util");

(async () => {
  try {
    const locations = JSON.parse(fs.readFileSync("./data/locations.json"));
    for (const location of locations) {
      const id = location.Site.SiteId;
      const latitude = location.Site.Latitude;
      const longitude = location.Site.Longitude;
      const name = location.Site.SiteName;
      const streetAddress = location.Addresses[0].Address1;
      const city = location.Addresses[0].City;
      const state = location.Addresses[0].State;
      const zipcode = location.Addresses[0].Zip;

      const address = `${streetAddress}, ${city}, ${state}, ${zipcode}`;

      const locationAddress = await db("locations").insert({
        site_id: id,
        latitude,
        longitude,
        name,
        address
      });
      console.log(locationAddress);

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

        // console.log(amenityList);

        const locationAmenity = await db("location_amenity").insert({
          location_id: id,
          amenity_id
        });
        console.log(locationAmenity);
      }
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
