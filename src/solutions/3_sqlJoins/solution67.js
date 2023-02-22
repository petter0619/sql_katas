const { sequelize } = require('../../database/config')

/*
Using SQL answer the question: Which president(s) did not have
any first ladies during their tenure(s)?

Log the response to ther Terminal.
*/

const exercise = async () => {
  try {
    const query = `
      SELECT p.name AS potus, fl.name AS flotus 
      FROM president p 
      LEFT JOIN first_lady fl  
      ON fl.fk_president_id = p.id
      WHERE fl.name IS NULL;
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
