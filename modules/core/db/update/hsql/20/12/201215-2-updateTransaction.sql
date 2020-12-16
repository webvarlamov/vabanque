alter table VABANQUE_TRANSACTION add column CONFIRMED boolean ;
alter table VABANQUE_TRANSACTION add column FROM_ID varchar(36) ;
alter table VABANQUE_TRANSACTION add column DESCRIPTION varchar(255) ;
alter table VABANQUE_TRANSACTION add column TO_ID varchar(36) ;
alter table VABANQUE_TRANSACTION add column NAME varchar(255) ;
