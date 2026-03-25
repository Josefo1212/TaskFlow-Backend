-- Habilitar extensión para UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- TABLA: users (usuarios del sistema)
-- =====================================================
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(250) UNIQUE NOT NULL
        CHECK (char_length(email) <= 250),
    phone VARCHAR(30) UNIQUE NOT NULL
        CHECK (char_length(btrim(phone)) BETWEEN 7 AND 30),
    password TEXT NOT NULL,
    "user" VARCHAR(250) UNIQUE NOT NULL
        CHECK (char_length("user") <= 250),
    bio TEXT
        CHECK (bio IS NULL OR char_length(bio) <= 1000),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- TABLA: projects (proyectos)
-- =====================================================
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    owner_id UUID REFERENCES users(id) ON DELETE SET NULL,
    name TEXT NOT NULL
        CHECK (char_length(btrim(name)) > 0 AND char_length(name) <= 200),
    description TEXT
        CHECK (description IS NULL OR char_length(description) <= 600),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_projects_owner_id ON projects(owner_id);

-- =====================================================
-- TABLA: project_members (miembros de proyectos)
-- =====================================================
CREATE TABLE project_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role VARCHAR(50) NOT NULL DEFAULT 'member'
        CHECK (role IN ('admin', 'member', 'viewer')),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(project_id, user_id)
);

CREATE INDEX idx_project_members_project_id ON project_members(project_id);
CREATE INDEX idx_project_members_user_id ON project_members(user_id);

-- =====================================================
-- TABLA: tags (etiquetas)
-- =====================================================
CREATE TABLE tags (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    owner_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name TEXT NOT NULL
        CHECK (char_length(btrim(name)) > 0 AND char_length(name) <= 200),
    color VARCHAR(20) NOT NULL DEFAULT '#808080',
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(owner_id, name)
);

CREATE INDEX idx_tags_owner_id ON tags(owner_id);

-- =====================================================
-- TABLA: tasks (tareas)
-- =====================================================
CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    creator_id UUID REFERENCES users(id) ON DELETE SET NULL,
    assignee_id UUID REFERENCES users(id) ON DELETE SET NULL,
    title TEXT NOT NULL
        CHECK (char_length(btrim(title)) > 0 AND char_length(title) <= 200),
    description TEXT
        CHECK (description IS NULL OR char_length(description) <= 600),
    status VARCHAR(50) NOT NULL DEFAULT 'pendiente'
        CHECK (status IN ('pendiente', 'en_progreso', 'completada', 'bloqueada')),
    priority VARCHAR(20) NOT NULL DEFAULT 'media'
        CHECK (priority IN ('baja', 'media', 'alta', 'critica')),
    due_date DATE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_tasks_project_id ON tasks(project_id);
CREATE INDEX idx_tasks_assignee_id ON tasks(assignee_id);
CREATE INDEX idx_tasks_creator_id ON tasks(creator_id);
CREATE INDEX idx_tasks_status ON tasks(status);
CREATE INDEX idx_tasks_priority ON tasks(priority);
CREATE INDEX idx_tasks_due_date ON tasks(due_date);

-- =====================================================
-- TABLA: task_tags (relación tareas-etiquetas)
-- =====================================================
CREATE TABLE task_tags (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    task_id UUID NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
    tag_id UUID NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
    UNIQUE(task_id, tag_id)
);

CREATE INDEX idx_task_tags_task_id ON task_tags(task_id);
CREATE INDEX idx_task_tags_tag_id ON task_tags(tag_id);

-- =====================================================
-- FUNCIÓN Y TRIGGERS PARA updated_at
-- =====================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tasks_updated_at BEFORE UPDATE ON tasks
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- COMENTARIOS PARA DOCUMENTACIÓN
-- =====================================================
COMMENT ON TABLE users IS 'Usuarios del sistema';
COMMENT ON TABLE projects IS 'Proyectos, pueden quedar sin dueño si el usuario se elimina';
COMMENT ON TABLE project_members IS 'Miembros de cada proyecto con sus roles';
COMMENT ON TABLE tags IS 'Etiquetas personalizadas por usuario';
COMMENT ON TABLE tasks IS 'Tareas dentro de proyectos';
COMMENT ON TABLE task_tags IS 'Relación muchos a muchos entre tareas y etiquetas';