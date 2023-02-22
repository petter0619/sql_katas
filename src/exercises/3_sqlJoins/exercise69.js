const { sequelize } = require('../../database/config')

/*
Return a list of the names of all presidents who had first ladies
that were not their wife and the number of first ladies they had 
that were not their wife.

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
