const { inquirerMenu } = require('./helpers/inquirer');

require('colors');

// const { monstrarMenu, pausa } = require('./helpers/mensajes');



console.clear();
const main = async() => {
    console.log('Hola mundo');

    let opt = '';

    do {
        opt = await inquirerMenu(); /*monstrarMenu();*/
        console.log({ opt });

        // if (opt !== '0') await pausa();

    } while (opt !== '0');

    //pausa();
}

main();