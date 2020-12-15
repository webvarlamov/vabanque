package com.company.vabanque.entity;

import com.haulmont.cuba.core.entity.StandardEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.LocalDate;
import java.time.LocalTime;

@Table(name = "VABANQUE_TRANSACTION")
@Entity(name = "vabanque_Transaction")
public class Transaction extends StandardEntity {
    private static final long serialVersionUID = 4024797918240276081L;

    @Column(name = "DATE_")
    private LocalDate date;

    @Column(name = "TIME_")
    private LocalTime time;

    @Column(name = "SUM_")
    private Integer sum;

    public Integer getSum() {
        return sum;
    }

    public void setSum(Integer sum) {
        this.sum = sum;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
