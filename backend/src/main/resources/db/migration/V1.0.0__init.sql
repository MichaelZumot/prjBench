CREATE SEQUENCE application_sequence START WITH 1;

CREATE TABLE bench_member
(
    id         BIGINT       NOT NULL PRIMARY KEY,
    email      VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name  VARCHAR(255) NOT NULL,
    active     BOOLEAN      NOT NULL DEFAULT TRUE
);