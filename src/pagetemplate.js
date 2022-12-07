const generateTeam = team => {

// Manager
    const generateManager = manager => {
        // format html card for manager within the back tics
            // cards used are with help from bootstrap
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h2 class="employee-title">${manager.getName()}</h2>
                <h3 class="employee-title"><i class="fas fa-briefcase mr-2"></i>${manager.getRole()}</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
        `
    }



// Engineer
    const generateEngineer = engineer => {
        // format html card for engineer within the back tics
            // cards used are with help from bootstrap
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h2 class="employee-title">${engineer.getName()}</h2>
                <h3 class="employee-title"><i class="fas fa-laptop-code mr-2"></i>${engineer.getRole()}</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub Username: ${engineer.getGitHub()}</li>
            </ul>
        </div>
        `
}



// Intern
    const generateIntern = intern => {
        // format html card for intern within the back tics
        // cards used are with help from bootstrap
        return `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                  <h2 class="employee-title">${intern.getName()}</h2>
                  <h3 class="employee-title"><i class="fas fa-graduation-cap mr-2"></i>${intern.getRole()}</h3>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${intern.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                  <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        `
}


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
                <link rel="stylesheet" 
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" 
                integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" 
                crossorigin="anonymous"
                >
                <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                crossorigin="anonymous"
                />
                <link rel="stylesheet" href="./style.css"/>
            </head>

        <body>
            <div class="col-12 jumbotron">
                <h1 class="display-4">My Team</h1>
            </div>
            <div class="card-container">
            <div class="col-12 d-flex flex-wrap justify-content-center">
                ${generateTeam(team)} 
            </div>
            </div>
        </body>
        <script src="../app.js"></script>
        </html>
        `
}







