const { sequelize } = require('../../database/config')

/*
Assuming that any pet of a president was also the pet of their first lady,
waht are the names of the pets owned by Obama's wife. Make sure the names
of both pet and first lady are included in the sequelize return logged to
the console.

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
