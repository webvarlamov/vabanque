alter table VABANQUE_TRANSACTION add constraint FK_VABANQUE_TRANSACTION_ON_FROM foreign key (FROM_ID) references VABANQUE_ACCOUNT(ID);
create index IDX_VABANQUE_TRANSACTION_ON_FROM on VABANQUE_TRANSACTION (FROM_ID);