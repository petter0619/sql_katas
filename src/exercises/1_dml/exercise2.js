const { sequelize } = require('../../database/config')

/*
Add current first lady Jill Biden to the first_lady table in the database:
- She is the wife of the 46th president Joe Biden
- Born June 3, 1951 in the USA
- She was 69 years olden when she took office on the 20th january 2021

Log the response to the terminal
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
