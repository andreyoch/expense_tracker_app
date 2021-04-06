package com.expensetracker.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="records")
public class Record {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "record_type")
	private String recordType;
	
	@Column(name = "amount")
	private double amount;
	
	@Column(name = "date")
	private String date;
	
	@Column(name = "category")
	private String category;
	
	@Column(name = "commentary")
	private String commentary;
	
	public Record() {
		
	}
	
	public Record(String recordType, double amount, String date, String category, String commentary) {
		super();
		this.recordType = recordType;
		this.amount = amount;
		this.date = date;
		this.category = category;
		this.commentary = commentary;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getRecordType() {
		return recordType;
	}
	public void setRecordType(String recordType) {
		this.recordType = recordType;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getCommentary() {
		return commentary;
	}
	public void setCommentary(String commentary) {
		this.commentary = commentary;
	}
	
	
	

}
