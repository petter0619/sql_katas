const { sequelize } = require('../../database/config')

/*
Retrieve a list that counts the number of dogs of each breed,
but excludes all breeds that have only been owned once.

Log the response to ther Terminal.
*/

const exercise = async () => {
  try {
    const query = `
      SELECT breed, COUNT(*) AS pet_count 
      FROM pet 
      WHERE species = 'Dog' AND breed IS NOT NULL  
      GROUP BY breed 
      HAVING pet_count > 1
      ORDER BY pet_count DESC;
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
