CREATE DATABASE tcitchallenge;

CREATE TABLE post(
    post_id SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    descripcion VARCHAR(255)
);