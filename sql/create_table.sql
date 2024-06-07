create extension if not exists "uuid-ossp";

create table IF NOT EXISTS Customers (
	id uuid primary key NOT NULL,
	name varchar(255) not null,
	email varchar(255) null,
	cpf varchar(11) not null,
  active boolean DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table IF NOT EXISTS Situations (
  id uuid primary key NOT NULL,
  description varchar(255) not null,
  active boolean DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Category (
  id uuid PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  description VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Product (
  id uuid PRIMARY KEY ,
  name VARCHAR(255),
  description VARCHAR(255),
  price NUMERIC,
  categoryId uuid not null,
  image VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  foreign key (categoryId) references Category (id)
);

create table IF NOT EXISTS Orders (
  id uuid NOT NULL,
  number integer NOT NULL,
  dataCreated timestamp NOT NULL,
  customerId uuid NOT NULL,
  situationId uuid NOT NULL,
  observation varchar(500) null,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
  foreign key (customerId) references Customers (id),
  foreign key (situationId) references Situations (id)
);

create table IF NOT EXISTS OrdersItems (
	id uuid primary key,
	numberOrder integer not null,
	productId uuid not null,
  quantity integer not null DEFAULT 0, 	
	productDescription varchar(255) not null,
	productPrice float not null,
	active boolean DEFAULT true,
	dataCreated timestamp NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  foreign key (productId) references Product (id),
  foreign key (numberOrder) references Orders (number)
);

CREATE TABLE IF NOT EXISTS Payments (
    id uuid PRIMARY KEY,
    orderId uuid NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (orderId) REFERENCES orders(id)
);