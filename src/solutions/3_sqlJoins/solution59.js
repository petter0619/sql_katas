const { sequelize } = require('../../database/config')

/*
Use GROUP BY to figure out how many first ladies there have been
per birth country.

Log the response to ther Terminal.
*/

const exercise = async () => {
  try {
    const query = `
      SELECT birth_country, COUNT(*) AS num_of_first_ladies
      FROM first_lady 
      GROUP BY birth_country 
      ORDER BY num_of_first_ladies DESC;
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
