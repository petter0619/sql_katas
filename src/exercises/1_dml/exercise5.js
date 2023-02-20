const { sequelize } = require('../../database/config')

/*
Update the following information about former first lady Melania Trum
(spouse of Donald J. Trump, the 45th president) in the first_lady table:
- Left office: 20th january 2021

Log the response to the terminal
*/

const exercise = async () => {
  try {
    const query = `SELECT '@TODO'`

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
