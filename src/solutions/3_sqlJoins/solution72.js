const { sequelize } = require('../../database/config')

/*
Assuming that any pet of a president was also the pet of their first lady,
retrieve a list of the pets owned by first ladies born outside of the US. 
Sort the list by the name of the first lady and make sure to include the
birth country of the first lady in question.

Log the response to ther Terminal.
*/

const exercise = async () => {
  try {
    const query = `
      SELECT fl.name AS flotus, fl.birth_country, pet.name AS pet_name 
      FROM first_lady fl
        LEFT JOIN president p ON p.id = fl.fk_president_id 
        LEFT JOIN pet ON p.id = pet.fk_president_id 
      WHERE fl.birth_country != 'USA';
    `

    // Yes, they did not own any pets.

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
