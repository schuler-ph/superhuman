-- AWS RDS PostgreSQL Instance

CREATE TABLE bodyweight(
    bodyweight_uuid UUID PRIMARY KEY,
    date_measured DATE NOT NULL,
    value_kg DECIMAL(4, 1) NOT NULL,
    FK_user_uuid UUID NOT NULL,
    FOREIGN KEY (FK_user_uuid) REFERENCES users(user_uuid)
);

CREATE TABLE users(
  user_uuid UUID PRIMARY KEY,
  username varchar(50) NOT NULL
);

-- superhuman uuid b9ba761a-a7cf-47a7-8568-7781126f3875
-- gen_random_uuid()
INSERT INTO users VALUES ('b9ba761a-a7cf-47a7-8568-7781126f3875', 'superhuman');

INSERT INTO bodyweight VALUES (gen_random_uuid(), CURRENT_DATE, 71.4, 'b9ba761a-a7cf-47a7-8568-7781126f3875');
