CREATE DATABASE notYoutube

-- psql into database

-- only table used
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

-- insert into template
INSERT INTO videos (name,view_count,video_key,created_on,likes,dislikes,publisher,discription) VALUES ('name',0,1,'created on',0,0,'publisher','discription');