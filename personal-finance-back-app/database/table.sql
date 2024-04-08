create TABLE categories(
    id VARCHAR(21) PRIMARY KEY,
    name VARCHAR(55)
)

create TABLE transactions(
    id VARCHAR(21) PRIMARY KEY,
    amount MONEY,
    date TIMESTAMP,
    category_id VARCHAR(21),
    CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES categories(id)
)

insert into categories VALUES('1', 'Food & Drinks');

insert into categories VALUES('2', 'Shopping');

insert into categories VALUES('3', 'Housing');

insert into transactions(id, amount, category_id) values('10', 10000, '3');

insert into transactions(id, amount, category_id) values('20', 5000, '2');

insert into transactions(id, amount, category_id) values('41', -1000, '1');
-- 2 tabliig hoorond ni niiluuled 2 dahi tabliinha heregtei medeelliig nuguu avc bga tableruge oruulah dooroh 2 mur code
select * from transactions left join categories on transactions.category_id = categories.id; 

select transactions.id, amount, category_id, categories.name categories_name from transactions left join categories on transactions.category_id = categories.id; 

SELECT column_name, data_type
FROM INFORMATION_SCHEMA.COLUMNS
WHERE table_name = 'users';