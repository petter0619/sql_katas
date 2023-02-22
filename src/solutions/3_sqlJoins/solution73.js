const { sequelize } = require('../../database/config')

/*
List the names of the presidents that owned pets but not
any dogs. HINT: Test using NOT IN with a nested query.

Log the response to ther Terminal.
*/

const exercise = async () => {
  try {
    const query = `
      SELECT DISTINCT p.name 
      FROM pet 
        JOIN president p ON p.id = pet.fk_president_id 
      WHERE fk_president_id NOT IN (
        SELECT DISTINCT p.id
        FROM president p 
          JOIN pet ON p.id = pet.fk_president_id 
        WHERE pet.species = 'Dog'
      );
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
