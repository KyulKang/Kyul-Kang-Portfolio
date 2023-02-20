//const { db } = require('./db')
const PORT = process.env.PORT || 8080;
const app = require('./app');

app.listen(PORT, () => console.log(`Starting up the server at port ${PORT}`));
