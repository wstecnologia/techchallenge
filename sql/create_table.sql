create extension if not exists "uuid-ossp";

create table IF NOT EXISTS Customers (
	id uuid primary key NOT NULL,
	name varchar(255) not null,
	email varchar(255) null,
	cpf varchar(11) not null,
  active boolean DEFAULT true
);

create table IF NOT EXISTS Situactions (
 id uuid primary key NOT NULL,
 description varchar(255) not null,
 active boolean DEFAULT true
);

CREATE TABLE IF NOT EXISTS Category (
  id uuid PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  description VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Product (
  id uuid PRIMARY KEY ,
  name VARCHAR(255),
  description VARCHAR(255),
  price NUMERIC,
  categoryId uuid not null,
  image VARCHAR(255),
  foreign key (categoryId) references Category (id)
);

create table IF NOT EXISTS Orders (
  id uuid NOT NULL,
  number integer NOT NULL,
  dataCreated timestamp NOT NULL,
  customerId uuid NOT NULL,
  situationId uuid NOT NULL,
  observation varchar(500) null,
  foreign key (customerId) references Customers (id),
  foreign key (situationId) references Situactions (id)
);

create table IF NOT EXISTS OrdersItems (
	id uuid primary key,
	numberOrder integer not null,
	productId uuid not null,
	productDescription varchar(255) not null,
	productPrice float not null,
	active boolean DEFAULT true,
	dataCreated timestamp NOT NULL,
  foreign key (productId) references Product (id)
);
