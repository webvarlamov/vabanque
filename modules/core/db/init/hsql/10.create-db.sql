-- begin VABANQUE_TRANSACTION
create table VABANQUE_TRANSACTION (
    ID varchar(36) not null,
    VERSION integer not null,
    CREATE_TS timestamp,
    CREATED_BY varchar(50),
    UPDATE_TS timestamp,
    UPDATED_BY varchar(50),
    DELETE_TS timestamp,
    DELETED_BY varchar(50),
    --
    DATE_ date,
    NAME varchar(255),
    DESCRIPTION varchar(255),
    CONFIRMED boolean,
    TIME_ time,
    SUM_ integer,
    FROM_ID varchar(36),
    TO_ID varchar(36),
    --
    primary key (ID)
)^
-- end VABANQUE_TRANSACTION
-- begin VABANQUE_ACCOUNT
create table VABANQUE_ACCOUNT (
    ID varchar(36) not null,
    VERSION integer not null,
    CREATE_TS timestamp,
    CREATED_BY varchar(50),
    UPDATE_TS timestamp,
    UPDATED_BY varchar(50),
    DELETE_TS timestamp,
    DELETED_BY varchar(50),
    --
    NAME varchar(255),
    TYPE_ integer,
    DESCRIPTION varchar(255),
    --
    primary key (ID)
)^
-- end VABANQUE_ACCOUNT
