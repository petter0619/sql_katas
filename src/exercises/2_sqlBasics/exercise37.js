const { sequelize } = require('../../database/config')

/*
Calculate how old each first lady who is dead became. Also calculate
how many years they liced after they started their tenure. Use AS to
give the calculations descriptive names (e.g. 'age', 'years_lived_after_tenure_start'). 

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
