const { sequelize } = require('../../database/config')

/*
Use your solution from exercise 79 and modify it to count how 
many unique first ladies vs unique presidents there have been.

NOTE: Unique means that you should only count those who have served
as president or first lady multiple times once.

Log the response to ther Terminal.
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
