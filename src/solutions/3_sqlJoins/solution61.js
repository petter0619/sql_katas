const { sequelize } = require('../../database/config')

/*
Use GROUP BY to figure out what the most popular type of Setter (breed of dog) is.

Log the response to ther Terminal.
*/

const exercise = async () => {
  try {
    const query = `
      SELECT breed, COUNT(*) AS setter_count
      FROM pet 
      WHERE breed LIKE '%setter%' 
      GROUP BY breed
      ORDER BY setter_count DESC;
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
