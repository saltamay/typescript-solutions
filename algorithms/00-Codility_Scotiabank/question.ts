class Subscriber {
	constructor(name, emailAddress, age) {
		this.name = name;
		this.emailAddress = emailAddress;
		this.age = age;
	}
}

class Message {
	constructor(content, minimumAge) {
		this.content = content;
		this.minimumAge = minimumAge;
	}
}

class NewsletterSystem {
	subscribers = [];

	constructor(sendEmail) {
		// use console.log() for debugging
		this.sendEmail = sendEmail;
	}

	sendNewsletter(messageInstance) {
		const messageContent = messageInstance.content;

		this.subscribers.forEach((subscriber) => {
			this.sendEmail(subscriber.emailAddress, messageContent);
		});
	}

	subscriber(SubscriberInstance) {
		if (
			!this.subscribers.find(
				(subscriber) => subscriber === SubscriberInstance
			) &&
			SubscriberInstance.age >= 13
		) {
			this.subscribers.push(SubscriberInstance);
		}
	}

	unsubscribe(SubscriberInstance) {
		this.subscribers = this.subscribers.filter(
			(subscriber) =>
				subscriber.emailAddress !== SubscriberInstance.emailAddress
		);
	}
}

module.exports = {
	Subscriber,
	Message,
	NewsletterSystem,
};

// test();
