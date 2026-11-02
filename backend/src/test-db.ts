import sequelize from "./config/database";

async function testConneccion(): Promise<void> {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la BD exitosa");
  } catch (error) {
    console.error("Error al conectar a la DB:", error);
  } finally {
    await sequelize.close();
  }
}

testConneccion();