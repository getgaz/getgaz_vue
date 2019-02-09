const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex");

const app = express();

// Setup Logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.get("/api/locations", async (req, res) => {
  try {
    const results = [];
    const locations = await db("locations").select();
    for (const location of locations) {
      const siteId = location.site_id;
      const amenities = await db("location_amenity")
        .innerJoin("amenities", "location_amenity.amenity_id", "amenities.id")
        .where({
          location_id: siteId
        })
        .select("id", "display_name", "truck_service");
      const result = {
        site_id: location.site_id,
        name: location.name,
        latitude: location.latitude,
        longitude: location.longitude,
        address: location.address,
        exitNumber: location.exitNumber,
        highway: location.highway,
        city: location.city,
        state: location.state,
        zip: location.zip,
        amenities: amenities
      };
      results.push(result);
    }

    res.json(results);
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

app.get("/api/filters", async (req, res) => {
  try {
    const cities = await db
      .select()
      .table("locations")
      .distinct("city")
      .orderBy("city");

    const states = await db
      .select()
      .table("locations")
      .distinct("state")
      .orderBy("state");

    const highways = await db
      .select()
      .table("locations")
      .distinct("highway")
      .orderBy("highway");
    res.json({
      states,
      cities,
      highways
    });
  } catch (err) {
    console.error("Error loading filters", err);
    res.sendStatus(500);
  }
});

// Always return the main index.html, since we are developing a single page application
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
