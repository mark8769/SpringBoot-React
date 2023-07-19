// For spring data japa implementation
package com.example.studentsystem.repository;

import com.example.studentsystem.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


// Give name of model class, and type of the primary key.
@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

}
