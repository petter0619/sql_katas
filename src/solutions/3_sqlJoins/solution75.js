const { sequelize } = require('../../database/config')

/*
Retireve a top 10 list of which first ladies owned the most pets.

Log the response to ther Terminal.
*/

const exercise = async () => {
  try {
    const query = `
      SELECT fl.name AS flotus, COUNT(*) AS pet_count
      FROM president p 
        JOIN pet ON p.id = pet.fk_president_id 
        JOIN first_lady fl ON p.id = fl.fk_president_id 
      GROUP BY flotus
      ORDER BY pet_count DESC 
      LIMIT 10;
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
