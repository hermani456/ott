CREATE DATABASE orden_trabajo;

CREATE TABLE ot (
   ot INTEGER PRIMARY KEY,
   referencia VARCHAR(100),
   tipo_documento VARCHAR(250),
   fecha_ingreso DATE,
   fecha_entrega DATE,
   estado VARCHAR(15),
   observaciones VARCHAR(250)
);

insert into ot values (456, 'perico los palotes', 'fines de reinscripcion', '01/01/2020', '01/01/2020', 'rechazado', 'rechazo por weon');