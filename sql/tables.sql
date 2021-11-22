create table Cape_Town(
    region_id serial not null primary key,
    region text not null,
    Routes text not null,
    fare int,
    startstring varchar(50) not null
);
create table Gauteng(
    region_id serial not null primary key,
    region text not null,
    Routes text not null,
    fare int,
    startstring varchar(50) not null
);
create table Durban(
    region_id serial not null primary key,
    region text not null,
    Routes text not null,
    fare int,
    startstring varchar(50) not null
);
create table Taxi(
    id serial not null primary key,
	registration varchar(50) not null,
	registration_id int,
    foreign key (registration_id) references Cape_Town(region_id),
    foreign key (registration_id) references Gauteng(region_id),
    foreign key (registration_id) references Durban(region_id)

);

insert into Cape_Town(region,Routes,fare,startstring) values ('Cape Town','Cape Town - Bellville',10,'CA');
insert into Cape_Town(region,Routes,fare,startstring) values ('Cape Town','Cape Town - Gugulethu',20,'CA');
insert into Cape_Town(region,Routes,fare,startstring) values ('Cape Town','Cape Town - Langa',10,'CA');

insert into Gauteng(region,Routes,fare,startstring) values ('Gauteng','Sandton - Randburg',20,'GP');
insert into Gauteng(region,Routes,fare,startstring) values ('Gauteng','Alexandra - Sandton',10,'GP');
insert into Gauteng(region,Routes,fare,startstring) values ('Gauteng','Sandton - Midrand',20,'GP');

insert into Durban(region,Routes,fare,startstring) values ('Durban','Umlazi - Durban Central',20,'ZN');
insert into Durban(region,Routes,fare,startstring) values ('Durban','Durban Central - Umhlanga Rocks',10,'ZN');
insert into Durban(region,Routes,fare,startstring) values ('Durban','Durban Central - Umbilo',20,'ZN');




