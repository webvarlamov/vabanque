package com.company.vabanque.entity;

import com.haulmont.chile.core.annotations.NamePattern;
import com.haulmont.cuba.core.entity.StandardEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Table(name = "VABANQUE_ACCOUNT")
@Entity(name = "vabanque_Account")
@NamePattern("%s|name")
public class Account extends StandardEntity {
    private static final long serialVersionUID = -3890904263600479728L;

    @Column(name = "NAME")
    private String name;

    @OneToMany(mappedBy = "from")
    private List<Transaction> income;

    @OneToMany(mappedBy = "to")
    private List<Transaction> outcome;

    @Column(name = "TYPE_")
    private Integer type;

    @Column(name = "DESCRIPTION")
    private String description;

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