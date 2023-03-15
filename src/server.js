// modules
const express = require("express");
const cors = require("cors");
const path = require("path");

// externals modules
const server_routes = require("./routes/Index");

const app = express();

//middlewares and the router
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(server_routes);

app.get("/", async (req, res) => {
    res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
    console.log("Server is running on port " + PORT + "...")
);
