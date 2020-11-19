## Location
* npa changed to zip

## User
* user_type removed
* add newsletter (boolean)

## Card
* password_digest removed

## Install mapbox

```bash
docker-compose exec app yarn add mapbox-gl
```

## export DB

pg_dump resj_production > dump.sql
> use pg_dump -a for data only

docker run --name some-postgres -e POSTGRES_PASSWORD= -e POSTGRES_USER=postgres -v /Users/nkcr/Desktop/migration/data/data:/var/lib/postgresql/data postgres:11

su - postgres
createuser --interactive --pwprompt
> resj
> 1234

createdb -T template0 resj_production -U resj
psql resj_production < /var/lib/postgresql/data/dump.sql -U resj

psql
> \c resj_production
> alter table locations rename column npa to zip;
> alter table users drop column user_type_id;
> alter table users drop column uid;
> drop table user_types;
> alter table cards drop column password_digest;
> alter table cards rename column card_type_id to card_type;
> alter table cards rename column status_id to status;
> drop table access_tokens;
> drop table activities;
> drop table affiliations;
> drop table card_affiliations;
> drop table articles;
> drop table article_themes;
> drop table card_responsables;
> drop table card_types;
> drop table card_users;
> drop table connections;
> drop table documents;
> drop table elements;
> drop table help_categories;
> drop table help_pages;
> drop table newsletters;
> alter table orator_disponibilities rename to disponibilities_orators;
> alter table disponibilities_orators drop column created_at, drop column updated_at;
> alter table orator_themes rename to orators_themes;
> alter table orators_themes drop column created_at, drop column updated_at;
> alter table orator_disponibilities_id_seq rename to disponibilities_orators_id_seq;
> alter table orator_themes_id_seq rename to orators_themes_id_seq;
> drop table ownership_types;
> drop table ownership_actions;
> drop table actions;
> drop table ownerships;
> drop table pages;
> drop table parents;
> drop table responsables;
> drop table sessions;
> drop table statuses;
> drop table subject_themes;
> drop table subjects;
> drop table user_newsletters;
> drop table schema_migrations;
> delete from taggings where card_id = 19 or card_id = 156;
> \q
pg_dump --column-inserts -U resj -a resj_production > /var/lib/postgresql/data/new_dump.sql

re-order the dump:

locations > cards > card_parents > tags > taggings
users > orators