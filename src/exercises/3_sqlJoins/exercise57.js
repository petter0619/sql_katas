const { sequelize } = require('../../database/config')

/*
Use UNION to retrieve a list of presidents and first ladies. List their
names and dates that they began and ended their tenures. Sort list by
the order in the reverse order in which they started their tenures and
then ended their tenures.
Log the response to the Terminal.
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
