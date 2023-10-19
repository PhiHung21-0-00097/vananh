const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const salt = 10;

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bcmbd",
});

// app.get("/", (req, res) => {
//   res.json("Nguyen Hoang Phi Hung");
// });

app.get("/", (req, res) => {
  const sql = "SELECT * FROM info_contact";
  db.query(sql, (err, data) => {
    if (err) return res.json("Err");
    return res.json(data);
  });
});
// Lấy dữ liệu từ bảng tin tức
app.get("/info_tintuc", (req, res) => {
  const sql = "SELECT * FROM info_tintuc";
  db.query(sql, (err, data) => {
    if (err) return res.json("Err");
    return res.json(data);
  });
});
// Lấy dữ liệu từ bảng sản phẩm
app.get("/info_sp", (req, res) => {
  const sql = "SELECT * FROM info_sp";
  db.query(sql, (err, data) => {
    if (err) return res.json("Err");
    return res.json(data);
  });
});
// lấy dũ liệu từ bảng contact
app.get("/info_contact", (req, res) => {
  const sql = "SELECT * FROM info_contact";
  db.query(sql, (err, data) => {
    if (err) return res.json("Err");
    return res.json(data);
  });
});
//lấy dũ liệu từ bảng service
app.get("/info_service", (req, res) => {
  const sql = "SELECT * FROM info_service";
  db.query(sql, (err, data) => {
    if (err) return res.json("Err");
    return res.json(data);
  });
});
// đưa dũ liệu vào bảng service
app.post("/create", (req, res) => {
  const sql =
    "INSERT INTO info_contact (name, email, phone, title,text) VALUES (?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.title,
    req.body.text,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

// update dữ liệu bảng contact
app.put("/update/:id", (req, res) => {
  const sql =
    "update info_contact set `name` = ? `email` = ? `phone` = ? `title` = ? `text` = ? WHERE ID = ?";
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
  const values = [
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.title,
    req.body.text,
  ];
});
// lấy dữ liệu từ id = ?
app.get("/info_sp/:id", (req, res) => {
  const sql = "SELECT * FROM info_sp WHERE ID = ?";
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
  const values = [req.body.spName, req.body.price, req.body.images];
});

app.listen(3002, () => {
  {
    console.log("Phi Hung");
  }
});
