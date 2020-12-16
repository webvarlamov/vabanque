package com.company.vabanque.web.screens.transaction;

import com.haulmont.cuba.gui.screen.*;
import com.company.vabanque.entity.Transaction;

@UiController("vabanque_Transaction.browse")
@UiDescriptor("transaction-browse.xml")
@LookupComponent("transactionsTable")
@LoadDataBeforeShow
public class TransactionBrowse extends StandardLookup<Transaction> {
}