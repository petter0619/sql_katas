const { sequelize } = require('../../database/config')

/*
Calculate how old each first lady who is not dead is. Use AS to
give the calculation a descriptive name (e.g. 'age').

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
