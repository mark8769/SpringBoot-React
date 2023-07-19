package com.example.studentsystem.service;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class StudentServiceImplementation {
    @Id // Makes it the primary key
    @GeneratedValue(strategy= GenerationType.IDENTITY) // Make id autoincrement
    private int id;
    private String name;
    private String address;

    public StudentServiceImplementation() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
