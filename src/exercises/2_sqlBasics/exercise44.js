const { sequelize } = require('../../database/config')

/*
Use the MAX aggregate function to find the president that spend the most time in office.

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
