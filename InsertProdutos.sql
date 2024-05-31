-- Produtos para a categoria 'Hambúrguer'
INSERT INTO public.product (id, name, description, price, categoryId, image) VALUES 
(uuid_generate_v4(), 'Hambúrguer Clássico', 'Hambúrguer clássico com carne, queijo e alface', 15.99, (SELECT id FROM public.category WHERE name = 'Hambúrguer'), 'images/hamburguer_classico.jpg'),
(uuid_generate_v4(), 'Hambúrguer Especial', 'Hambúrguer com carne, queijo, alface e molho especial', 17.99, (SELECT id FROM public.category WHERE name = 'Hambúrguer'), 'images/hamburguer_especial.jpg'),
(uuid_generate_v4(), 'Hambúrguer de Frango', 'Hambúrguer com filé de frango grelhado', 14.99, (SELECT id FROM public.category WHERE name = 'Hambúrguer'), 'images/hamburguer_frango.jpg'),
(uuid_generate_v4(), 'Hambúrguer com Cogumelos', 'Hambúrguer com carne e cogumelos frescos', 18.99, (SELECT id FROM public.category WHERE name = 'Hambúrguer'), 'images/hamburguer_cogumelos.jpg'),
(uuid_generate_v4(), 'Hambúrguer BBQ', 'Hambúrguer com carne, queijo e molho barbecue', 16.99, (SELECT id FROM public.category WHERE name = 'Hambúrguer'), 'images/hamburguer_bbq.jpg'),
(uuid_generate_v4(), 'Hambúrguer Picante', 'Hambúrguer com carne, queijo e molho picante', 17.99, (SELECT id FROM public.category WHERE name = 'Hambúrguer'), 'images/hamburguer_picante.jpg'),
(uuid_generate_v4(), 'Hambúrguer de Costela', 'Hambúrguer com carne de costela desfiada', 19.99, (SELECT id FROM public.category WHERE name = 'Hambúrguer'), 'images/hamburguer_costela.jpg'),
(uuid_generate_v4(), 'Mini Hambúrguer', 'Mini hambúrguer ideal para crianças', 8.99, (SELECT id FROM public.category WHERE name = 'Hambúrguer'), 'images/mini_hamburguer.jpg'),
(uuid_generate_v4(), 'Hambúrguer com Bacon', 'Hambúrguer com carne, queijo e bacon', 18.99, (SELECT id FROM public.category WHERE name = 'Hambúrguer'), 'images/hamburguer_bacon.jpg'),
(uuid_generate_v4(), 'Hambúrguer de Peru', 'Hambúrguer com carne de peru', 16.99, (SELECT id FROM public.category WHERE name = 'Hambúrguer'), 'images/hamburguer_peru.jpg');

-- Produtos para a categoria 'Cheeseburger'
INSERT INTO public.product (id, name, description, price, categoryId, image) VALUES 
(uuid_generate_v4(), 'Cheeseburger Clássico', 'Hambúrguer com queijo cheddar derretido', 14.99, (SELECT id FROM public.category WHERE name = 'Cheeseburger'), 'images/cheeseburger_classico.jpg'),
(uuid_generate_v4(), 'Cheeseburger Duplo', 'Dois hambúrgueres com queijo cheddar derretido', 19.99, (SELECT id FROM public.category WHERE name = 'Cheeseburger'), 'images/cheeseburger_duplo.jpg'),
(uuid_generate_v4(), 'Cheeseburger com Bacon', 'Hambúrguer com queijo cheddar e bacon crocante', 17.99, (SELECT id FROM public.category WHERE name = 'Cheeseburger'), 'images/cheeseburger_bacon.jpg'),
(uuid_generate_v4(), 'Cheeseburger BBQ', 'Hambúrguer com queijo cheddar e molho barbecue', 16.99, (SELECT id FROM public.category WHERE name = 'Cheeseburger'), 'images/cheeseburger_bbq.jpg'),
(uuid_generate_v4(), 'Cheeseburger Picante', 'Hambúrguer com queijo cheddar e molho picante', 16.99, (SELECT id FROM public.category WHERE name = 'Cheeseburger'), 'images/cheeseburger_picante.jpg'),
(uuid_generate_v4(), 'Cheeseburger com Cogumelos', 'Hambúrguer com queijo cheddar e cogumelos', 18.99, (SELECT id FROM public.category WHERE name = 'Cheeseburger'), 'images/cheeseburger_cogumelos.jpg'),
(uuid_generate_v4(), 'Cheeseburger de Frango', 'Hambúrguer de frango com queijo cheddar', 15.99, (SELECT id FROM public.category WHERE name = 'Cheeseburger'), 'images/cheeseburger_frango.jpg'),
(uuid_generate_v4(), 'Cheeseburger Vegetariano', 'Hambúrguer vegetariano com queijo cheddar', 16.99, (SELECT id FROM public.category WHERE name = 'Cheeseburger'), 'images/cheeseburger_vegetariano.jpg'),
(uuid_generate_v4(), 'Mini Cheeseburger', 'Mini cheeseburger ideal para crianças', 7.99, (SELECT id FROM public.category WHERE name = 'Cheeseburger'), 'images/mini_cheeseburger.jpg'),
(uuid_generate_v4(), 'Cheeseburger com Abacate', 'Hambúrguer com queijo cheddar e fatias de abacate', 18.99, (SELECT id FROM public.category WHERE name = 'Cheeseburger'), 'images/cheeseburger_abacate.jpg');

