
ALTER TABLE bench_member RENAME TO member;

ALTER TABLE member
    ADD COLUMN role        VARCHAR(255) NULL,
    ADD COLUMN createdDate DATE NOT NULL,
    ADD COLUMN updatedDate DATE,
    ADD CONSTRAINT unique_email UNIQUE (email);


