exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable("locations", table => {
      table.string("exitNumber");
      table.string("highway");
      table.string("city");
      table.string("state");
      table.string("zip");
    }),
    knex.schema.alterTable("amenities", table => {
      table.boolean("truck_service");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable("locations", table => {
      table.string("exit_number").nullable();
      table.string("highway").nullable();
      table.string("city").nullable();
      table.string("state").nullable();
      table.string("zip").nullable();
    }),
    knex.schema.alterTable("amenities", table => {
      table.string("truck_service").nullable();
    })
  ]);
};
