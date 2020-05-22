// knex seed:make 001-veggies to create this file
// basically doing an insert

exports.seed = async function (knex) {

  // separate it out 

  const testData = [
    { name: 'tomato', color: 'red' },
    { name: 'squash', color: 'yellow' },
    { name: 'cilantro', color: 'green' }
  ]

  // Deletes ALL existing entries
  await knex('vegetables').truncate() // first delete current table, then insert new test data
  // truncate instead of del because it deletes and resets id to 1
  // Inserts seed entries
  return knex('vegetables').insert(testData);

};


