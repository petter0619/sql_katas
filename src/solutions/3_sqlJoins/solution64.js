const { sequelize } = require('../../database/config')

/*
Using joins retrieve a list of the presidential number and names of all 
presidents and their first ladies. Exclude any president that
did not have a first lady during their tenure. 

Log the response to ther Terminal.
*/

const exercise = async () => {
  try {
    const query = `
      SELECT p.number, p.name, fl.name 
      FROM president p 
      JOIN first_lady fl ON p.id = fl.fk_president_id;
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
