const { sequelize } = require('../../database/config')

/*
Retrieve a list of the name and species of George Washingtons pets. Make
sure to include his name in the list.

Log the response to ther Terminal.
*/

const exercise = async () => {
  try {
    const query = `
      SELECT p.name, pet.species, pet.name 
      FROM president p 
      JOIN pet ON pet.fk_president_id = p.id
      WHERE p.name = 'George Washington';
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
