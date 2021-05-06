/*
 * usado para integrar o processo do nodejs para exportar a base de dados
 * processo automatizado que sempre exporta (backup) quando abre o programa
 */
var importExportDB = require("../importExportDatabase");

//usado para importar os dados
//importExportDB.import_database();

//exporta o objeto db que existe no frontend
//importExportDB.export_database_front(db);


var isPersisted = importExportDB.init_storage_persistence();
isPersisted.then(function (value) {
 console.log('--> ' + value);
});

var exportar = async function exportar() {
//exporta o objeto db que existe no frontend
 importExportDB.export_database_front(db);
};

var importar = async function importar() {
//exporta o objeto db que existe no frontend
 importExportDB.import_database_front(db);
};

module.exports = {exportar, importar};