-- Produtos para a categoria 'X-Bacon'
INSERT INTO public.product (id, name, description, price, categoryId, image) VALUES 
(uuid_generate_v4(), 'X-Bacon Clássico', 'Hambúrguer com bacon crocante e queijo', 16.99, (SELECT id FROM public.category WHERE name = 'X-Bacon'), 'images/x_bacon_classico.jpg'),
(uuid_generate_v4(), 'X-Bacon Duplo', 'Dois hambúrgueres com bacon crocante e queijo', 21.99, (SELECT id FROM public.category WHERE name = 'X-Bacon'), 'images/x_bacon_duplo.jpg'),
(uuid_generate_v4(), 'X-Bacon BBQ', 'Hambúrguer com bacon crocante, queijo e molho barbecue', 18.99, (SELECT id FROM public.category WHERE name = 'X-Bacon'), 'images/x_bacon_bbq.jpg'),
(uuid_generate_v4(), 'X-Bacon Picante', 'Hambúrguer com bacon crocante, queijo e molho picante', 18.99, (SELECT id FROM public.category WHERE name = 'X-Bacon'), 'images/x_bacon_picante.jpg'),
(uuid_generate_v4(), 'X-Bacon com Cogumelos', 'Hambúrguer com bacon crocante, queijo e cogumelos', 20.99, (SELECT id FROM public.category WHERE name = 'X-Bacon'), 'images/x_bacon_cogumelos.jpg'),
(uuid_generate_v4(), 'X-Bacon de Frango', 'Hambúrguer de frango com bacon crocante e queijo', 17.99, (SELECT id FROM public.category WHERE name = 'X-Bacon'), 'images/x_bacon_frango.jpg'),
(uuid_generate_v4(), 'X-Bacon Vegetariano', 'Hambúrguer vegetariano com bacon vegetal crocante e queijo', 19.99, (SELECT id FROM public.category WHERE name = 'X-Bacon'), 'images/x_bacon_vegetariano.jpg'),
(uuid_generate_v4(), 'X-Bacon com Abacate', 'Hambúrguer com bacon crocante, queijo e fatias de abacate', 20.99, (SELECT id FROM public.category WHERE name = 'X-Bacon'), 'images/x_bacon_abacate.jpg'),
(uuid_generate_v4(), 'Mini X-Bacon', 'Mini hambúrguer com bacon crocante e queijo, ideal para crianças', 9.99, (SELECT id FROM public.category WHERE name = 'X-Bacon'), 'images/mini_x_bacon.jpg'),
(uuid_generate_v4(), 'X-Bacon com Ovo', 'Hambúrguer com bacon crocante, queijo e ovo frito', 19.99, (SELECT id FROM public.category WHERE name = 'X-Bacon'), 'images/x_bacon_ovo.jpg');

-- Produtos para a categoria 'Veggie Burger'
INSERT INTO public.product (id, name, description, price, categoryId, image) VALUES 
(uuid_generate_v4(), 'Veggie Burger Clássico', 'Hambúrguer vegetariano com grão-de-bico', 14.99, (SELECT id FROM public.category WHERE name = 'Veggie Burger'), 'images/veggie_burger_classico.jpg'),
(uuid_generate_v4(), 'Veggie Burger com Queijo', 'Hambúrguer vegetariano com queijo derretido', 16.99, (SELECT id FROM public.category WHERE name = 'Veggie Burger'), 'images/veggie_burger_queijo.jpg'),
(uuid_generate_v4(), 'Veggie Burger Picante', 'Hambúrguer vegetariano com molho picante', 16.99, (SELECT id FROM public.category WHERE name = 'Veggie Burger'), 'images/veggie_burger_picante.jpg'),
(uuid_generate_v4(), 'Veggie Burger com Abacate', 'Hambúrguer vegetariano com fatias de abacate', 17.99, (SELECT id FROM public.category WHERE name = 'Veggie Burger'), 'images/veggie_burger_abacate.jpg'),
(uuid_generate_v4(), 'Veggie Burger com Cogumelos', 'Hambúrguer vegetariano com cogumelos', 17.99, (SELECT id FROM public.category WHERE name = 'Veggie Burger'), 'images/veggie_burger_cogumelos.jpg'),
(uuid_generate_v4(), 'Veggie Burger BBQ', 'Hambúrguer vegetariano com molho barbecue', 15.99, (SELECT id FROM public.category WHERE name = 'Veggie Burger'), 'images/veggie_burger_bbq.jpg'),
(uuid_generate_v4(), 'Mini Veggie Burger', 'Mini hambúrguer vegetariano ideal para crianças', 8.99, (SELECT id FROM public.category WHERE name = 'Veggie Burger'), 'images/mini_veggie_burger.jpg'),
(uuid_generate_v4(), 'Veggie Burger de Lentilha', 'Hambúrguer vegetariano de lentilha', 14.99, (SELECT id FROM public.category WHERE name = 'Veggie Burger'), 'images/veggie_burger_lentilha.jpg'),
(uuid_generate_v4(), 'Veggie Burger com Espinafre', 'Hambúrguer vegetariano com espinafre', 15.99, (SELECT id FROM public.category WHERE name = 'Veggie Burger'), 'images/veggie_burger_espinafre.jpg'),
(uuid_generate_v4(), 'Veggie Burger com Pimentão', 'Hambúrguer vegetariano com pimentão assado', 15.99, (SELECT id FROM public.category WHERE name = 'Veggie Burger'), 'images/veggie_burger_pimentao.jpg');

-- Produtos para a categoria 'Chicken Sandwich'
INSERT INTO public.product (id, name, description, price, categoryId, image) VALUES 
(uuid_generate_v4(), 'Chicken Sandwich Clássico', 'Sanduíche de frango empanado com maionese', 15.99, (SELECT id FROM public.category WHERE name = 'Chicken Sandwich'), 'images/chicken_sandwich_classico.jpg'),
(uuid_generate_v4(), 'Chicken Sandwich BBQ', 'Sanduíche de frango empanado com molho barbecue', 16.99, (SELECT id FROM public.category WHERE name = 'Chicken Sandwich'), 'images/chicken_sandwich_bbq.jpg'),
(uuid_generate_v4(), 'Chicken Sandwich Picante', 'Sanduíche de frango empanado com molho picante', 16.99, (SELECT id FROM public.category WHERE name = 'Chicken Sandwich'), 'images/chicken_sandwich_picante.jpg'),
(uuid_generate_v4(), 'Chicken Sandwich com Bacon', 'Sanduíche de frango empanado com bacon', 17.99, (SELECT id FROM public.category WHERE name = 'Chicken Sandwich'), 'images/chicken_sandwich_bacon.jpg'),
(uuid_generate_v4(), 'Chicken Sandwich com Queijo', 'Sanduíche de frango empanado com queijo derretido', 17.99, (SELECT id FROM public.category WHERE name = 'Chicken Sandwich'), 'images/chicken_sandwich_queijo.jpg'),
(uuid_generate_v4(), 'Chicken Sandwich Vegetariano', 'Sanduíche de frango empanado vegetal', 15.99, (SELECT id FROM public.category WHERE name = 'Chicken Sandwich'), 'images/chicken_sandwich_vegetariano.jpg'),
(uuid_generate_v4(), 'Mini Chicken Sandwich', 'Mini sanduíche de frango empanado ideal para crianças', 8.99, (SELECT id FROM public.category WHERE name = 'Chicken Sandwich'), 'images/mini_chicken_sandwich.jpg'),
(uuid_generate_v4(), 'Chicken Sandwich com Abacate', 'Sanduíche de frango empanado com fatias de abacate', 18.99, (SELECT id FROM public.category WHERE name = 'Chicken Sandwich'), 'images/chicken_sandwich_abacate.jpg'),
(uuid_generate_v4(), 'Chicken Sandwich com Alface', 'Sanduíche de frango empanado com alface fresca', 15.99, (SELECT id FROM public.category WHERE name = 'Chicken Sandwich'), 'images/chicken_sandwich_alface.jpg'),
(uuid_generate_v4(), 'Chicken Sandwich com Tomate', 'Sanduíche de frango empanado com fatias de tomate', 15.99, (SELECT id FROM public.category WHERE name = 'Chicken Sandwich'), 'images/chicken_sandwich_tomate.jpg');

