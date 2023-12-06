ALTER TABLE comment
    ADD COLUMN member_id BIGINT NOT NULL REFERENCES member(id),
    ADD COLUMN article_id BIGINT NOT NULL REFERENCES article(id),
    ADD COLUMN content Text NULL