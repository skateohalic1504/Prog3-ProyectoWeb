create database database_jobs

use database_jobs

--Users Table
Create table users(
    id int(11) not null, 
    username varchar(16) not null,
    password varchar(60) not null,
    fullname varchar(100) not null,
    email varchar(100) not null,
    tipo varchar(15) not null
)

alter table users
add primary key(id);

alter table users 
 MODIFY id Int(11) not null auto_increment, auto_increment = 2;

describe users;

-- JobsPost Table
Create table jobs(
    id int(11) not null,
company varchar(100) not null, 
tipo varchar(15) not null,
logo LONGBLOB,
 url varchar(255) ,
 position varchar(50) not null,
 ubicacion varchar(200) not null,
 category varchar(50) not null, 
 description TEXT not null,
 user_id int(11),
 created_at timestamp not null default CURRENT_TIMESTAMP,
 constraint fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE jobs
ADD PRIMARY KEY (id);
