var express=require('express');
var apiRouter=require('./routes')

const app = express();

app.use(express.static('public'));
app.use(apiRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server listening on port: ${port}`));