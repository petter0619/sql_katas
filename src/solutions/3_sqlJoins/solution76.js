const { sequelize } = require('../../database/config')

/*
Retireve the names of the first ladies that ended their tenure before
the president they served under left office. 

HINT: Try subtracting date columns (YYYY-MM-DD) from each other and
see what happens.

Log the response to ther Terminal.
*/

const exercise = async () => {
  try {
    const query = `
      SELECT fl.name
      FROM president p 
      JOIN first_lady fl ON fl.fk_president_id = p.id
      WHERE (fl.tenure_end - p.left_office) < 0
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
