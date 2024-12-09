# Pseudofy - AI Generator Pseudocode
![Pseudofy](https://github.com/user-attachments/assets/987fbe02-538c-43a3-bb0b-6ffd31ffbc9f)

**Pseudofy** adalah platform berbasis AI untuk menghasilkan _pseudocode_ dari kode sumber atau deskripsi masalah. Dengan antarmuka modern dan kemudahan integrasi berbagai bahasa pemrograman, Pseudofy mempermudah developer dalam membuat, memodifikasi, dan memahami algoritma.

🔗 **Live Demo**: [Pseudofy](https://pseudofy.rozhak.biz.id/)

## 🚀 Fitur Utama
- **Desain Responsif**: Dibangun dengan HTML, CSS, dan JavaScript, sehingga nyaman diakses dari perangkat apa pun.
- **Konversi Otomatis Kode ke Pseudocode**: Mendukung berbagai bahasa pemrograman seperti Python, Golang, JavaScript, dan banyak lagi.
- **Backend Kuat dengan Django**: Memastikan pemrosesan cepat dan andal.
- **Dukungan Berbagai Bahasa Pemrograman**: Termasuk Python, Java, Golang, JavaScript, TypeScript, dan lainnya.
- **UI Intuitif**: Mudah digunakan bahkan untuk pemula.

## 📂 Struktur Proyek
```plaintext
Pseudofy/
├── app_pseudofy
│   ├── __init__.py        # Inisialisasi aplikasi Django
│   ├── admin.py           # Konfigurasi admin panel
│   ├── apps.py            # Konfigurasi aplikasi
│   ├── marker.py          # Logika utama untuk menghasilkan pseudocode menggunakan AI
│   ├── migrations         # Folder migrasi database
│   │   └── __init__.py    # Inisialisasi migrasi
│   ├── models.py          # Model database
│   ├── static             # Berkas statis
│   │   ├── css
│   │   │   └── style.css  # Gaya tampilan frontend
│   │   ├── icons
│   │   │   └── favicon.ico # Ikon aplikasi
│   │   └── js
│   │       └── app.js     # Logika dan fungsi JavaScript
│   ├── templates
│   │   └── index.html     # Halaman utama aplikasi
│   ├── tests.py           # Pengujian unit
│   ├── urls.py            # Konfigurasi URL untuk aplikasi
│   └── views.py           # Logika tampilan dan pengendalian permintaan
├── db.sqlite3             # Basis data SQLite
├── manage.py              # Entry point untuk menjalankan aplikasi Django
├── Pseudofy
│   ├── __init__.py        # Inisialisasi proyek Django
│   ├── asgi.py            # Konfigurasi ASGI
│   ├── settings.py        # Pengaturan utama proyek
│   ├── urls.py            # URL routing proyek
│   └── wsgi.py            # Konfigurasi WSGI
├── requirements.txt       # Daftar dependensi Python
```

## 📋 Cara Instalasi dan Penggunaan
1. **Clone repository**:
    ```bash
    git clone https://github.com/RozhakXD/Pseudofy.git
    cd Pseudofy
    ```
2. **Install dependensi Python**: Pastikan Python dan pip sudah terinstall, kemudian jalankan:
    ```bash
    pip install -r requirements.txt
    ```
3. **Jalankan aplikasi Django**:
    ```bash
    python manage.py runserver
    ```
4. **Akses aplikasi**:
    Buka browser dan kunjungi:
    ```
    http://127.0.0.1:8000
    ```

## 🛠️ Teknologi yang Digunakan
- Frontend: HTML5, CSS3, JavaScript
- Backend: Django (Python)
- Hosting: [Anymhost](https://anymhost.id/)
- Version Control: Git & GitHub

## 💡Contoh Pseudocode yang Dihasilkan
- **Masukan**:
    ```plaintext
    1. Menentukan Bilangan Prima
    Buatlah Pseudocode yang meminta pengguna untuk memasukkan angka dan menentukan apakah angka tersebut adalah bilangan prima atau bukan. Bilangan prima adalah bilangan yang hanya dapat dibagi oleh 1 dan dirinya sendiri.
    ```
- **Keluaran**:
    ```plaintext
    begin
        int nAngka, i, nPembagi = 0
        output "Masukkan angka: "
        input nAngka
    
        if nAngka <= 1 then
            output nAngka + " bukan bilangan prima"
        else
            for i from 2 to nAngka - 1
                if nAngka mod i == 0 then
                    nPembagi = nPembagi + 1
                end if
            end for
    
            if nPembagi == 0 then
                output nAngka + " adalah bilangan prima"
            else
                output nAngka + " bukan bilangan prima"
            end if
        end if
    end
    ```

## 🖼️ Tangkapan Layar
![FunPic_20241209](https://github.com/user-attachments/assets/c97d62ad-5030-4a2c-980a-f45f4368e3f6)

## ⚠️ Penanganan Kesalahan
Jika terjadi pesan "**Failed to fetch pseudocode after 5 attempts!**", Anda bisa mencoba melakukan generate ulang.
Hal ini bisa terjadi karena:

- Permintaan terlalu kompleks untuk diproses dalam satu kali percobaan.
- Server AI mungkin tidak merespon dengan benar.
- Terjadi gangguan sementara pada server backend.

Jika masalah berlanjut, silakan hubungi kami melalui kontak di bawah.

## 💖 Dukung Kami
Jika Anda merasa Pseudofy bermanfaat, Anda dapat mendukung pengembangan lebih lanjut dengan memberikan donasi melalui:

- [Trakteer](https://trakteer.id/rozhak_official/tip)
- [PayPal](https://paypal.me/rozhak9)
- [Saweria](https://saweria.co/rozhak9)

## 🤝 Kontribusi
Kontribusi terbuka bagi siapa saja. Silakan lakukan fork repository ini dan ajukan pull request.

## 📝 Lisensi
Proyek ini dilisensikan di bawah [MIT License](LICENSE).

##
❤️ **Terima Kasih!**

Terima kasih telah memakai **Pseudofy - AI Generator Pseudocode!** Kami harap alat ini mempermudah Anda dalam membuat _pseudocode_ dan mempercepat proses pengembangan.
##
