const { sequelize } = require('../../database/config')

/*
Use GROUP BY to figure out what the most popular species of 
non-mammalian pet has been.

Log the response to ther Terminal.
*/

const exercise = async () => {
  try {
    const query = `
      SELECT species, COUNT(*) AS pet_count
      FROM pet
      WHERE mammal = FALSE
      GROUP BY species
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
