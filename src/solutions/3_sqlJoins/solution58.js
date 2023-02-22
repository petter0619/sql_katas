const { sequelize } = require('../../database/config')

/*
Use COUNT() and GROUP BY to calculate how many presidents each party 
has had. Use an alias to rename the COUNT() column to something that 
makes more sense and sort it by the party that has had the most presidents.

Log the response to ther Terminal.
*/

const exercise = async () => {
  try {
    const query = `
      SELECT party, COUNT(*) AS num_of_presidents 
      FROM president 
      GROUP BY party 
      ORDER BY num_of_presidents DESC;
    `

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
