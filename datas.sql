INSERT INTO owners (firstname, lastname, address, city, telephone) VALUES
('Pierre', 'Castrec', 'Chateau Hebert', 'Dinard', '066609990'),
('Jean', 'Poulidor', '15, rue St Beiber', 'Melun', '077770999'),
('Michel', 'Pilou', '21, avenue flique', 'Perdou', '0102030405');

INSERT INTO users (email, password, own_id) VALUES
('pcastrec@aol.com', 'unmotdepassehasher', 1),
('jeanpoulidor@aol.com', 'unautremotdepassehasher', 2);
('michelou@aol.com', 'unautremotdepassehasher', 3);

INSERT INTO types (name) VALUES
('Felin'),
('Canin'),
('Bovin'),
('Monotrèmes');

INSERT INTO pets (name, birthdate, type_id, owner_id) VALUES
('Lorni', '2018-03-26', 4, 1),
('Abmis', '2010-05-06', 1, 1),
('Woof', '2020-11-11', 2, 3);