import { config } from "dotenv";
config();
const datebase = 'P2PBinance'
//const datebase = 'jaenvios'
export default {
  PORT: process.env.PORT || 5000,
  APPID: process.env.APPID || "",
  BD: {
    user: 'javierbata',
    password: 'Aaron.30',
    server: 'tradingp2p.database.windows.net',
    database: datebase,
    options: {
      encrypt: true, // Si estás utilizando Azure, establece esto en true
    },
    pool: {
      max: 200, // Número máximo de conexiones en el pool
      min: 0,   // Número mínimo de conexiones en el pool
      idleTimeoutMillis: 30000, // Tiempo en milisegundos que una conexión puede permanecer inactiva antes de ser cerrada
    }
  },

  
  BACKENDNUBE:  "https://botluiscasanova.azurewebsites.net/",
  BACKENDLOCAL: "http://localhost:5000"

};
