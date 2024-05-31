--delete from category;
-- Categorias de Lanche
INSERT INTO public.category (id, name, description) VALUES 
(uuid_generate_v4(), 'Hambúrguer', 'Hambúrguer clássico com carne, queijo e alface'),
(uuid_generate_v4(), 'Cheeseburger', 'Hambúrguer com queijo cheddar derretido'),
(uuid_generate_v4(), 'X-Bacon', 'Hambúrguer com bacon crocante e queijo'),
(uuid_generate_v4(), 'Veggie Burger', 'Hambúrguer vegetariano com grão-de-bico'),
(uuid_generate_v4(), 'Chicken Sandwich', 'Sanduíche de frango empanado com maionese');

-- Categorias de Acompanhamento
INSERT INTO public.category (id, name, description) VALUES 
(uuid_generate_v4(), 'Batata Frita', 'Batata frita crocante e salgada'),
(uuid_generate_v4(), 'Onion Rings', 'Anéis de cebola empanados e fritos'),
(uuid_generate_v4(), 'Salada Caesar', 'Salada Caesar com frango e croutons'),
(uuid_generate_v4(), 'Palitos de Mozzarella', 'Palitos de queijo mozzarella empanados'),
(uuid_generate_v4(), 'Nuggets de Frango', 'Nuggets de frango crocantes');

-- Categorias de Bebida
INSERT INTO public.category (id, name, description) VALUES 
(uuid_generate_v4(), 'Refrigerante', 'Refrigerante de cola ou guaraná'),
(uuid_generate_v4(), 'Suco Natural', 'Suco de laranja, limão ou abacaxi'),
(uuid_generate_v4(), 'Água Mineral', 'Água mineral com ou sem gás'),
(uuid_generate_v4(), 'Chá Gelado', 'Chá gelado de limão ou pêssego'),
(uuid_generate_v4(), 'Milkshake', 'Milkshake de chocolate, morango ou baunilha');

-- Categorias de Sobremesa
INSERT INTO public.category (id, name, description) VALUES 
(uuid_generate_v4(), 'Sorvete', 'Sorvete de creme, chocolate ou morango'),
(uuid_generate_v4(), 'Brownie', 'Brownie de chocolate com nozes'),
(uuid_generate_v4(), 'Torta de Maçã', 'Torta de maçã com massa crocante'),
(uuid_generate_v4(), 'Cheesecake', 'Cheesecake de frutas vermelhas'),
(uuid_generate_v4(), 'Mousse de Chocolate', 'Mousse de chocolate cremoso');
