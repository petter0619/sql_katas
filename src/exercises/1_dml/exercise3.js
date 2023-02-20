const { sequelize } = require('../../database/config')

/*
Add Joe Biden's pets to the pet table in the database. They have/had:
- 3 dogs (German Shepherds):
  - Champ: Born 2008-11-11 and died 2021-06-19 at 13 years old
  - Major: Born 2018-01-17 and currently 5 years old
  - Commander: Born 2021-09-01 and currently 2 years old

- 1 cat: Willow (all other details unknown...)

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
