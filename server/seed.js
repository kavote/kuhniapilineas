const fs = require('fs');
const path = require('path');
const faker = require('faker');

function crearLineas(limit = 5) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const linea = faker.name.linea();
    const usuario = faker.name.usario();
    const usufecha = faker.name.usario();
    const usuhora = faker.name.usuhora();
    const numero = faker.name.numero();

    result.push({
      _id: faker.random.uuid(),
      linea,
      usuario,
      usufecha,
      usuhora,
      numero,
    });
  }

  return result;
}

function main() {
  const data = {
    lineas: crearLineas(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, 'db.json'),
    JSON.stringify(data, null, 4)
  );
}

main();
