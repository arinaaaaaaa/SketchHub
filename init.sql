-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler version: 0.9.4
-- PostgreSQL version: 13.0
-- Project Site: pgmodeler.io
-- Model Author: ---

-- Database creation must be performed outside a multi lined SQL file. 
-- These commands were put in this file only as a convenience.
-- 
-- object: sketchhub | type: DATABASE --
-- DROP DATABASE IF EXISTS sketchhub;
CREATE DATABASE sketchhub;
-- ddl-end --


-- object: public.users | type: TABLE --
-- DROP TABLE IF EXISTS public.users CASCADE;
CREATE TABLE public.users (
	user_id serial NOT NULL,
	name varchar(30) NOT NULL,
	surname varchar(30) NOT NULL,
	username varchar(30) NOT NULL,
	password varchar(30) NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY (user_id)
);
-- ddl-end --
ALTER TABLE public.users OWNER TO postgres;
-- ddl-end --

-- object: public.repositorys | type: TABLE --
-- DROP TABLE IF EXISTS public.repositorys CASCADE;
CREATE TABLE public.repositorys (
	repositury_id serial NOT NULL,
	owner_id integer,
	name varchar(100) NOT NULL,
	url_name varchar(30) NOT NULL,
	description varchar(200),
	CONSTRAINT repositorys_pk PRIMARY KEY (repositury_id)
);
-- ddl-end --
ALTER TABLE public.repositorys OWNER TO postgres;
-- ddl-end --

-- object: users_fk | type: CONSTRAINT --
-- ALTER TABLE public.repositorys DROP CONSTRAINT IF EXISTS users_fk CASCADE;
ALTER TABLE public.repositorys ADD CONSTRAINT users_fk FOREIGN KEY (owner_id)
REFERENCES public.users (user_id) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: public.models | type: TABLE --
-- DROP TABLE IF EXISTS public.models CASCADE;
CREATE TABLE public.models (
	model_id serial NOT NULL,
	name varchar(50) NOT NULL,
	url_name varchar(30) NOT NULL,
	model_path varchar(200) NOT NULL,
	add_date date NOT NULL,
	description varchar(512),
	repository_id integer,
	CONSTRAINT models_pk PRIMARY KEY (model_id)
);
-- ddl-end --
ALTER TABLE public.models OWNER TO postgres;
-- ddl-end --

-- object: repositorys_fk | type: CONSTRAINT --
-- ALTER TABLE public.models DROP CONSTRAINT IF EXISTS repositorys_fk CASCADE;
ALTER TABLE public.models ADD CONSTRAINT repositorys_fk FOREIGN KEY (repository_id)
REFERENCES public.repositorys (repositury_id) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --


