package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

    // JpaRepository nous permet de recuperer automatiquement les methodes et fonctions dont nous avons besoins pour les services
    
}
