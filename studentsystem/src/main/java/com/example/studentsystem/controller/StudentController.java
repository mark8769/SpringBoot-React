// Mapping all http methods (GET,POST,DELETE,PUT) (implementations)
package com.example.studentsystem.controller;

import com.example.studentsystem.model.Student;
import com.example.studentsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin // Prevents "TypeError: Failed to fetch from frontend that's on different port"
// E.g. Spring Boot hosted on http://localhost:8080/
// E.g Front end hosted on http://localhost:3030/
// Making API calls from different origin than http://localhost:8080/
public class StudentController {
    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService){
        this.studentService = studentService;
    }

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "New student is added.";
    }

    @GetMapping("/getAll")
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }
}
