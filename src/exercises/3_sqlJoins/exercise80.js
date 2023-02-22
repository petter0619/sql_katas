const { sequelize } = require('../../database/config')

/*
Now that you've tried out placeholders in SELECT statements, use them and UNION to
compare the average term lengths of first lades vs presidents.

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