-- Produtos para a categoria 'Batata Frita'
INSERT INTO public.product (id, name, description, price, categoryId, image) VALUES 
(uuid_generate_v4(), 'Batata Frita Clássica', 'Batata frita crocante e salgada', 6.99, (SELECT id FROM public.category WHERE name = 'Batata Frita'), 'images/batata_frita_classica.jpg'),
(uuid_generate_v4(), 'Batata Frita com Queijo', 'Batata frita com queijo cheddar derretido', 7.99, (SELECT id FROM public.category WHERE name = 'Batata Frita'), 'images/batata_frita_queijo.jpg'),
(uuid_generate_v4(), 'Batata Frita Picante', 'Batata frita temperada com especiarias picantes', 7.49, (SELECT id FROM public.category WHERE name = 'Batata Frita'), 'images/batata_frita_picante.jpg'),
(uuid_generate_v4(), 'Batata Frita com Bacon', 'Batata frita com pedaços de bacon crocante', 8.99, (SELECT id FROM public.category WHERE name = 'Batata Frita'), 'images/batata_frita_bacon.jpg'),
(uuid_generate_v4(), 'Batata Frita com Molho Ranch', 'Batata frita acompanhada de molho ranch', 7.99, (SELECT id FROM public.category WHERE name = 'Batata Frita'), 'images/batata_frita_ranch.jpg'),
(uuid_generate_v4(), 'Batata Frita com Alho', 'Batata frita temperada com alho e ervas', 7.49, (SELECT id FROM public.category WHERE name = 'Batata Frita'), 'images/batata_frita_alho.jpg'),
(uuid_generate_v4(), 'Batata Frita Doce', 'Batata frita feita com batata doce', 6.99, (SELECT id FROM public.category WHERE name = 'Batata Frita'), 'images/batata_frita_doce.jpg'),
(uuid_generate_v4(), 'Batata Frita Rústica', 'Batata frita rústica com casca', 7.99, (SELECT id FROM public.category WHERE name = 'Batata Frita'), 'images/batata_frita_rustica.jpg'),
(uuid_generate_v4(), 'Batata Frita com Trufa', 'Batata frita com azeite de trufa', 9.99, (SELECT id FROM public.category WHERE name = 'Batata Frita'), 'images/batata_frita_trufa.jpg'),
(uuid_generate_v4(), 'Batata Frita com Parmesão', 'Batata frita com queijo parmesão ralado', 8.99, (SELECT id FROM public.category WHERE name = 'Batata Frita'), 'images/batata_frita_parmesao.jpg');

-- Produtos para a categoria 'Onion Rings'
INSERT INTO public.product (id, name, description, price, categoryId, image) VALUES 
(uuid_generate_v4(), 'Onion Rings Clássico', 'Anéis de cebola empanados e fritos', 5.99, (SELECT id FROM public.category WHERE name = 'Onion Rings'), 'images/onion_rings_classico.jpg'),
(uuid_generate_v4(), 'Onion Rings com Queijo', 'Anéis de cebola empanados com queijo', 6.99, (SELECT id FROM public.category WHERE name = 'Onion Rings'), 'images/onion_rings_queijo.jpg'),
(uuid_generate_v4(), 'Onion Rings Picante', 'Anéis de cebola empanados com especiarias picantes', 6.49, (SELECT id FROM public.category WHERE name = 'Onion Rings'), 'images/onion_rings_picante.jpg'),
(uuid_generate_v4(), 'Onion Rings com Molho Barbecue', 'Anéis de cebola empanados servidos com molho barbecue', 6.99, (SELECT id FROM public.category WHERE name = 'Onion Rings'), 'images/onion_rings_bbq.jpg'),
(uuid_generate_v4(), 'Onion Rings com Alho', 'Anéis de cebola empanados com alho e ervas', 6.49, (SELECT id FROM public.category WHERE name = 'Onion Rings'), 'images/onion_rings_alho.jpg'),
(uuid_generate_v4(), 'Onion Rings com Molho Ranch', 'Anéis de cebola empanados servidos com molho ranch', 6.99, (SELECT id FROM public.category WHERE name = 'Onion Rings'), 'images/onion_rings_ranch.jpg'),
(uuid_generate_v4(), 'Onion Rings Doce', 'Anéis de cebola empanados com toque de açúcar', 5.99, (SELECT id FROM public.category WHERE name = 'Onion Rings'), 'images/onion_rings_doce.jpg'),
(uuid_generate_v4(), 'Onion Rings com Parmesão', 'Anéis de cebola empanados com queijo parmesão', 7.49, (SELECT id FROM public.category WHERE name = 'Onion Rings'), 'images/onion_rings_parmesao.jpg'),
(uuid_generate_v4(), 'Onion Rings com Ervas Finas', 'Anéis de cebola empanados com ervas finas', 6.99, (SELECT id FROM public.category WHERE name = 'Onion Rings'), 'images/onion_rings_ervas.jpg'),
(uuid_generate_v4(), 'Onion Rings com Maionese de Alho', 'Anéis de cebola empanados servidos com maionese de alho', 6.99, (SELECT id FROM public.category WHERE name = 'Onion Rings'), 'images/onion_rings_maionese_alho.jpg');

