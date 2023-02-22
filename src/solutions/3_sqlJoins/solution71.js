const { sequelize } = require('../../database/config')

/*
Use SQL to answer the question: Which 5 presidents owned the most horses? 

Log the response to ther Terminal.
*/

const exercise = async () => {
  try {
    const query = `
      SELECT p.name AS potus, pet.species, COUNT(*) AS horse_count
      FROM president p 
        JOIN pet ON pet.fk_president_id = p.id
      WHERE pet.species = 'Horse'
      GROUP BY potus, pet.species
      ORDER BY horse_count DESC 
      LIMIT 5;
    `

    // Yes, they did not own any pets.

    const [results, metadata] = await sequelize.query(query)

    console.log(results)
  } catch (error) {
    // Log eny eventual errors to Terminal
    console.error(error)
  } finally {
    // End Node process
    process.exit(0)
  }
}

exercise()
