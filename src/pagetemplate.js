const generateTeam = team => {

// Manager
    const generateManager = manager => {
        // format html card for manager within the back tics
        return `
        // use this syntax for getting manager name, id, email, ect.
        ${manager.getName()}
        `
    }






// Engineer








// Intern



// order html elements appropriately 
const html = []
// Manager
html.push(team.filter(employee => employee.getRole()==='Manager')
    .map(manager => generateManager(manager))
)
// Engineer
html.push(team.filter(employee => employee.getRole()==='Engineer')
    .map(engineer => generateEngineer(engineer))
    .join('')
)
// Intern
html.push(team.filter(employee => employee.getRole()==='Intern')
    .map(intern => generateIntern(intern))
    .join('')
)
return html.join('')
}

module.exports = team => {
    // insert general html inside back tics
    return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./style.css"/>
</head>

<body>
${generateTeam(team)} 
</body>
<script src="../app.js"></script>
</html>
`
}






