console.clear()

var prompt = require('prompt-sync')();

console.log(` Em uma comunidade do Rio de Janeiro, vivia Cleyton, cujo sonho era ser jogador de futebol.
 Para tanto, Clayton, precisava atingir algumas metas, e não se perder no caminho.
 Para que possamos descobrir se ele atingiu êxito, por favor, responda com sim ou não as seguintes perguntas:`);
 console.log()

let contagem = 0
let qtdsim = 0

while (contagem < 1) {
    const p1 = prompt(`Clayton conseguiu recusar o mundo das drogas? `);

    if (p1 == 'sim') {
        console.clear();
        qtdsim++;
        contagem++;
    } else if (p1 == 'nao') {
        console.clear();
        contagem++;
    } else {
        console.clear();
        console.log(`Digite apenas sim ou nao!`);
    }
}
while (contagem < 2) {
        const p2 = prompt(`Ele entrou numa escolinha de futebol ainda criança? `);
    
    if (p2 == 'sim') {
            console.clear();
            qtdsim++;
            contagem++;
     } else if (p2 == 'nao') {
            console.clear();
            contagem++;
     } else {
            console.clear();
            console.log(`Digite apenas sim ou nao!`);
     }
}
while (contagem < 3) {
  const p3 = prompt(`Foi um garoto obediente aos supervisores? `);
        
      if (p3 == 'sim') {
        console.clear();
           qtdsim++;
          contagem++;
        } else if (p3 == 'nao') {
          console.clear();
          contagem++;
      } else {
         console.clear();
         console.log(`Digite apenas sim ou nao!`);
            }
}
while (contagem < 4) {
     const p4 = prompt(`Se manteve focado nos estudos e no futuro? `);
            
     if (p4 == 'sim') {
          console.clear();
          qtdsim++;
          contagem++;
        } else if (p4 == 'nao') {
         console.clear();
         contagem++;
         } else {
         console.clear();
         console.log(`Digite apenas sim ou nao!`);
        }
}
 while (contagem < 5) {
    const p5 = prompt(`Contratou um bom empresário? `);
                
     if (p5 == 'sim') {
      console.clear();
      qtdsim++;
     contagem++;
     } else if (p5 == 'nao') {
      console.clear();
      contagem++;
      } else {
     console.clear();
    console.log(`Digite apenas sim ou nao!`);
                    }
}
   console.log();
   if (qtdsim == 5) {
    console.log(`Ele foi excepcional em sua tragetória, como consequência, não apenas realizou o sonho, mas ficou mais conhecido que o Pelé.`)
   }
   else if (qtdsim == 4) {
    console.log(`Mesmo com muitos percalços e após perder um braço ele conseguiu atingir o sonho.`)
   }
   else if (qtdsim == 3) {
    console.log(`O jovem quase alcançou o sonho, no entanto, morreu com uma bala perdida.`)
   }
   else if (qtdsim == 1 || qtdsim == 2) {
    console.log(`Cleyton falhou em ser jogador, mas não virou drogado.`)
   }
   else {
    console.log(`Infelizmente, ele miseravelmente se afundou nas drogas.`)
   } 