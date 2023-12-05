CREATE TABLE comment (
    id BIGINT NOT NULL PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE article (
    id BIGINT NOT NULL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    member_id BIGINT NOT NULL REFERENCES member(id),
    tags VARCHAR(255) NULL,
    rating INT DEFAULT 0,
    comment_id BIGINT NULL REFERENCES comment(id), -- Forward reference
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


