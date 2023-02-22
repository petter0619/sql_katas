const { sequelize } = require('../../database/config')

/*
It is possible to hardcode placeholders as SQL row result values (see: https://stackoverflow.com/questions/5185743/how-can-i-create-a-blank-hardcoded-column-in-a-sql-query)

Try it out by running the following SQL query and checking the result: 
  SELECT name, 'President' AS office FROM president;

NOTE: How the "office" field contains "President" (the placeholder value) for all results.

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
