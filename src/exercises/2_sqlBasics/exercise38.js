const { sequelize } = require('../../database/config')

/*
Calculate the apporximate percentage or their days alive that each dead president 
spent in office. Give your calculation a descriptive name using AS (e.g.
percentage_of_life_as_president). HINT:  365 days a year is close enough
(aka skip leap years)

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
