package com.expensetracker.backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expensetracker.backend.exception.ResourceNotFoundException;
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
		public Record createRecord(@RequestBody Record record) {
			return recordRepository.save(record);
}
		//Update record info by id
		@PutMapping("/records/{id}")
		public ResponseEntity<Record> updateRecord(@PathVariable Long id, @RequestBody Record recordDetails){
			Record record = recordRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Record with id:" + id + "not exist"));
			
			record.setAmount(recordDetails.getAmount());
			record.setCategory(recordDetails.getCategory());
			record.setCommentary(recordDetails.getCommentary());
			record.setDate(recordDetails.getDate());
			record.setRecordType(recordDetails.getRecordType());
			
			
			Record updatedRecord = recordRepository.save(record);
			return ResponseEntity.ok(updatedRecord);
		}
		
		//Delete record by id
		@DeleteMapping("/records/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteRecord(@PathVariable Long id){
			Record record = recordRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Record with id " + id + "not exist"));
			recordRepository.delete(record);
			Map <String,Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
			
			
			
		}
}
