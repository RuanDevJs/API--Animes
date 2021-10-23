CREATE DATABASE "my-gameplay";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users(
    id UUID UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    img_perfil VARCHAR(255)
);

INSERT INTO users(name, password) VALUES('Ace', 'Whitebeard123');
INSERT INTO users(name, password) VALUES('Luffy', 'Shanks123');
INSERT INTO users(name, password) VALUES('Sabo', 'Dragon123');

CREATE TABLE IF NOT EXISTS gameplays(
    id UUID UNIQUE NOT NULL DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    video VARCHAR(255) NOT NULL,
    user_id UUID,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

INSERT INTO gameplays(title, description, video, user_id)
VALUES(
    'Doind 4k in R6',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'https://firebasestorage.googleapis.com/v0/b/my-gameplays.appspot.com/o/b0643b2f-8c3d-4ef1-97c1-aab60e732557%2Fgameplays%2Fakira.jpg?alt=media&token=4584ac55-c947-4520-8538-e8b49489c4d5',
    'a26e481c-4ace-4762-aa7a-137520c1647e');

INSERT INTO gameplays(title, description, video, user_id)
VALUES(
    'Doind 4k in R6',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'https://firebasestorage.googleapis.com/v0/b/my-gameplays.appspot.com/o/b0643b2f-8c3d-4ef1-97c1-aab60e732557%2Fgameplays%2Fvlbbd455y5861.jpg?alt=media&token=7d0402d4-b471-4261-89bd-f9f6e7e01691',
    'a26e481c-4ace-4762-aa7a-137520c1647e');


