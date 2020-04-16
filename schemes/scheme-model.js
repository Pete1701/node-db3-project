const db = require("../data/db-config.js");

module.exports = {
    find,
    findById,
    // findSteps,
    add,
    update,
    remove
  };
  
function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id }).first();
}

// function findSteps(id) {
//     return db("steps")
//       .join('schemes', 'schemes.id', 'scheme_id')
//       .select('steps.*', 'title as scheme')
//       .where('scheme_id', id);
// }

function add(scheme) {
  return db("schemes")
    .insert(scheme, "id")
    .then(id => {
    return findById(id);
    });
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(() => {
    return findById(id);
    });
}

function remove(id) {
    return db('schemes')
      .where({ id })
      .del();
  }