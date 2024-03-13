import { connection } from "./client";

export async function InitDatabase() {
  await connection.query(`
    CREATE DATABASE IF NOT EXISTS burger_app
    `);

  await connection.query(`USE burger_app`);

  await connection.query(`
    CREATE TABLE IF NOT exists ingredient(
        ing_id INT AUTO_INCREMENT,
        name VARCHAR(30) NOT NULL,
        quantity INT NOT NULL,
        description VARCHAR(150),
        PRIMARY KEY (ing_id)
    )`);

  await connection.query(`
    CREATE TABLE IF NOT EXISTS burger(
      burger_id INT AUTO_INCREMENT,
      name VARCHAR(20) NOT NULL,
      description VARCHAR(250) NOT NULL,
      PRIMARY KEY (burger_id)
    )`);

  await connection.query(`
    CREATE TABLE IF NOT EXISTS requires(
      ing_id INT,
      burger_id INT,
      ing_quantity INT NOT NULL,
      PRIMARY KEY(ing_id, burger_id),
      FOREIGN KEY(ing_id) REFERENCES ingredient(ing_id) ON DELETE CASCADE,
      FOREIGN KEY(burger_id) REFERENCES burger(burger_id) ON DELETE CASCADE
    )`);

  await connection.query(`
    CREATE TABLE IF NOT EXISTS purchase(
      purchase_id INT AUTO_INCREMENT,
      burger_id INT,
      customer_name VARCHAR(20) NOT NULL,
      datetime DATETIME DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (purchase_id),
      FOREIGN KEY(burger_id) REFERENCES burger(burger_id) ON DELETE CASCADE
    )`);

  await connection.query(`
      INSERT IGNORE INTO ingredient 
      (name, quantity, description)
      VALUES
          ('pickles', 300, 'grams'),
          ('onion', 500, 'grams'), 
          ('bun', 30, 'units'),  
          ('tomato', 500, 'grams'), 
          ('ketchup', 500, 'grams'),  
          ('lettuce', 500, 'grams'), 
          ('egg', 20, 'units'),  
          ('beef', '500', 'grams'),  
          ('cheese', 250, 'grams'),  
          ('chicken', 500, 'grams'), 
          ('fish', 500, 'grams'), 
          ('fish sauce', 200, 'ml'), 
          ('mustard', 300, 'grams'), 
          ('mayo', 300, 'grams')
    `);

  await connection.query(`
    INSERT IGNORE INTO burger 
    (name, description)
      VALUES
        ('standard burger', 'a mouth watering honest beef burger'),
        ('chicken burger', 'a chicken sandwich consisting of boneless, skinless chicken breast, served between slices of bread'),
        ('fish burger', 'a homemade fish burger with a crunchy crumb, healthy and packed with flavour')
  `);

  await connection.query(`
    INSERT IGNORE INTO requires 
    (ing_id, burger_id, ing_quantity)
      VALUES
        (8,1,150), 
        (9,1,20),  
        (13,1,20), 
        (1,1,30),  
        (6,1,20),  
        (3,1,2)  
  `);

  await connection.query(`
    INSERT IGNORE INTO requires 
    (ing_id, burger_id, ing_quantity)
        VALUES
          (3,2,2), 
          (10,2,150),  
          (6,2,20), 
          (14,2,20), 
          (9,2,20),  
          (4,2,40)
  `);

  await connection.query(`
    INSERT IGNORE INTO requires 
    (ing_id, burger_id, ing_quantity)
      VALUES
        (3,3,2), 
        (11,3,150),  
        (6,3,20), 
        (14,3,30),  
        (4,3,20),  
        (12,3,50)
  `);

  await connection.query(`
    INSERT IGNORE INTO purchase
    (burger_id, customer_name)
      VALUES
        (1, 'Mary Williams'),
        (2, 'John Taylor'),
        (3, 'Simon Miller'),
        (1, 'Suzy Jones')
  `);
}
