const { sequelize } = require('../../database/config')

/*
Now that you've tried out placeholders in SELECT statements, use them and UNION to
compare the average term lengths of first lades vs presidents.

Log the response to ther Terminal.
*/

const exercise = async () => {
  try {
    const query = `
      SELECT 'FLOTUS:' AS title, AVG(fl.tenure_end - fl.tenure_start) AS avg_years_served
      FROM first_lady fl 
      WHERE fl.tenure_end IS NOT NULL
      UNION
      SELECT 'POTUS:', AVG(p.left_office - p.took_office)
      FROM president p  
      WHERE p.took_office IS NOT NULL;
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
