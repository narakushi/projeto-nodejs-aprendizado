const express = require('express');
const app = express();
const port = 3000;
const router = require('./routers/index');

// app.use(router);

router(app);

app.listen(port, (error) => {
  if (error) {
    console.log("Deu erro", error)
    return;
  }
  console.log("Subiu show");

})