const express = require("express");
const cors = require("cors");
const contactsRoutes = require("./routes/contactsRoutes");
const { loadContacts } = require("./controllers/contactsController");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRoutes);

app.listen(5000, async () => {
  await loadContacts();
  console.log("Backend running at http://localhost:5000");
});
