package com.expensetracker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.expensetracker.backend.model.Record;


@Repository
public interface RecordRepository extends JpaRepository<Record,Long>{

}
