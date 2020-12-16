package com.company.vabanque.web.screens.account;

import com.haulmont.cuba.gui.screen.*;
import com.company.vabanque.entity.Account;

@UiController("vabanque_Account.browse")
@UiDescriptor("account-browse.xml")
@LookupComponent("accountsTable")
@LoadDataBeforeShow
public class AccountBrowse extends StandardLookup<Account> {
}