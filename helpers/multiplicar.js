const fs = require('fs');

const generateFile1 = (base = 5, hasta = 10, listar = false) => {

    return new Promise((resolve, reject) => {
        let output = '';

        for (let i = 1; i <= hasta; i++) {
            output += `${base} x ${i} = ${base * i} \n`;
        }

        fs.writeFile(`./outputs/tabla-${base}.txt`, output, (err) => {
            if (err) {
                reject(err);
                return;
            }

            if (listar) console.log(output.green    );

            resolve('Creado correctamente');
        });
    });
    
}


const generateFile3 = async (base = 5) => {

    try {
        let output = '';

        for (let i = 1; i <= 10; i++) {
            output += `${base} x ${i} = ${base * i} \n`;
        }

        fs.writeFileSync(`tabla-${base}.txt`, output);

        return 'archivo creado!!!'
    } catch (error) {
        throw error;
    }   
    
}



module.exports = {
    generateFile1,
    generateFile3
}