package com.geniescode.material;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface MaterialRepository extends JpaRepository<Material, Integer> {
}
