# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table favorites (
  id_favorite               integer auto_increment not null,
  login                     varchar(255),
  full_name                 varchar(255),
  email                     varchar(255),
  followers                 integer,
  html_url                  varchar(255),
  constraint pk_favorites primary key (id_favorite))
;

create table languages (
  id_language               integer auto_increment not null,
  name                      varchar(255),
  constraint pk_languages primary key (id_language))
;

create table location (
  id_location               integer auto_increment not null,
  name                      varchar(255),
  short_name                varchar(255),
  constraint pk_location primary key (id_location))
;




# --- !Downs

SET FOREIGN_KEY_CHECKS=0;

drop table favorites;

drop table languages;

drop table location;

SET FOREIGN_KEY_CHECKS=1;

