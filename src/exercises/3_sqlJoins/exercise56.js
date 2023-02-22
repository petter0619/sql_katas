const { sequelize } = require('../../database/config')

/*
Use UNION to retrieve a list of the names of the presidents 
and first ladies that are still alive.
Log the response to the Terminal.
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
