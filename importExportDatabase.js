//packages
//require('dexie-export-import');
//const toBlob = require('stream-to-blob');
const fileSystem = require('fs');

/**
 * usa a exportação com objeto vindo do front
 */
var export_database_front = async function export_database_front(datab) {
 console.log("Exporting Front Database");

 datab.transaction('r', datab.tables, () => {
  const p = Promise.all(
          datab.tables.map(function (table) {
           return table.toArray().then(function (rows) {
            return {'table': table.name, 'rows': rows};
           });
          }));
  p.then(function (r) {
   try {
    fileSystem.writeFile("ExportedDatabase.json", JSON.stringify(r), function (error) {
     if (error) {
      console.log(error);
     } else {
      alert("Dados exportados com sucesso. Verifique o arquivo ExportedDatabase.json");
     }
    });
   } catch (error) {
    console.error('' + error);
   }
   console.log("Exported");
  });
 });
};

var import_database_front = async function import_database_front(datab) {
 console.log("Importing Database");
 /*const stream = fileSystem.createReadStream("ExportedDatabase.json");
  console.log(stream);
  stream.on('data', function (d) {
  console.log(d);
  });*/
 fileSystem.readFile('ExportedDatabase.json', (err, data) => {
  if (err)
   throw err;
  let baseDados = JSON.parse(data);
  console.log(baseDados);
  datab.transaction('rw', datab.tables, () => {
   const p = Promise.all(baseDados.map(t =>
    datab.table(t.table).clear()
            .then(() => datab.table(t.table).bulkAdd(t.rows))));
   p.then(function () {
    alert("Dados importados com sucesso. Provenientes do arquivo ExportedDatabase.json");
   });
  });
 });
 console.log("Imported");
};

/**
 * read database file then convert it in a blob, lastly import blob into database
 */
var import_database = async function import_database() {
 console.log("Importing Database");
 /*const stream = fileSystem.createReadStream("ExportedDatabase.json");
  console.log(stream);
  stream.on('data', function (d) {
  console.log(d);
  });*/
 fileSystem.readFile('ExportedDatabase.json', (err, data) => {
  if (err)
   throw err;
  let baseDados = JSON.parse(data);
  console.log(baseDados);
 });
 console.log("Imported");
};

async function try_persist_without_promting_user() {
 if (!navigator.storage || !navigator.storage.persisted) {
  return "never";
 }
 let persisted = await navigator.storage.persisted();
 if (persisted) {
  return "persisted";
 }
 if (!navigator.permissions || !navigator.permissions.query) {
  return "prompt";
 }
 const permission = await navigator.permissions.query({name: "persistent-storage"});
 if (permission.status === "granted") {
  persisted = await navigator.storage.persist();
  if (persisted) {
   return "persisted";
  } else {
   throw new Error("Failed to persist");
  }
 }
 if (permission.status === "prompt") {
  return "prompt"; // It MAY be successful to prompt. Don't know.
 }
 return "never";
}

var init_storage_persistence = async function init_storage_persistence() {
 console.log("persisting data");
 const persist = await try_persist_without_promting_user();
 switch (persist) {
  case "never":
   return "Not possible to persist storage";
  case "persisted":
   return "Successfully persisted storage silently";
  case "prompt":
   return "Not persisted, but we may prompt user when we want to.";
 }
};

module.exports = {export_database_front, import_database_front, import_database, init_storage_persistence};