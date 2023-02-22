const { sequelize } = require('../../database/config')

/*
Retireve the names of the presidents that had first ladies that
died during their tenure.

HINT: Try subtracting date columns (YYYY-MM-DD) and year columns from each other and
see what happens.

Log the response to ther Terminal.
*/

const exercise = async () => {
  try {
    const query = `
      SELECT p.name 
      FROM president p 
      JOIN first_lady fl ON fl.fk_president_id = p.id
      WHERE fl.death_year IS NOT NULL AND (fl.tenure_end - fl.death_year)
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
