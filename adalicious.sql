-- Dessin de la base de données fait sur drawSQL : 
-- https://drawsql.app/teams/-3574/diagrams/adalicious

-- Création table dishes :
CREATE TABLE dishes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    dish_name TEXT NOT NULL,
    price INTEGER NOT NULL
);

-- Création table orders qui comprend la FK vers dishes :
CREATE TABLE orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    dish_id INTEGER,
    created_at DATETIME NOT NULL,
    FOREIGN KEY(dish_id) REFERENCES dishes(id) 
);

-- Ajout de plats dans dishes :
INSERT INTO dishes (dish_name, price) VALUES
    ('Hello World Burger', 10),
    ('404 Not Found Fries', 4),
    ('JSON Nuggets', 8),
    ('Front-End Salad', 9),
    ('Git Pull Tacos', 8),
    ('Back-End Brownie', 6),
    ('HTTPS Milkshake', 5);

-- Ajout de commandes dans orders : 
INSERT INTO orders (dish_id, created_at) VALUES
    (1, '2025-04-05 11:55');

INSERT INTO orders (dish_id, created_at) VALUES
    (3, '2025-04-05 12:02');

INSERT INTO orders (dish_id, created_at) VALUES
    (2, '2025-04-05 12:04');

INSERT INTO orders (dish_id, created_at) VALUES
    (4, '2025-04-05 12:05');