
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS "User" (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255),
  email VARCHAR(255),
  cpf VARCHAR(255),
  password VARCHAR(255)
);


CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE Category (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255),
  description VARCHAR(255)
);


CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE Product (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),	
  name VARCHAR(255),
  description VARCHAR(255),
  price NUMERIC,
  categoryId VARCHAR(255)
  image VARCHAR(255)
);  