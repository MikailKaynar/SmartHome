const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

const createDatabaseAndTable = () => {
  connection.query("CREATE DATABASE IF NOT EXISTS wiihom", (err) => {
    if (err) {
      console.error("Veritabanı oluşturma hatası:", err);
      return;
    }
    console.log("Veritabanı oluşturuldu veya mevcut.");

    connection.query("USE wiihom", (err) => {
      if (err) {
        console.error("Veritabanı seçme hatası:", err);
        return;
      }

      const createHomeTable = `
          CREATE TABLE IF NOT EXISTS home (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL UNIQUE)`;

      const createSensorTable = `
          CREATE TABLE IF NOT EXISTS sensortable (
          id INT PRIMARY KEY,
          selectedsensor VARCHAR(255))`;

      const createElectricBooleanTable = `
          CREATE TABLE IF NOT EXISTS electricbool (
          id INT PRIMARY KEY,
          isOpen BOOLEAN)`;

      const createHeatTable = `
          CREATE TABLE IF NOT EXISTS heattable (
          id INT PRIMARY KEY,
          heat FLOAT)`;

      const createScenarioslarTable = `
          CREATE TABLE IF NOT EXISTS scenarios (
            id INT AUTO_INCREMENT PRIMARY KEY,
            scenario VARCHAR(255) NOT NULL UNIQUE,
            durum BOOLEAN)`;

      const insertHomeData = `
          INSERT INTO home (name)
          VALUES ('Wiihom')
          ON DUPLICATE KEY UPDATE name = name`;

      const insertIsOpenData = `
          INSERT INTO electricbool (id,isOpen)
          VALUES (1,false)
          ON DUPLICATE KEY UPDATE isOpen = isOpen`;

      const insertSensorData = `
          INSERT INTO sensortable (id,selectedsensor)
          VALUES (1, "default")
          ON DUPLICATE KEY UPDATE selectedsensor = VALUES(selectedsensor)`;

      const insertHeatData = `
          INSERT INTO heattable (id,heat)
          VALUES (1, 0)
          ON DUPLICATE KEY UPDATE heat = VALUES(heat)`;

      const insertScenariosData = `
          INSERT INTO scenarios (scenario)
          VALUES 
            ('Tüm lambaları aç'),
            ('Tüm lambaları kapat'),
            ('Ben Gidiyorum'),
            ('Ben Geldim')
          ON DUPLICATE KEY UPDATE scenario = VALUES(scenario);
        `;

      connection.query(createHomeTable, (err) => {
        if (err) {
          console.error("Tablo oluşturma hatası:", err);
          return;
        }
        console.log("Tablo oluşturuldu veya mevcut.");

        connection.query(createElectricBooleanTable, (err) => {
          if (err) {
            console.error("Başlangıç verisi ekleme hatası:", err);
            return;
          }
          console.log("Başlangıç verisi eklendi veya mevcut.");
        });

        connection.query(createSensorTable, (err) => {
          if (err) {
            console.error("Başlangıç verisi ekleme hatası:", err);
            return;
          }
          console.log("Başlangıç verisi eklendi veya mevcut.");
        });

        connection.query(createHeatTable, (err) => {
          if (err) {
            console.error("Başlangıç verisi ekleme hatası:", err);
            return;
          }
          console.log("Başlangıç verisi eklendi veya mevcut.");
        });

        connection.query(createScenarioslarTable, (err) => {
          if (err) {
            console.error("Başlangıç verisi ekleme hatası:", err);
            return;
          }
          console.log("Başlangıç verisi eklendi veya mevcut.");
        });

        connection.query(insertHomeData, (err) => {
          if (err) {
            console.error("HomeData ekleme veya güncelleme hatası:", err);
            return;
          }
          console.log(" eklendi veya mevcut.");
        });
        connection.query(insertSensorData, (err) => {
          if (err) {
            console.error("SensorData ekleme veya güncelleme hatası:", err);
            return;
          }
          console.log(" eklendi veya güncellendi.");
        });

        connection.query(insertIsOpenData, (err) => {
          if (err) {
            console.error("isOpen ekleme veya güncelleme hatası:", err);
            return;
          }
          console.log(" verisi eklendi veya mevcut");
        });

        connection.query(insertHeatData, (err) => {
          if (err) {
            console.error("HeatData ekleme veya güncelleme hatası:", err);
            return;
          }
          console.log(" eklendi veya güncellendi.");
        });

        connection.query(insertScenariosData, (err) => {
          if (err) {
            console.error("ScenariosData ekleme veya güncelleme hatası:", err);
            return;
          }
          console.log(" eklendi veya güncellendi.");
        });
      });
    });
  });
};

