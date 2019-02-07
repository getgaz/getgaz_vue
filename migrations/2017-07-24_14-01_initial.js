exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("locations", table => {
      table.integer("site_id").primary();
      table.string("name");
      table.float("latitude");
      table.float("longitude");
      table.string("address");
    }),
    knex.schema.createTable("amenities", table => {
      table.integer("id").primary();
      table.string("display_name");
    }),
    knex.schema.createTable("location_amenity", table => {
      table
        .integer("location_id")
        .references("site_id")
        .inTable("locations");
      table
        .integer("amenity_id")
        .references("id")
        .inTable("amenities");
      table.primary(["location_id", "amenity_id"]);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("locations"),
    knex.schema.dropTable("amenities")
  ]);
};
