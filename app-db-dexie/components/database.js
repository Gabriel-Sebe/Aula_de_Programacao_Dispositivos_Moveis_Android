import dexie from "dexie";

const db = new dexie("nossodb");
db.version(1).stores({
  usuarios: "++id, nome, idade",
});

export default db;