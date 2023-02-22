const { sequelize } = require('../../database/config')

/*
Return a list of the names of all presidents who had first ladies
that were not their wife and the number of first ladies they had 
that were not their wife.

Log the response to ther Terminal.
*/

const exercise = async () => {
  try {
    const query = `
      SELECT p.name, COUNT(*) AS flotus_count
      FROM president p 
        JOIN first_lady fl ON fl.fk_president_id = p.id
      WHERE fl.wife_of_president = FALSE
      GROUP BY p.name;
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
