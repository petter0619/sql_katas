const { sequelize } = require('../../database/config')

/*
Use SQL to answer the question: Which 5 presidents owned the most horses? 

Log the response to ther Terminal.
*/

const exercise = async () => {
  try {
    const query = `SELECT '@TODO'`

    // Yes, they did not own any pets.

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