-- Produtos para a categoria 'Salada Caesar'
INSERT INTO public.product (id, name, description, price, categoryId, image) VALUES 
(uuid_generate_v4(), 'Salada Caesar Clássica', 'Salada Caesar com frango e croutons', 10.99, (SELECT id FROM public.category WHERE name = 'Salada Caesar'), 'images/salada_caesar_classica.jpg'),
(uuid_generate_v4(), 'Salada Caesar com Bacon', 'Salada Caesar com frango, croutons e bacon', 12.99, (SELECT id FROM public.category WHERE name = 'Salada Caesar'), 'images/salada_caesar_bacon.jpg'),
(uuid_generate_v4(), 'Salada Caesar com Abacate', 'Salada Caesar com frango, croutons e abacate', 11.99, (SELECT id FROM public.category WHERE name = 'Salada Caesar'), 'images/salada_caesar_abacate.jpg'),
(uuid_generate_v4(), 'Salada Caesar com Cogumelos', 'Salada Caesar com frango, croutons e cogumelos', 12.49, (SELECT id FROM public.category WHERE name = 'Salada Caesar'), 'images/salada_caesar_cogumelos.jpg'),
(uuid_generate_v4(), 'Salada Caesar Vegetariana', 'Salada Caesar sem frango, com croutons e queijo', 9.99, (SELECT id FROM public.category WHERE name = 'Salada Caesar'), 'images/salada_caesar_vegetariana.jpg'),
(uuid_generate_v4(), 'Salada Caesar com Atum', 'Salada Caesar com frango, croutons e atum', 13.99, (SELECT id FROM public.category WHERE name = 'Salada Caesar'), 'images/salada_caesar_atum.jpg'),
(uuid_generate_v4(), 'Salada Caesar com Ovo', 'Salada Caesar com frango, croutons e ovo cozido', 11.49, (SELECT id FROM public.category WHERE name = 'Salada Caesar'), 'images/salada_caesar_ovo.jpg'),
(uuid_generate_v4(), 'Salada Caesar com Quinoa', 'Salada Caesar com frango, croutons e quinoa', 12.49, (SELECT id FROM public.category WHERE name = 'Salada Caesar'), 'images/salada_caesar_quinoa.jpg'),
(uuid_generate_v4(), 'Salada Caesar com Grão-de-Bico', 'Salada Caesar com frango, croutons e grão-de-bico', 11.99, (SELECT id FROM public.category WHERE name = 'Salada Caesar'), 'images/salada_caesar_grao_de_bico.jpg'),
(uuid_generate_v4(), 'Salada Caesar com Camarão', 'Salada Caesar com frango, croutons e camarão', 14.99, (SELECT id FROM public.category WHERE name = 'Salada Caesar'), 'images/salada_caesar_camaroes.jpg');

-- Produtos para a categoria 'Palitos de Mozzarella'
INSERT INTO public.product (id, name, description, price, categoryId, image) VALUES 
(uuid_generate_v4(), 'Palitos de Mozzarella Clássicos', 'Palitos de queijo mozzarella empanados', 6.99, (SELECT id FROM public.category WHERE name = 'Palitos de Mozzarella'), 'images/palitos_mozzarella_classicos.jpg'),
(uuid_generate_v4(), 'Palitos de Mozzarella com Parmesão', 'Palitos de queijo mozzarella empanados com parmesão', 7.99, (SELECT id FROM public.category WHERE name = 'Palitos de Mozzarella'), 'images/palitos_mozzarella_parmesao.jpg'),
(uuid_generate_v4(), 'Palitos de Mozzarella Picantes', 'Palitos de queijo mozzarella empanados com especiarias picantes', 7.49, (SELECT id FROM public.category WHERE name = 'Palitos de Mozzarella'), 'images/palitos_mozzarella_picantes.jpg'),
(uuid_generate_v4(), 'Palitos de Mozzarella com Alho', 'Palitos de queijo mozzarella empanados com alho', 7.49, (SELECT id FROM public.category WHERE name = 'Palitos de Mozzarella'), 'images/palitos_mozzarella_alho.jpg'),
(uuid_generate_v4(), 'Palitos de Mozzarella com Molho Marinara', 'Palitos de queijo mozzarella empanados com molho marinara', 7.99, (SELECT id FROM public.category WHERE name = 'Palitos de Mozzarella'), 'images/palitos_mozzarella_marinara.jpg'),
(uuid_generate_v4(), 'Palitos de Mozzarella com Ervas', 'Palitos de queijo mozzarella empanados com ervas finas', 7.49, (SELECT id FROM public.category WHERE name = 'Palitos de Mozzarella'), 'images/palitos_mozzarella_ervas.jpg'),
(uuid_generate_v4(), 'Palitos de Mozzarella com Molho Ranch', 'Palitos de queijo mozzarella empanados com molho ranch', 7.99, (SELECT id FROM public.category WHERE name = 'Palitos de Mozzarella'), 'images/palitos_mozzarella_ranch.jpg'),
(uuid_generate_v4(), 'Palitos de Mozzarella com Pesto', 'Palitos de queijo mozzarella empanados com pesto', 7.99, (SELECT id FROM public.category WHERE name = 'Palitos de Mozzarella'), 'images/palitos_mozzarella_pesto.jpg'),
(uuid_generate_v4(), 'Palitos de Mozzarella com Molho Barbecue', 'Palitos de queijo mozzarella empanados com molho barbecue', 7.99, (SELECT id FROM public.category WHERE name = 'Palitos de Mozzarella'), 'images/palitos_mozzarella_bbq.jpg'),
(uuid_generate_v4(), 'Palitos de Mozzarella com Molho Alfredo', 'Palitos de queijo mozzarella empanados com molho alfredo', 8.49, (SELECT id FROM public.category WHERE name = 'Palitos de Mozzarella'), 'images/palitos_mozzarella_alfredo.jpg');

