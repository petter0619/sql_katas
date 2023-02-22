const { sequelize } = require('../../database/config')

/*
Of all presidential pets where we have a birth date, use GROUP BY
to list the type animal (species) that lives the longest on average.
Include the number of animals in the list.

HINT: Subtracting death_date from birth_date gives you the age of the 
animal in years.

Log the response to ther Terminal.
*/

const exercise = async () => {
  try {
    const query = `SELECT '@TODO'`

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
