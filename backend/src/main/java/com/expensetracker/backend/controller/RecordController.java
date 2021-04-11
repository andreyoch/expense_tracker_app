package com.expensetracker.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expensetracker.backend.model.Record;
import com.expensetracker.backend.repository.RecordRepository;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class RecordController {
	
	@Autowired
	private RecordRepository recordRepository;
	
	//get all records
	@GetMapping("/records")
	public List<Record> getAllRecords() {
		return recordRepository.findAll();
	}
	
	// create employee rest api
		@PostMapping("/records")
		public Record createEmployee(@RequestBody Record record) {
			return recordRepository.save(record);
}
}
