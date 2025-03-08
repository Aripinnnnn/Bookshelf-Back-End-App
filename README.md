# Book Self - Backend API

## 📌 Deskripsi
Proyek **Book Self** adalah hasil dari final test dalam program belajar backend pemula di platform Dicoding. API ini menyediakan fitur untuk mengelola koleksi buku, termasuk menambahkan, mengedit, menghapus, dan menampilkan daftar buku.

## 🛠️ Teknologi yang Digunakan
- **Node.js**
- **Hapi.js** (Framework Backend)
- **Nodemon** (Untuk pengembangan)
- **ESLint** (Linting kode)

## 📌 Fitur
- **Menambahkan Buku**
- **Menampilkan Semua Buku**
- **Menampilkan Detail Buku**
- **Mengedit Data Buku**
- **Menghapus Buku**

## 📌 Instalasi & Menjalankan Server
1. **Kloning Repository**
   ```sh
   git clone https://github.com/Aripinnnnn/Bookshelf-Back-End-App
   cd book-self-backend
   ```

2. **Instal Dependensi**
   ```sh
   npm install
   ```

3. **Menjalankan Server**
   ```sh
   npm run start
   ```

## 📌 Endpoint API
| Method | Endpoint          | Deskripsi                       |
|--------|------------------|---------------------------------|
| GET    | /books           | Menampilkan semua buku         |
| GET    | /books/{id}      | Menampilkan detail buku        |
| POST   | /books           | Menambahkan buku baru          |
| PUT    | /books/{id}      | Memperbarui data buku          |
| DELETE | /books/{id}      | Menghapus buku berdasarkan ID  |

## 📌 Struktur Proyek
```
book-self-backend/
│── src/
│   │── routes.js       # Definisi rute API
│   │── handler.js      # Handler fungsi API
│   │── books.js        # Data penyimpanan buku
│   |── server.js       # Entry point server
│── package.json       # Konfigurasi npm
```

## 📌 Lisensi
Proyek ini dibuat untuk keperluan pembelajaran dan bebas digunakan serta dimodifikasi sesuai kebutuhan.

---
🚀 **Dibuat dengan semangat belajar dari Dicoding!**

