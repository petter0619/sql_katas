const { sequelize } = require('../../database/config')

/*
Retrieve a list of presidents that were not democrat or republican and born before 1900 
or presidents that are democrat and not dead yet.

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