-- Produtos para a categoria 'Nuggets de Frango'
INSERT INTO public.product (id, name, description, price, categoryId, image) VALUES 
(uuid_generate_v4(), 'Nuggets de Frango Clássicos', 'Nuggets de frango crocantes', 5.99, (SELECT id FROM public.category WHERE name = 'Nuggets de Frango'), 'images/nuggets_frango_classicos.jpg'),
(uuid_generate_v4(), 'Nuggets de Frango com Queijo', 'Nuggets de frango com recheio de queijo', 6.99, (SELECT id FROM public.category WHERE name = 'Nuggets de Frango'), 'images/nuggets_frango_queijo.jpg'),
(uuid_generate_v4(), 'Nuggets de Frango Picantes', 'Nuggets de frango temperados com especiarias picantes', 6.49, (SELECT id FROM public.category WHERE name = 'Nuggets de Frango'), 'images/nuggets_frango_picantes.jpg'),
(uuid_generate_v4(), 'Nuggets de Frango com Alho', 'Nuggets de frango com tempero de alho', 6.49, (SELECT id FROM public.category WHERE name = 'Nuggets de Frango'), 'images/nuggets_frango_alho.jpg'),
(uuid_generate_v4(), 'Nuggets de Frango com Molho Ranch', 'Nuggets de frango servidos com molho ranch', 6.99, (SELECT id FROM public.category WHERE name = 'Nuggets de Frango'), 'images/nuggets_frango_ranch.jpg'),
(uuid_generate_v4(), 'Nuggets de Frango com Ervas', 'Nuggets de frango temperados com ervas finas', 6.49, (SELECT id FROM public.category WHERE name = 'Nuggets de Frango'), 'images/nuggets_frango_ervas.jpg'),
(uuid_generate_v4(), 'Nuggets de Frango com Molho Barbecue', 'Nuggets de frango servidos com molho barbecue', 6.99, (SELECT id FROM public.category WHERE name = 'Nuggets de Frango'), 'images/nuggets_frango_bbq.jpg'),
(uuid_generate_v4(), 'Nuggets de Frango com Molho Teriyaki', 'Nuggets de frango servidos com molho teriyaki', 7.49, (SELECT id FROM public.category WHERE name = 'Nuggets de Frango'), 'images/nuggets_frango_teriyaki.jpg'),
(uuid_generate_v4(), 'Nuggets de Frango com Molho Pesto', 'Nuggets de frango servidos com molho pesto', 6.99, (SELECT id FROM public.category WHERE name = 'Nuggets de Frango'), 'images/nuggets_frango_pesto.jpg'),
(uuid_generate_v4(), 'Nuggets de Frango com Molho Honey Mustard', 'Nuggets de frango servidos com molho honey mustard', 6.99, (SELECT id FROM public.category WHERE name = 'Nuggets de Frango'), 'images/nuggets_frango_honey_mustard.jpg');


-- Produtos para a categoria 'Refrigerante'
INSERT INTO public.product (id, name, description, price, categoryId, image) VALUES 
(uuid_generate_v4(), 'Refrigerante de Cola', 'Refrigerante de cola', 3.99, (SELECT id FROM public.category WHERE name = 'Refrigerante'), 'images/refrigerante_cola.jpg'),
(uuid_generate_v4(), 'Refrigerante de Guaraná', 'Refrigerante de guaraná', 3.99, (SELECT id FROM public.category WHERE name = 'Refrigerante'), 'images/refrigerante_guarana.jpg'),
(uuid_generate_v4(), 'Refrigerante de Laranja', 'Refrigerante de laranja', 3.99, (SELECT id FROM public.category WHERE name = 'Refrigerante'), 'images/refrigerante_laranja.jpg'),
(uuid_generate_v4(), 'Refrigerante de Limão', 'Refrigerante de limão', 3.99, (SELECT id FROM public.category WHERE name = 'Refrigerante'), 'images/refrigerante_limao.jpg'),
(uuid_generate_v4(), 'Refrigerante de Uva', 'Refrigerante de uva', 3.99, (SELECT id FROM public.category WHERE name = 'Refrigerante'), 'images/refrigerante_uva.jpg'),
(uuid_generate_v4(), 'Refrigerante Diet', 'Refrigerante dietético de cola', 3.99, (SELECT id FROM public.category WHERE name = 'Refrigerante'), 'images/refrigerante_diet.jpg'),
(uuid_generate_v4(), 'Refrigerante Zero', 'Refrigerante zero açúcar', 3.99, (SELECT id FROM public.category WHERE name = 'Refrigerante'), 'images/refrigerante_zero.jpg'),
(uuid_generate_v4(), 'Refrigerante de Gengibre', 'Refrigerante de gengibre', 4.49, (SELECT id FROM public.category WHERE name = 'Refrigerante'), 'images/refrigerante_gengibre.jpg'),
(uuid_generate_v4(), 'Refrigerante de Baunilha', 'Refrigerante de baunilha', 4.49, (SELECT id FROM public.category WHERE name = 'Refrigerante'), 'images/refrigerante_baunilha.jpg'),
(uuid_generate_v4(), 'Refrigerante de Cereja', 'Refrigerante de cereja', 4.49, (SELECT id FROM public.category WHERE name = 'Refrigerante'), 'images/refrigerante_cereja.jpg');

-- Produtos para a categoria 'Suco Natural'
INSERT INTO public.product (id, name, description, price, categoryId, image) VALUES 
(uuid_generate_v4(), 'Suco de Laranja', 'Suco natural de laranja', 4.99, (SELECT id FROM public.category WHERE name = 'Suco Natural'), 'images/suco_laranja.jpg'),
(uuid_generate_v4(), 'Suco de Limão', 'Suco natural de limão', 4.99, (SELECT id FROM public.category WHERE name = 'Suco Natural'), 'images/suco_limao.jpg'),
(uuid_generate_v4(), 'Suco de Abacaxi', 'Suco natural de abacaxi', 4.99, (SELECT id FROM public.category WHERE name = 'Suco Natural'), 'images/suco_abacaxi.jpg'),
(uuid_generate_v4(), 'Suco de Manga', 'Suco natural de manga', 5.49, (SELECT id FROM public.category WHERE name = 'Suco Natural'), 'images/suco_manga.jpg'),
(uuid_generate_v4(), 'Suco de Maracujá', 'Suco natural de maracujá', 5.49, (SELECT id FROM public.category WHERE name = 'Suco Natural'), 'images/suco_maracuja.jpg'),
(uuid_generate_v4(), 'Suco de Morango', 'Suco natural de morango', 5.49, (SELECT id FROM public.category WHERE name = 'Suco Natural'), 'images/suco_morango.jpg'),
(uuid_generate_v4(), 'Suco de Melancia', 'Suco natural de melancia', 5.49, (SELECT id FROM public.category WHERE name = 'Suco Natural'), 'images/suco_melancia.jpg'),
(uuid_generate_v4(), 'Suco de Acerola', 'Suco natural de acerola', 5.99, (SELECT id FROM public.category WHERE name = 'Suco Natural'), 'images/suco_acerola.jpg'),
(uuid_generate_v4(), 'Suco de Caju', 'Suco natural de caju', 5.49, (SELECT id FROM public.category WHERE name = 'Suco Natural'), 'images/suco_caju.jpg'),
(uuid_generate_v4(), 'Suco de Goiaba', 'Suco natural de goiaba', 5.49, (SELECT id FROM public.category WHERE name = 'Suco Natural'), 'images/suco_goiaba.jpg');

