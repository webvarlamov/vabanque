package com.company.vabanque.web.screens.account;

import com.haulmont.cuba.gui.screen.*;
import com.company.vabanque.entity.Account;

@UiController("vabanque_Account.edit")
@UiDescriptor("account-edit.xml")
@EditedEntityContainer("accountDc")
@LoadDataBeforeShow
public class AccountEdit extends StandardEditor<Account> {
}