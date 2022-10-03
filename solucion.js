//Primera parte
const lib = require('fs');

const mediciones =lib.readFileSync('./mediciones.txt','utf-8').split('\n');


const numeroIncrementos = (mediciones) => mediciones.map((el,idx)=> idx = 0?0:(el-mediciones[idx-1])>0?1:0)
                .reduce((acc,el)=>acc+el);

console.log(numeroIncrementos(mediciones));

//Segunda parte

const incrementosBloques = (mediciones) =>{
    const sumas = mediciones.map((el,idx)=>idx<2?0:parseInt(el)+parseInt(mediciones[idx-1])+parseInt(mediciones[idx-2]))
    .filter((el,idx)=>idx>1);

    return numeroIncrementos(sumas);
}

console.log(incrementosBloques(mediciones));