-- Produtos para a categoria 'Água Mineral'
INSERT INTO public.product (id, name, description, price, categoryId, image) VALUES 
(uuid_generate_v4(), 'Água Mineral Sem Gás', 'Água mineral sem gás', 2.99, (SELECT id FROM public.category WHERE name = 'Água Mineral'), 'images/agua_sem_gas.jpg'),
(uuid_generate_v4(), 'Água Mineral Com Gás', 'Água mineral com gás', 2.99, (SELECT id FROM public.category WHERE name = 'Água Mineral'), 'images/agua_com_gas.jpg'),
(uuid_generate_v4(), 'Água Mineral com Limão', 'Água mineral com sabor de limão', 3.49, (SELECT id FROM public.category WHERE name = 'Água Mineral'), 'images/agua_limao.jpg'),
(uuid_generate_v4(), 'Água Mineral com Hortelã', 'Água mineral com sabor de hortelã', 3.49, (SELECT id FROM public.category WHERE name = 'Água Mineral'), 'images/agua_hortela.jpg'),
(uuid_generate_v4(), 'Água Mineral com Gengibre', 'Água mineral com sabor de gengibre', 3.49, (SELECT id FROM public.category WHERE name = 'Água Mineral'), 'images/agua_gengibre.jpg'),
(uuid_generate_v4(), 'Água Mineral com Frutas Vermelhas', 'Água mineral com sabor de frutas vermelhas', 3.99, (SELECT id FROM public.category WHERE name = 'Água Mineral'), 'images/agua_frutas_vermelhas.jpg'),
(uuid_generate_v4(), 'Água Mineral com Coco', 'Água mineral com sabor de coco', 3.99, (SELECT id FROM public.category WHERE name = 'Água Mineral'), 'images/agua_coco.jpg'),
(uuid_generate_v4(), 'Água Mineral com Maracujá', 'Água mineral com sabor de maracujá', 3.99, (SELECT id FROM public.category WHERE name = 'Água Mineral'), 'images/agua_maracuja.jpg'),
(uuid_generate_v4(), 'Água Mineral com Pêssego', 'Água mineral com sabor de pêssego', 3.99, (SELECT id FROM public.category WHERE name = 'Água Mineral'), 'images/agua_pessego.jpg'),
(uuid_generate_v4(), 'Água Mineral com Abacaxi', 'Água mineral com sabor de abacaxi', 3.99, (SELECT id FROM public.category WHERE name = 'Água Mineral'), 'images/agua_abacaxi.jpg');

-- Produtos para a categoria 'Chá Gelado'
INSERT INTO public.product (id, name, description, price, categoryId, image) VALUES 
(uuid_generate_v4(), 'Chá Gelado de Limão', 'Chá gelado com sabor de limão', 3.99, (SELECT id FROM public.category WHERE name = 'Chá Gelado'), 'images/cha_gelado_limao.jpg'),
(uuid_generate_v4(), 'Chá Gelado de Pêssego', 'Chá gelado com sabor de pêssego', 3.99, (SELECT id FROM public.category WHERE name = 'Chá Gelado'), 'images/cha_gelado_pessego.jpg'),
(uuid_generate_v4(), 'Chá Gelado de Hibisco', 'Chá gelado com sabor de hibisco', 4.49, (SELECT id FROM public.category WHERE name = 'Chá Gelado'), 'images/cha_gelado_hibisco.jpg'),
(uuid_generate_v4(), 'Chá Gelado de Maracujá', 'Chá gelado com sabor de maracujá', 4.49, (SELECT id FROM public.category WHERE name = 'Chá Gelado'), 'images/cha_gelado_maracuja.jpg'),
(uuid_generate_v4(), 'Chá Gelado de Frutas Vermelhas', 'Chá gelado com sabor de frutas vermelhas', 4.49, (SELECT id FROM public.category WHERE name = 'Chá Gelado'), 'images/cha_gelado_frutas_vermelhas.jpg'),
(uuid_generate_v4(), 'Chá Gelado de Hortelã', 'Chá gelado com sabor de hortelã', 3.99, (SELECT id FROM public.category WHERE name = 'Chá Gelado'), 'images/cha_gelado_hortela.jpg'),
(uuid_generate_v4(), 'Chá Gelado de Gengibre', 'Chá gelado com sabor de gengibre', 4.49, (SELECT id FROM public.category WHERE name = 'Chá Gelado'), 'images/cha_gelado_gengibre.jpg'),
(uuid_generate_v4(), 'Chá Gelado de Erva Doce', 'Chá gelado com sabor de erva doce', 3.99, (SELECT id FROM public.category WHERE name = 'Chá Gelado'), 'images/cha_gelado_erva_doce.jpg'),
(uuid_generate_v4(), 'Chá Gelado de Camomila', 'Chá gelado com sabor de camomila', 3.99, (SELECT id FROM public.category WHERE name = 'Chá Gelado'), 'images/cha_gelado_camomila.jpg'),
(uuid_generate_v4(), 'Chá Gelado de Capim Limão', 'Chá gelado com sabor de capim limão', 4.49, (SELECT id FROM public.category WHERE name = 'Chá Gelado'), 'images/cha_gelado_capim_limao.jpg');

