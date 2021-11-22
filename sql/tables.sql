create table Regions(
    region_id serial not null primary key,
    region text not null
    
);

create table Routes(
    routes_id serial not null primary key,
    Routes text not null,
    fare int,
    startstring varchar(50) not null,
    region_id int,
    -- passengers init,
    foreign key (region_id) references Regions(region_id)

);


create table Taxi(
    taxi_id serial not null primary key,
	registration varchar(50) not null,
	routes_id int,
    foreign key (routes_id) references Routes(routes_id)

);
create table Trips(
    trip_id serial not null primary key,
    taxi_id int,
    routes_id int,

    foreign key (taxi_id) references Taxi(taxi_id),
    foreign key (routes_id) references Routes(routes_id)

    
);
insert into Regions(region) values ('Cape Town');
insert into Regions(region) values ('Gauteng');
insert into Regions(region) values ('Durban');

insert into Routes(Routes,fare,startstring,region_id) values ('Cape Town - Bellville',10,'CA',1);
insert into Routes(Routes,fare,startstring,region_id) values ('Cape Town - Gugulethu',20,'CA',1);
insert into Routes(Routes,fare,startstring,region_id) values ('Cape Town - Langa',10,'CA',1);

insert into Routes(Routes,fare,startstring,region_id) values ('Sandton - Randburg',20,'GP',2);
insert into Routes(Routes,fare,startstring,region_id) values ('Alexandra - Sandton',10,'GP',2);
insert into Routes(Routes,fare,startstring,region_id) values ('Sandton - Midrand',20,'GP',2);

insert into Routes(Routes,fare,startstring,region_id) values ('Umlazi - Durban Central',20,'ZN',3);
insert into Routes(Routes,fare,startstring,region_id) values ('Durban Central - Umhlanga Rocks',10,'ZN',3);
insert into Routes(Routes,fare,startstring,region_id) values ('Durban Central - Umbilo',20,'ZN',3);

insert into Taxi(registration,routes_id) values ('CA 123-123',1);
insert into Taxi(registration,routes_id) values ('CA 00126',2);
insert into Taxi(registration,routes_id) values ('CA 123 166',3);

insert into Taxi(registration,routes_id) values ('ZN 127 100',7);


insert into Taxi(registration,routes_id) values ('GP 123 166',4);
insert into Taxi(registration,routes_id) values ('ZN 1166',8);
insert into Taxi(registration,routes_id) values ('ZN 123-11',9);

insert into Taxi(registration,routes_id) values ('GP 123-166',5);
insert into Taxi(registration,routes_id) values ('GP 1236',6);



insert into Trips(taxi_id,routes_id) values(1,1);
insert into Trips(taxi_id,routes_id) values(1,1);
insert into Trips(taxi_id,routes_id) values(1,1);

insert into Trips(taxi_id,routes_id) values(2,2);
insert into Trips(taxi_id,routes_id) values(2,2);
insert into Trips(taxi_id,routes_id) values(2,2);

insert into Trips(taxi_id,routes_id) values(3,3);
insert into Trips(taxi_id,routes_id) values(3,3);
insert into Trips(taxi_id,routes_id) values(3,3);

insert into Trips(taxi_id,routes_id) values(4,7);
insert into Trips(taxi_id,routes_id) values(4,7);
insert into Trips(taxi_id,routes_id) values(4,7);


insert into Trips(taxi_id,routes_id) values(5,4);
insert into Trips(taxi_id,routes_id) values(5,4);
insert into Trips(taxi_id,routes_id) values(5,4);

insert into Trips(taxi_id,routes_id) values(6,8);
insert into Trips(taxi_id,routes_id) values(6,8);
insert into Trips(taxi_id,routes_id) values(6,8);

insert into Trips(taxi_id,routes_id) values(7,9);
insert into Trips(taxi_id,routes_id) values(7,9);
insert into Trips(taxi_id,routes_id) values(7,9);

insert into Trips(taxi_id,routes_id) values(8,5);
insert into Trips(taxi_id,routes_id) values(8,5);
insert into Trips(taxi_id,routes_id) values(8,5);

insert into Trips(taxi_id,routes_id) values(9,6);
insert into Trips(taxi_id,routes_id) values(9,6);
insert into Trips(taxi_id,routes_id) values(9,6);
















 





