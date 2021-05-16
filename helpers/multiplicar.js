//const { rejects } = require('assert/strict');
const fs = require('fs');
const colors = require('colors');



const CrearArchivo = async(base = 5, hasta = 10, listar = false) => {

    try {
        if (listar) {
            console.log('================'.red);
            console.log(`    Tabla del ${base}`.yellow);
            console.log('================'.red);
        }


        let salida = '';

        for (let i = 0; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        }

        if (listar) {
            console.log(colors.cyan(salida));
        }


        fs.writeFileSync(`${__dirname}/../salida/tabla-${base}.txt`, salida);

        return `tabla-${ base }.txt`;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    CrearArchivo
}