-- Produtos para a categoria 'Milkshake'
INSERT INTO public.product (id, name, description, price, categoryId, image) VALUES 
(uuid_generate_v4(), 'Milkshake de Chocolate', 'Milkshake de chocolate cremoso', 5.99, (SELECT id FROM public.category WHERE name = 'Milkshake'), 'images/milkshake_chocolate.jpg'),
(uuid_generate_v4(), 'Milkshake de Morango', 'Milkshake de morango cremoso', 5.99, (SELECT id FROM public.category WHERE name = 'Milkshake'), 'images/milkshake_morango.jpg'),
(uuid_generate_v4(), 'Milkshake de Baunilha', 'Milkshake de baunilha cremoso', 5.99, (SELECT id FROM public.category WHERE name = 'Milkshake'), 'images/milkshake_baunilha.jpg'),
(uuid_generate_v4(), 'Milkshake de Caramelo', 'Milkshake de caramelo cremoso', 6.49, (SELECT id FROM public.category WHERE name = 'Milkshake'), 'images/milkshake_caramelo.jpg'),
(uuid_generate_v4(), 'Milkshake de Cookies and Cream', 'Milkshake de cookies and cream', 6.49, (SELECT id FROM public.category WHERE name = 'Milkshake'), 'images/milkshake_cookies_cream.jpg'),
(uuid_generate_v4(), 'Milkshake de Nutella', 'Milkshake de Nutella cremoso', 6.99, (SELECT id FROM public.category WHERE name = 'Milkshake'), 'images/milkshake_nutella.jpg'),
(uuid_generate_v4(), 'Milkshake de Doce de Leite', 'Milkshake de doce de leite cremoso', 6.49, (SELECT id FROM public.category WHERE name = 'Milkshake'), 'images/milkshake_doce_de_leite.jpg'),
(uuid_generate_v4(), 'Milkshake de Banana', 'Milkshake de banana cremoso', 5.99, (SELECT id FROM public.category WHERE name = 'Milkshake'), 'images/milkshake_banana.jpg'),
(uuid_generate_v4(), 'Milkshake de Abacaxi', 'Milkshake de abacaxi cremoso', 6.49, (SELECT id FROM public.category WHERE name = 'Milkshake'), 'images/milkshake_abacaxi.jpg'),
(uuid_generate_v4(), 'Milkshake de Açaí', 'Milkshake de açaí cremoso', 6.99, (SELECT id FROM public.category WHERE name = 'Milkshake'), 'images/milkshake_acai.jpg');


-- Produtos para a categoria 'Sorvete'
INSERT INTO public.product (id, name, description, price, categoryId, image) VALUES 
(uuid_generate_v4(), 'Sorvete de Creme', 'Sorvete de creme', 4.99, (SELECT id FROM public.category WHERE name = 'Sorvete'), 'images/sorvete_creme.jpg'),
(uuid_generate_v4(), 'Sorvete de Chocolate', 'Sorvete de chocolate', 4.99, (SELECT id FROM public.category WHERE name = 'Sorvete'), 'images/sorvete_chocolate.jpg'),
(uuid_generate_v4(), 'Sorvete de Morango', 'Sorvete de morango', 4.99, (SELECT id FROM public.category WHERE name = 'Sorvete'), 'images/sorvete_morango.jpg'),
(uuid_generate_v4(), 'Sorvete de Menta com Chocolate', 'Sorvete de menta com pedaços de chocolate', 5.49, (SELECT id FROM public.category WHERE name = 'Sorvete'), 'images/sorvete_menta_chocolate.jpg'),
(uuid_generate_v4(), 'Sorvete de Baunilha', 'Sorvete de baunilha', 4.99, (SELECT id FROM public.category WHERE name = 'Sorvete'), 'images/sorvete_baunilha.jpg'),
(uuid_generate_v4(), 'Sorvete de Flocos', 'Sorvete de flocos', 4.99, (SELECT id FROM public.category WHERE name = 'Sorvete'), 'images/sorvete_flocos.jpg'),
(uuid_generate_v4(), 'Sorvete de Coco', 'Sorvete de coco', 5.49, (SELECT id FROM public.category WHERE name = 'Sorvete'), 'images/sorvete_coco.jpg'),
(uuid_generate_v4(), 'Sorvete de Açaí', 'Sorvete de açaí', 5.99, (SELECT id FROM public.category WHERE name = 'Sorvete'), 'images/sorvete_acai.jpg'),
(uuid_generate_v4(), 'Sorvete de Pistache', 'Sorvete de pistache', 5.99, (SELECT id FROM public.category WHERE name = 'Sorvete'), 'images/sorvete_pistache.jpg'),
(uuid_generate_v4(), 'Sorvete de Limão', 'Sorvete de limão', 4.99, (SELECT id FROM public.category WHERE name = 'Sorvete'), 'images/sorvete_limao.jpg');

-- Produtos para a categoria 'Torta'
INSERT INTO public.product (id, name, description, price, categoryId, image) VALUES 
(uuid_generate_v4(), 'Torta de Maçã', 'Torta de maçã clássica', 3.99, (SELECT id FROM public.category WHERE name = 'Torta'), 'images/torta_maca.jpg'),
(uuid_generate_v4(), 'Torta de Limão', 'Torta de limão com merengue', 3.99, (SELECT id FROM public.category WHERE name = 'Torta'), 'images/torta_limao.jpg'),
(uuid_generate_v4(), 'Torta de Chocolate', 'Torta de chocolate cremosa', 4.49, (SELECT id FROM public.category WHERE name = 'Torta'), 'images/torta_chocolate.jpg'),
(uuid_generate_v4(), 'Torta de Morango', 'Torta de morango fresca', 4.49, (SELECT id FROM public.category WHERE name = 'Torta'), 'images/torta_morango.jpg'),
(uuid_generate_v4(), 'Torta de Maracujá', 'Torta de maracujá tropical', 4.49, (SELECT id FROM public.category WHERE name = 'Torta'), 'images/torta_maracuja.jpg'),
(uuid_generate_v4(), 'Torta de Banana', 'Torta de banana com caramelo', 3.99, (SELECT id FROM public.category WHERE name = 'Torta'), 'images/torta_banana.jpg'),
(uuid_generate_v4(), 'Torta de Coco', 'Torta de coco com cobertura de chantilly', 4.49, (SELECT id FROM public.category WHERE name = 'Torta'), 'images/torta_coco.jpg'),
(uuid_generate_v4(), 'Torta de Abóbora', 'Torta de abóbora com especiarias', 4.49, (SELECT id FROM public.category WHERE name = 'Torta'), 'images/torta_abobora.jpg'),
(uuid_generate_v4(), 'Torta de Frutas Vermelhas', 'Torta de frutas vermelhas com cobertura crocante', 4.99, (SELECT id FROM public.category WHERE name = 'Torta'), 'images/torta_frutas_vermelhas.jpg'),
(uuid_generate_v4(), 'Torta de Amêndoas', 'Torta de amêndoas com cobertura de chocolate', 4.99, (SELECT id FROM public.category WHERE name = 'Torta'), 'images/torta_amendoas.jpg');


