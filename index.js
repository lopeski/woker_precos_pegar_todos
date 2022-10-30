var amqp = require('amqplib/callback_api');
const { getAllProducts	} = require('./infra/db/repositoris/products')

(async () => {
	amqp.connect('amqp://localhost', function (error0, connection) {
		if (error0) {
			throw error0;
		}
		connection.createChannel(function(error1, channel) {
			if (error1) {
				throw error1
			}

			const product = await findUpdatesProcuts();

			var queue = process.env.QUEUE;

			channel.assertQueue(queue, {
				durable: false
			});
			Promise.all(product.map((item) => {
				channel.sendToQueue(queue, Buffer.from(itens));
				console.log(" [X] Sent %s", itens.products_id);
			}))
			
		})
	})
})
