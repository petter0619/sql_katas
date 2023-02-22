const { sequelize } = require('../../database/config')

/*
Sort the polticial parties by the total number of pets owned 
by their presidents.

Log the response to ther Terminal.
*/

const exercise = async () => {
  try {
    const query = `
      SELECT p.party, COUNT(*) AS pet_count
      FROM president p 
        JOIN pet ON p.id = pet.fk_president_id 
      WHERE p.party IS NOT NULL
      GROUP BY p.party 
      ORDER BY pet_count DESC;
    `

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