-- Produtos para a categoria 'Salada'
INSERT INTO public.product (id, name, description, price, categoryId, image) VALUES 
(uuid_generate_v4(), 'Salada Caesar', 'Salada Caesar clássica com molho Caesar e croutons', 7.99, (SELECT id FROM public.category WHERE name = 'Salada'), 'images/salada_caesar.jpg'),
(uuid_generate_v4(), 'Salada Grega', 'Salada Grega com queijo feta, azeitonas e pepino', 8.49, (SELECT id FROM public.category WHERE name = 'Salada'), 'images/salada_grega.jpg'),
(uuid_generate_v4(), 'Salada de Quinoa', 'Salada de quinoa com vegetais frescos', 8.99, (SELECT id FROM public.category WHERE name = 'Salada'), 'images/salada_quinoa.jpg'),
(uuid_generate_v4(), 'Salada Caprese', 'Salada Caprese com tomates, muçarela e manjericão', 8.49, (SELECT id FROM public.category WHERE name = 'Salada'), 'images/salada_caprese.jpg'),
(uuid_generate_v4(), 'Salada de Espinafre e Morango', 'Salada de espinafre com morangos frescos e nozes', 9.49, (SELECT id FROM public.category WHERE name = 'Salada'), 'images/salada_espinafre_morango.jpg'),
(uuid_generate_v4(), 'Salada de Lentilha', 'Salada de lentilha com legumes frescos', 7.99, (SELECT id FROM public.category WHERE name = 'Salada'), 'images/salada_lentilha.jpg'),
(uuid_generate_v4(), 'Salada de Grão-de-Bico', 'Salada de grão-de-bico com vegetais', 8.49, (SELECT id FROM public.category WHERE name = 'Salada'), 'images/salada_grao_de_bico.jpg'),
(uuid_generate_v4(), 'Salada de Beterraba e Laranja', 'Salada de beterraba com laranja e queijo de cabra', 9.49, (SELECT id FROM public.category WHERE name = 'Salada'), 'images/salada_beterraba_laranja.jpg'),
(uuid_generate_v4(), 'Salada de Arroz Integral', 'Salada de arroz integral com vegetais e molho de soja', 7.99, (SELECT id FROM public.category WHERE name = 'Salada'), 'images/salada_arroz_integral.jpg'),
(uuid_generate_v4(), 'Salada de Abacate e Tomate', 'Salada de abacate com tomate e cebola roxa', 8.99, (SELECT id FROM public.category WHERE name = 'Salada'), 'images/salada_abacate_tomate.jpg');

-- Produtos para a categoria 'Hambúrguer Vegetariano'
INSERT INTO public.product (id, name, description, price, categoryId, image) VALUES 
(uuid_generate_v4(), 'Hambúrguer de Grão-de-Bico', 'Hambúrguer vegetariano de grão-de-bico', 9.99, (SELECT id FROM public.category WHERE name = 'Hambúrguer Vegetariano'), 'images/hamburguer_grao_de_bico.jpg'),
(uuid_generate_v4(), 'Hambúrguer de Lentilha', 'Hambúrguer vegetariano de lentilha', 9.99, (SELECT id FROM public.category WHERE name = 'Hambúrguer Vegetariano'), 'images/hamburguer_lentilha.jpg'),
(uuid_generate_v4(), 'Hambúrguer de Feijão Preto', 'Hambúrguer vegetariano de feijão preto', 9.99, (SELECT id FROM public.category WHERE name = 'Hambúrguer Vegetariano'), 'images/hamburguer_feijao_preto.jpg'),
(uuid_generate_v4(), 'Hambúrguer de Quinoa', 'Hambúrguer vegetariano de quinoa', 10.49, (SELECT id FROM public.category WHERE name = 'Hambúrguer Vegetariano'), 'images/hamburguer_quinoa.jpg'),
(uuid_generate_v4(), 'Hambúrguer de Tofu', 'Hambúrguer vegetariano de tofu grelhado', 9.99, (SELECT id FROM public.category WHERE name = 'Hambúrguer Vegetariano'), 'images/hamburguer_tofu.jpg'),
(uuid_generate_v4(), 'Hambúrguer de Berinjela', 'Hambúrguer vegetariano de berinjela', 9.99, (SELECT id FROM public.category WHERE name = 'Hambúrguer Vegetariano'), 'images/hamburguer_berinjela.jpg'),
(uuid_generate_v4(), 'Hambúrguer de Cogumelos', 'Hambúrguer vegetariano de cogumelos', 10.49, (SELECT id FROM public.category WHERE name = 'Hambúrguer Vegetariano'), 'images/hamburguer_cogumelos.jpg'),
(uuid_generate_v4(), 'Hambúrguer de Abóbora', 'Hambúrguer vegetariano de abóbora', 9.99, (SELECT id FROM public.category WHERE name = 'Hambúrguer Vegetariano'), 'images/hamburguer_abobora.jpg'),
(uuid_generate_v4(), 'Hambúrguer de Espinafre', 'Hambúrguer vegetariano de espinafre', 10.49, (SELECT id FROM public.category WHERE name = 'Hambúrguer Vegetariano'), 'images/hamburguer_espinafre.jpg'),
(uuid_generate_v4(), 'Hambúrguer de Soja', 'Hambúrguer vegetariano de soja', 9.99, (SELECT id FROM public.category WHERE name = 'Hambúrguer Vegetariano'), 'images/hamburguer_soja.jpg');
