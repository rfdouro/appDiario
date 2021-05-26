/**
 * https://github.com/dfahlander/Dexie.js/tree/master/dist
 * http://dexie.org/docs/Tutorial/Getting-started
 * 
 * @type Dexie
 * 
 * versão usando observable
 * https://dexie.org/docs/Observable/Dexie.Observable
 */

var dbName = "dbDiarioReunioes";

try {
 //Dexie.delete(dbName);//CUIDADO:usado para excluir a base de dados
} catch (e) {

}

var db = new Dexie(dbName);

function exportarDados() {
 return db.transaction('r', db.tables, () => {
  /*return Promise.all(
   db.tables.map(table => table.toArray()
   .then(rows => ({table: table.name, rows: rows})
   )));*/
  return Promise.all(
          db.tables.map(function (table) {
           return table.toArray().then(function (rows) {
            return {'table': table.name, 'rows': rows};
           });
          }));
 });
}

db.version(1).stores({
 GrupoReuniao: "$$id,nome,descricao",
 Reuniao: "$$id,data,ata,grupo",
 DemColuna: "$$id,ordem,titulo,descricao,finalizacao,demandas",
 Demanda: "$$id,dataI,dataF,titulo,descricao,coluna,prereqs,prioridade"
});

//adicionada a tabela Tarefa (para tarefas diárias)
db.version(2).stores({
 GrupoReuniao: "$$id,nome,descricao",
 Reuniao: "$$id,data,ata,grupo",
 DemColuna: "$$id,ordem,titulo,descricao,finalizacao,demandas",
 Demanda: "$$id,dataI,dataF,titulo,descricao,coluna,prereqs,prioridade",
 //dataL = lançamento, dataA = atualização, dataF = finalização
 //quando houver data de finalização indica que foi finalizada
 //dataA e dataF são controladas pela aplicação
 Tarefa: "$$id,dataL,dataA,dataF,descricao,prioridade"
});

//adicionadas as colunas dataLDate,dataADate,dataFDate (Date) na tabela Tarefa para organizar a ordenação
//uso o moment para ajudar
db.version(3).stores({
 GrupoReuniao: "$$id,nome,descricao",
 Reuniao: "$$id,data,ata,grupo",
 DemColuna: "$$id,ordem,titulo,descricao,finalizacao,demandas",
 Demanda: "$$id,dataI,dataF,titulo,descricao,coluna,prereqs,prioridade",
 Tarefa: "$$id,dataL,dataA,dataF,descricao,prioridade,dataLDate,dataADate,dataFDate"
}).upgrade(function (trans) {
 return trans.Tarefa.toCollection().modify(function (tarefa) {
  try {
   tarefa.dataLDate = moment(tarefa.dataL, "DD/MM/YYYY").toDate();
  } catch (e) {  }
  try {
   tarefa.dataADate = moment(tarefa.dataA, "DD/MM/YYYY").toDate();
  } catch (e) {  }
  try {
   tarefa.dataFDate = moment(tarefa.dataF, "DD/MM/YYYY").toDate();
  } catch (e) {  }
 });
});

/**
 * controla as atualizações em relacionamentos
 */
db.on('changes', function (changes) {
 changes.forEach(function (change) {
  switch (change.type) {
   case 1: // CREATED
    //console.log('An object was created: ' + JSON.stringify(change.obj));
    break;
   case 2: // UPDATED
    //console.log('An object with key ' + change.key + ' was updated with modifications: ' + JSON.stringify(change.mods));
    switch (change.table) {
     case 'GrupoReuniao':
      //atualiza o conteudo do grupo para cada reunião
      db.Reuniao.toCollection().modify(reuniao => {
       if (reuniao.grupo.id == change.obj.id) {
        reuniao.grupo = change.obj;
       }
      });
      break;
    }
    break;
   case 3: // DELETED
    //console.log('An object was deleted: ' + JSON.stringify(change.oldObj));
    switch (change.table) {
     case 'GrupoReuniao':
      //exclui as reuniões que são desse grupo
      db.transaction('rw', [db.Reuniao], function () {
       db.Reuniao.each(function (reuniao) {
        if (reuniao.grupo.id == change.oldObj.id) {
         db.Reuniao.delete(reuniao.id);
        }
       });
      });
      break;
    }
    break;
  }
 });
});

//db.open();

/**
 * cadastros iniciais
 */
db.DemColuna.where('titulo').equals('A fazer').count(function (c) {
 if (c === 0) {
  db.DemColuna.put({
   ordem: 0,
   titulo: 'A fazer',
   descricao: 'Demandas a serem feitas',
   finalizacao: false,
   demandas: []
  });
 }
});
db.DemColuna.where('titulo').equals('Fazendo').count(function (c) {
 if (c === 0) {
  db.DemColuna.put({
   ordem: 1,
   titulo: 'Fazendo',
   descricao: 'Demandas em desenvolvimento',
   finalizacao: false,
   demandas: []
  });
 }
});
db.DemColuna.where('titulo').equals('Feito').count(function (c) {
 if (c === 0) {
  db.DemColuna.put({
   ordem: 2,
   titulo: 'Feito',
   descricao: 'Demandas finalizadas',
   finalizacao: true,
   demandas: []
  });
 }
});


try {
 //persistência - chrome
 navigator.storage.persist();
} catch (e) {
 console.log("Erro ao persistir - Veja documentação em https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist");
 console.error(e);
}
