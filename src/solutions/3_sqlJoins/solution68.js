const { sequelize } = require('../../database/config')

/*
Get the name of the wide of the president who owned a hippo.

Log the response to ther Terminal.
*/

const exercise = async () => {
  try {
    const query = `
      SELECT fl.name
      FROM president p 
        JOIN pet ON pet.fk_president_id = p.id 
        JOIN first_lady fl ON fl.fk_president_id = p.id
      WHERE pet.species LIKE 'Hippo%' AND fl.wife_of_president = TRUE;
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
