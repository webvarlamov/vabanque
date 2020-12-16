package com.company.vabanque.web.screens.transaction;

import com.haulmont.cuba.gui.screen.*;
import com.company.vabanque.entity.Transaction;

@UiController("vabanque_Transaction.edit")
@UiDescriptor("transaction-edit.xml")
@EditedEntityContainer("transactionDc")
@LoadDataBeforeShow
public class TransactionEdit extends StandardEditor<Transaction> {
}