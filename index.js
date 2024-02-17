const express =require("express");
const app = express();
const cors = require("cors")

app.use(cors())
app.use(express.json());

app.post("/api/users/:id/update", (req, res) => {
    setTimeout(()=> {
        res.send(req.body);
    }, [2000]);
});

app.listen(8800, () => {
    console.log("Backend server is running");
})