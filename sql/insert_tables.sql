insert into Situactions (id, description ) values 
    ('9e07b6f1-c470-4318-8c1a-2441771b600e','Recebido'),
    ('f7f9ba46-ad25-4d10-a6aa-6c603aad6755','Em Preparação'),
    ('11729253-5280-4d6f-9619-53045076236e','Pronto'),
    ('3f4798e6-1f03-411e-b99b-73833c104255','Finalizado');
    
insert into Customers (id, name, email, cpf) values
    ("eefdd3d4-97af-4ae6-bdc7-2f8ec461b28c","Anônimo","anonimo@ws.com.br","12345678909");

INSERT INTO public.category (id, name, description) VALUES
(uuid_generate_v4(), 'Lanche', 'Lanches diversos.'),
(uuid_generate_v4(), 'Acompanhamento', 'Acompanhamentos conforme sua preferência.'),
(uuid_generate_v4(), 'Bebida', 'Temos bebidas refrigerantes e sucos.'),
(uuid_generate_v4(), 'Sobremesa', 'Sobremesas deliciosas.');
