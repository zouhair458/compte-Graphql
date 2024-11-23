package org.example.repositories;


import org.example.entities.Compte;
import org.example.entities.TypeCompte;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompteRepository extends JpaRepository<Compte, Long> {
    List<Compte> findByType(TypeCompte type);


    @Query("SELECT SUM(c.solde) FROM Compte c")
    double sumSoldes();
}
