CREATE TABLE
    users (
        id BIGSERIAL PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        birth_date DATE NOT NULL,
        status VARCHAR(255) NOT NULL,
        avatar_guid VARCHAR(255)
    );

CREATE TABLE
    roles (
        id BIGSERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE
    );

CREATE TABLE
    users_roles (
        id BIGSERIAL PRIMARY KEY,
        user_id BIGINT NOT NULL REFERENCES users (id),
        role_id BIGINT NOT NULL REFERENCES roles (id)
    );

CREATE TABLE
    tokens (
        id BIGSERIAL PRIMARY KEY,
        token VARCHAR(255) UNIQUE NOT NULL,
        type VARCHAR(255) NOT NULL,
        revoked BOOLEAN NOT NULL,
        expired BOOLEAN NOT NULL,
        user_id BIGINT NOT NULL REFERENCES users (id) ON DELETE CASCADE
    );

-- Notes
CREATE TABLE
    notes (
        id BIGSERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT,
        created_date TIMESTAMPTZ NOT NULL,
        user_id BIGINT NOT NULL REFERENCES users (id) ON DELETE CASCADE
    );

-- Teams
CREATE TABLE
    teams (
        id BIGSERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        created_date TIMESTAMPTZ NOT NULL,
        owner_id BIGINT NOT NULL REFERENCES users (id) ON DELETE CASCADE
    );

CREATE TABLE
    team_members (
        id BIGSERIAL PRIMARY KEY,
        position VARCHAR(255) NOT NULL,
        joined_date TIMESTAMPTZ NOT NULL,
        user_id BIGINT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
        team_id BIGINT NOT NULL REFERENCES teams (id) ON DELETE CASCADE
    );

CREATE TABLE
    teams_performance (
        id BIGSERIAL PRIMARY KEY,
        team_id BIGINT NOT NULL REFERENCES teams (id) ON DELETE CASCADE,
        period_date TIMESTAMPTZ NOT NULL,
        performance INT NOT NULL
    );

CREATE TABLE
    activities (
        id BIGSERIAL PRIMARY KEY,
        period_date TIMESTAMPTZ NOT NULL,
        critical_tasks_count INT NOT NULL,
        middle_tasks_count INT NOT NULL,
        easy_tasks_count INT NOT NULL,
        attendant_meetings_count INT NOT NULL,
        messages_sent_count INT NOT NULL,
        performance INT NOT NULL,
        team_member_id BIGINT NOT NULL REFERENCES team_members (id) ON DELETE CASCADE
    );

CREATE TABLE
    teams_invitations (
        id BIGSERIAL PRIMARY KEY,
        token TEXT UNIQUE NOT NULL,
        team_id BIGINT NOT NULL REFERENCES teams (id) ON DELETE CASCADE
    );

-- Files
CREATE TABLE
    files (
        id BIGSERIAL PRIMARY KEY,
        user_id BIGINT REFERENCES users (id) ON DELETE SET NULL,
        guid VARCHAR(255) NOT NULL UNIQUE,
        filename VARCHAR(255) NOT NULL,
        content_type VARCHAR(255) NOT NULL,
        size BIGINT NOT NULL,
        path VARCHAR(255) NOT NULL,
        created_date TIMESTAMPTZ NOT NULL
    );

-- Tasks
CREATE TABLE
    task_status (
        id BIGSERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        color VARCHAR(255) NOT NULL,
        display_order INTEGER NOT NULL,
        type VARCHAR(255) NOT NULL,
        team_id BIGINT NOT NULL REFERENCES teams (id) ON DELETE CASCADE
    );

CREATE TABLE
    tasks (
        id BIGSERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT,
        description TEXT NOT NULL,
        tag VARCHAR(255) NOT NULL,
        end_date TIMESTAMPTZ,
        start_date TIMESTAMPTZ,
        priority VARCHAR(255) NOT NULL,
        completed BOOLEAN NOT NULL,
        status_id BIGINT REFERENCES task_status (id) ON DELETE SET NULL,
        team_id BIGINT NOT NULL REFERENCES teams (id) ON DELETE CASCADE,
        executor_member_id BIGINT REFERENCES team_members (id) ON DELETE SET NULL,
        created_member_id BIGINT REFERENCES team_members (id) ON DELETE SET NULL
    );

CREATE TABLE
    task_notes (
        id BIGSERIAL PRIMARY KEY,
        content TEXT NOT NULL,
        created_date TIMESTAMPTZ NOT NULL,
        team_member_id BIGINT NOT NULL REFERENCES team_members (id) ON DELETE CASCADE,
        task_id BIGINT NOT NULL REFERENCES tasks (id) ON DELETE CASCADE
    );

-- Posts
CREATE TABLE
    posts (
        id BIGSERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        content TEXT NOT NULL,
        created_date TIMESTAMPTZ NOT NULL,
        hero_image_id BIGINT REFERENCES files (id),
        author_member_id BIGINT NOT NULL REFERENCES team_members (id) ON DELETE CASCADE,
        team_id BIGINT NOT NULL REFERENCES teams (id) ON DELETE CASCADE
    );

CREATE TABLE
    liked_posts (
        id BIGSERIAL PRIMARY KEY,
        team_member_id BIGINT NOT NULL REFERENCES team_members (id) ON DELETE CASCADE,
        post_id BIGINT NOT NULL REFERENCES posts (id) ON DELETE CASCADE
    );

-- Chats
-- CREATE TABLE
--     chat_rooms (
--         id BIGSERIAL PRIMARY KEY,
--         name VARCHAR(255) NOT NULL,
--         type VARCHAR(255) NOT NULL,
--         team_id BIGINT NOT NULL REFERENCES teams (id) ON DELETE CASCADE
--     );

-- CREATE TABLE
--     chat_room_members (
--         chat_room_id BIGINT NOT NULL REFERENCES chat_rooms (id) ON DELETE CASCADE,
--         member_id BIGINT NOT NULL REFERENCES team_members (id) ON DELETE CASCADE,
--         PRIMARY KEY (chat_room_id, member_id)
--     );