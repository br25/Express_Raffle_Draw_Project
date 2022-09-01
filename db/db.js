// /db/db.js

const Ticket = require('../models/Ticket');

class MyDB {
	constructor() {
		this.tickets = [];
	}

	// single ticket create
	
	create(username, price) {
		const ticket = new Ticket(username, price);
		this.tickets.push(ticket);
		return ticket;
	}

	// multiple ticket create
	
	bulkCreate(username,price,quantity) {
		const Bulk = [];
		for (let i = 0; i < quantity; i++) {
			const ticket = this.create(username, price);
			Bulk.push(ticket)
		}
		return Bulk;
	}
	
	// find All ticket
	
	find() {
		return this.tickets;
	}

	// find By id ticket

	findById(ticketId) {
		const ticket = this.tickets.find(
			/**
			 * @param {Ticket} ticket
			 */
			(ticket) => ticket.id === ticketId
		);

		return ticket;
	}
	// find By username ticket
	
	
	findByUser(username) {
		const tickets = this.tickets.filter(
			/**
			 * @param {Ticket} ticket
			 */
			(ticket) => ticket.username === username
		);
		return tickets;
	}

	// update ticket
	

	updateById(ticketId, ticketBody) {
		const ticket = this.findById(ticketId);
		ticket.username = ticketBody.username ?? ticket.username;
		ticket.price = ticketBody.price ?? ticket.price;
		ticket.updatedAt = new Date();
		return ticket;
	}
	// delete ticket
	deleteById(ticketId) {
		const index = this.tickets.findIndex(
			/**
			 * @param {Ticket} ticket
			 */
			(ticket) => ticket.id === ticketId
		);

		if (index !== -1) {
			this.tickets.splice(index, 1);
			return true;
		} else {
			return false;
		}
	}

	draw(winnerCount) {
		const winnerIndices = new Array(winnerCount);
		let index = 0;
		while (index < winnerCount) {
			let winnerIndex = Math.floor(Math.random() * this.tickets.length);
			if (!winnerIndices.includes(winnerIndex)) {
				winnerIndices[index++] = winnerIndex;
				continue;
			}
		}

		const winners = winnerIndices.map((index) => this.tickets[index]);
		console.log(winners);
		return winners;
	}

}

const myDB = new MyDB();
module.exports = myDB;