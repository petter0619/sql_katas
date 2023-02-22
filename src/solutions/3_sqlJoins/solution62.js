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
    const query = `
      SELECT 
        species, 
        COUNT(*) AS pet_count, 
        AVG(IFNULL(death_date, '2023-02-22') - birth_date) AS avg_age
      FROM pet 
      WHERE birth_date IS NOT NULL
      GROUP BY species
      ORDER BY avg_age DESC;
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
