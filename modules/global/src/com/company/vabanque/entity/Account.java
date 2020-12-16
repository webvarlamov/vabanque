package com.company.vabanque.entity;

import com.haulmont.chile.core.annotations.MetaProperty;
import com.haulmont.chile.core.annotations.NamePattern;
import com.haulmont.cuba.core.entity.StandardEntity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Table(name = "VABANQUE_ACCOUNT")
@Entity(name = "vabanque_Account")
@NamePattern("%s|name")
public class Account extends StandardEntity {
    private static final long serialVersionUID = -3890904263600479728L;

    @Column(name = "NAME")
    protected String name;

    @OneToMany(mappedBy = "to")
    protected List<Transaction> income;

    @OneToMany(mappedBy = "from")
    protected List<Transaction> outcome;

    @Column(name = "TYPE_")
    protected Integer type;

    @Column(name = "DESCRIPTION")
    protected String description;

    @Transient
    @MetaProperty(related = "income")
    public Integer getIncomeTotal() {
        return Optional
                .ofNullable(getIncome())
                .orElse(new ArrayList<>())
                .stream()
                .mapToInt(Transaction::getSum)
                .sum();
    }

    @Transient
    @MetaProperty(related = "outcome")
    public Integer getOutcomeTotal() {
        return Optional
                .ofNullable(getOutcome())
                .orElse(new ArrayList<>())
                .stream()
                .mapToInt(Transaction::getSum)
                .sum();
    }

    public AccountType getType() {
        return type == null ? null : AccountType.fromId(type);
    }

    public void setType(AccountType type) {
        this.type = type == null ? null : type.getId();
    }

    public List<Transaction> getOutcome() {
        return outcome;
    }

    public void setOutcome(List<Transaction> outcome) {
        this.outcome = outcome;
    }

    public List<Transaction> getIncome() {
        return income;
    }

    public void setIncome(List<Transaction> income) {
        this.income = income;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
