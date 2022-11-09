package vn.codegym.backend.service;

import vn.codegym.backend.model.Employee;

import java.util.Optional;

public interface IEmployeeService {
    Optional<Employee> findByEmail(String email);
}
