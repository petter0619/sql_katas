const { sequelize } = require('../../database/config')

/*
Retrieve a list of all first ladies ordered by their age when
they took office, in the order youngest to oldest.

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
