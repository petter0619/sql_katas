const { sequelize } = require('../../database/config')

/*
Let's make a prediction that either Ron DeSantis (current governor of Florida)
or Nikki Haley (former UN ambassador) wins the 2024 presidential election to
become the 47th president of the United States and preemptively add the following 
info about them to the president table:

- Ron DeSantis
  - Born: 14th September 1978
  - Party: Republican

- Nikki Haley
  - Born: 20th January 1972
  - Party: Republican

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
