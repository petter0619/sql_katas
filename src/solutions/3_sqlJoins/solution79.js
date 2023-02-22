const { sequelize } = require('../../database/config')

/*
Now that you know about placeholder result values, return a list of 
the names of presidents and first ladies and include a placeholder value
noting their office next to each name.

Log the response to the Terminal. 
*/

const exercise = async () => {
  try {
    const query = `
      SELECT name, 'President' AS office
      FROM president 
      UNION
      SELECT name, 'First Lady' 
      FROM first_lady 
      ORDER BY office;
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