createDatabaseAndTable();

app.get("/get-room", (req, res) => {
  connection.query(
    "SELECT name FROM home WHERE name = 'Wiihom'",
    (err, results) => {
      if (err) {
        console.error("Veri çekme hatası:", err);
        res.status(500).send("Veri çekme hatası");
        return;
      }
      if (results.length > 0) {
        res.json({ name: results[0].name });
      } else {
        res.status(404).send("Oda bulunamadı");
      }
    }
  );
});

app.get("/get-electricbool", (req, res) => {
  connection.query(
    "SELECT isOpen FROM electricbool WHERE id = 1",
    (err, results) => {
      if (err) {
        console.error("Veri çekme hatası:", err);
        res.status(500).send("Veri çekme hatası");
        return;
      }
      if (results.length > 0) {
        res.json({ isOpen: results[0].isOpen });
      }
    }
  );
});

app.get("/get-selectedsensor", (req, res) => {
  connection.query(
    "SELECT selectedSensor FROM sensortable WHERE id = 1",
    (err, results) => {
      if (err) {
        console.error("Veri çekme hatası:", err);
        res.status(500).send("Veri çekme hatası");
        return;
      }
      if (results.length > 0) {
        res.json({ selectedSensor: results[0].selectedSensor });
      }
    }
  );
});

app.get("/get-heat", (req, res) => {
  connection.query(
    "SELECT heat FROM heattable WHERE id = 1",
    (err, results) => {
      if (err) {
        console.error("Veri çekme hatası:", err);
        res.status(500).send("Veri çekme hatası");
        return;
      }
      if (results.length > 0) {
        res.json({ heat: results[0].heat });
      }
    }
  );
});

app.get("/get-scenario", (req, res) => {
  const query = "SELECT * FROM scenarios LIMIT 4";

  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ scenario: results });
  });
});

app.post("/update-electricbool", (req, res) => {
  const { isOpen } = req.body;
  connection.query(
    "UPDATE electricbool SET isOpen = ? WHERE id = 1",
    [isOpen],
    (err) => {
      if (err) {
        console.error("electricbool Veri güncelleme hatası:", err);
        res.status(500).send("electricbool Veri güncelleme hatası");
        return;
      }
      res.send("electricbool Veri güncellendi");
    }
  );
});

app.post("/update-sensor", (req, res) => {
  const { selectedsensor } = req.body;
  connection.query(
    "UPDATE sensortable SET selectedsensor = ? WHERE id = 1",
    [selectedsensor],
    (err) => {
      if (err) {
        console.error("Sensor Veri güncelleme hatası:", err);
        res.status(500).send("Sensor Veri güncelleme hatası");
        return;
      }
      res.send("Sensor Veri güncellendi");
    }
  );
});

app.post("/update-heat", (req, res) => {
  const { heat } = req.body;
  connection.query(
    "UPDATE heattable SET heat = ? WHERE id = 1",
    [heat],
    (err) => {
      if (err) {
        console.error("Heat Veri güncelleme hatası:", err);
        res.status(500).send("Heat Veri güncelleme hatası");
        return;
      }
      res.send("Heat Veri güncellendi");
    }
  );
});

app.post("/update-scenario", (req, res) => {
  const { id, durum } = req.body;
  console.log("Gelen veri:", req.body);
  connection.query(
    "UPDATE scenarios SET durum = ? WHERE id = ?",
    [durum, id],
    (err) => {
      if (err) {
        console.error("Senaryo Veri güncelleme hatası:", err);
        res.status(500).send("Senaryo Veri güncelleme hatası");
        return;
      }
      res.send("Senaryo Veri güncellendi");
    }
  );
});

app.listen(port, () => {
  console.log(`Server çalışıyor http://localhost:${port}`);
});
