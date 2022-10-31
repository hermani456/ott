CREATE DATABASE orden_trabajo;

CREATE TABLE ot (
   ot INTEGER PRIMARY KEY,
   referencia VARCHAR(100),
   tipo_documento VARCHAR(250),
   fecha_ingreso DATE,
   fecha_entrega DATE,
   estado VARCHAR(15),
   observaciones VARCHAR(250),
   rut INTEGER
);

insert into ot values (456, 'isisis', 'asd', '01/01/2020', '01/01/2020', 'asd', 'asd', 1234567);