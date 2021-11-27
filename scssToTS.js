import fs from 'fs';
fs.readFile('./src/styles/_colors.scss', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log('data from read', data);
});
