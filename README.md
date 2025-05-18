# 🧱 Customer API - Clean Architecture with Express & MongoDB

API ini dibangun menggunakan arsitektur **Clean Architecture**, berbasis **Express.js** dan **MongoDB (via Mongoose)**. Tujuannya adalah memisahkan tanggung jawab antar lapisan: controller, use case, repository, dan infrastructure.

---

## 📦 Fitur

- Ringkasan customer berdasarkan gender
- Struktur modular dan scalable dengan Clean Architecture

---

## 📁 Struktur Folder

```
src/
├── config/                # Konfigurasi seperti Mongo URI
├── domain/                # Entity dan interface repository
├── infrastructure/
│   ├── database/          # Model mongoose dan koneksi
│   └── repositories/      # Implementasi repository
├── interfaces/
│   ├── controllers/       # HTTP controller
│   └── routes/            # Express routing
├── usecases/              # Business logic (use case)
└── app.js                 # Entry point
```

---

## 🚀 Cara Menjalankan Aplikasi

### 1. Clone dan install dependencies

```bash
git clone <repo-url>
cd customer.api
npm install
```

### 2. Buat file `.env`

```env
MONGO_HOST=localhost
MONGO_PORT=27017
MONGO_DB=cleanarch_db
MONGO_USER=
MONGO_PASS=
PORT=3000
```

### 3. Jalankan Server

#### Development (auto-reload):
```bash
npm run dev
```

#### Production:
```bash
npm start
```

---

## 🧪 API Testing via Postman

### 📥 Import Postman Collection

Gunakan file `CustomerAPI.postman_collection.json` (bisa dibuat manual atau request file-nya).

### 🔧 Endpoint Utama

- **GET** `/customers/summary/gender`  
  Mendapatkan ringkasan jumlah customer berdasarkan gender.

- **POST** `/customers`  
  Menambahkan customer baru.  
  Contoh body:
  ```json
  {
    "name": "Alice",
    "gender": "female",
    "age": 25,
    "location": "Jakarta",
    "location_type": "urban",
    "email": "alice@example.com",
    "phone_number": "081234567890",
    "brand_device": "iPhone",
    "digital_interest": ["shopping", "news"],
    "date": "2024-01-01",
    "login_hour": 9
  }
  ```

---

## ✅ Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- Clean Architecture

---

## ✍️ Author

Made with ❤️ by [Ryan Apratama](https://github.com/ryanapratama)