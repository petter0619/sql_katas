const { sequelize } = require('../../database/config')

/*
Use the LIKE/NOT LIKE operator and wilcards to retrieve a list of the first ladies
that were not an in-law relation (e.g. uncle-in-law, father-in-law) or married to
the president they served under.

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
