CREATE DATABASE ucode_web;

CREATE USER 'abondar'@'localhost' IDENTIFIED BY 'securepass'; 
GRANT ALL ON ucode_web.* TO 'abondar'@'localhost';

