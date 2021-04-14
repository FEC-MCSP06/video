CREATE DATABASE notYoutube

-- psql into database


CREATE TABLE videos (
    id serial,
    name text,
    view_count int,
    video_key int,
    created_on text,
    likes int,
    dislikes int,
    publisher text,
    discription text
);