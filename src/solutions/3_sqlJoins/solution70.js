const { sequelize } = require('../../database/config')

/*
What are the most common relationships for a president to have with his flotus
if she is not his wife?

Log the response to ther Terminal.
*/

const exercise = async () => {
  try {
    const query = `
      SELECT relationship_with_president, COUNT(*) AS flotus_count
      FROM first_lady fl 
      WHERE wife_of_president = FALSE
      GROUP BY relationship_with_president 
      ORDER BY flotus_count DESC;
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
