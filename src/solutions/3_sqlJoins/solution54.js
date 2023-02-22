const { sequelize } = require('../../database/config')

/*
Using a nested SELECT statement retrieve a list of president
John Tyler's first ladies.

Log the response to ther Terminal.
*/

const exercise = async () => {
  try {
    const query = `
      SELECT * FROM first_lady WHERE fk_president_id = (SELECT id FROM president WHERE name = 'John Tyler');
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
