# 💒 Website Thiệp Cưới Hướng Dẫn Host Vercel & Quản Lý Link | Lê Vy & Hoài Bảo

Dự án Website Thiệp Cưới Online sang trọng dành cho đám cưới **Hà Lê Vy & Nguyễn Huỳnh Hoài Bảo** (Ngày 13/09/2026).

---

## 🚀 1. Hướng Dẫn Host Lên Vercel (Miễn Phí 100%)

Bạn có thể đưa trang web lên Vercel chỉ trong **2 phút** theo 1 trong 2 cách sau:

### Cách 1: Đăng lên Vercel qua GitHub (Khuyên dùng)
1. Đẩy toàn bộ thư mục này lên một **Repository** trên GitHub (đặt tên ví dụ: `wedding-hoaibao-levy`).
2. Truy cập [https://vercel.com](https://vercel.com) và Đăng nhập (bằng tài khoản GitHub).
3. Bấm **"Add New..."** ➔ chọn **"Project"**.
4. Chọn Repository `wedding-hoaibao-levy` từ danh sách ➔ Bấm **"Deploy"**.
5. Vercel sẽ tự động cấp cho bạn một đường link đẹp có dạng: `https://wedding-hoaibao-levy.vercel.app`.

### Cách 2: Deploy trực tiếp từ máy tính bằng Vercel CLI
Nếu đã cài Node.js, mở Terminal (PowerShell / Command Prompt) tại thư mục dự án và chạy:
```bash
npx vercel
```
Làm theo các bước hướng dẫn trên màn hình ➔ Trang web sẽ được host công khai ngay lập tức!

---

## 🔒 2. Quản Lý & Tạo Link Gửi Riêng Cho Từng Khách Mời

Trang thiệp công khai (`index.html`) đã **ẩn hoàn toàn nút tạo link**, giúp khách mời chỉ nhìn thấy thiệp trang trọng mà không thể tự sửa hay tạo link.

Chỉ riêng bạn (người chủ trì) mới có thể vào trang quản lý bí mật để tạo link:

### 📍 Đường dẫn trang Quản lý Admin:
- Khi chạy trên máy: `http://localhost:8080/admin.html`
- Khi host lên Vercel: `https://domain-cua-ban.vercel.app/admin` (hoặc `/admin.html`)

### 🛠️ Các tính năng trong trang Admin (`admin.html`):
1. **Cấu hình Base URL**: Nhập tên domain chính thức của bạn (ví dụ: `https://wedding-hoaibao-levy.vercel.app` hoặc tên miền riêng `https://chungdoi.com/i/hoaibao-levy`).
2. **Tạo 1 Link Đơn Lẻ**:
   - Nhập tên khách (Ví dụ: `Anh Nam & Chị Mai`, `Lớp Tin học K16`...).
   - Bấm **"Tạo & Chép Link"** ➔ Tự động lưu link vào bộ nhớ tạm (Clipboard) để bạn dán ngay sang Zalo / Messenger gửi khách.
3. **Tạo Hàng Loạt (Nhiều Khách Cùng Lúc)**:
   - Chuyển sang Tab **"Tạo Hàng Loạt"**.
   - Dán danh sách tên khách mời (mỗi tên trên 1 dòng).
   - Bấm **"Tạo Tất Cả Link"** ➔ Trang web xuất ra bảng danh sách link từng người với nút **Copy** riêng hoặc nút **Copy Tất Cả Link** để dán sang Excel / Zalo tiện lợi.

---

## 📂 Cấu Trúc File Dự Án

```
d:\Downloads\wedding\
├── index.html          # Trang thiệp cưới công khai (Dành cho khách mời xem)
├── admin.html          # Trang Quản lý riêng của bạn (Dành cho host tạo link)
├── vercel.json         # File cấu hình deploy Vercel
├── style.css           # CSS giao diện cơ bản & thiệp chính
├── style2.css          # CSS hiệu ứng cao cấp, animation & phông chữ
├── js.js               # Đếm ngược, cánh hoa rơi, đĩa nhạc xoay & album lightbox
├── source/             # Thư mục chứa hình ảnh & nhạc cưới
│   ├── photos/         # Ảnh cưới chất lượng cao
│   ├── music.mp3       # Nhạc nền thiệp cưới
│   └── ...
└── README.md          # File hướng dẫn này
```

---

## 🎨 Tính Năng Nổi Bật Trên Thiệp Công Khai
- 💌 **Bìa Thư Mở Đầu Trang Trọng**: Tự động hiển thị tên khách mời cá nhân hoá được gửi từ link `?to=Tên+Khách`.
- 🎵 **Nút Đĩa Nhạc Xoay & Sóng Âm (Music Toggle)**: Bấm bật/tắt nhạc loop chuyên nghiệp ở góc phải màn hình.
- 🌸 **Cánh Hoa Kim Sa Rơi**: Hiệu ứng cánh hoa vàng rực rỡ và lãng mạn.
- ⏳ **Đồng Hồ Đếm Ngược**: Đếm chi tiết Ngày / Giờ / Phút / Giây đến 13/09/2026.
- 🖼️ **Album Xem Ảnh Khổ Lớn (Lightbox)**: Nhấp ảnh cưới bất kỳ để phóng to xem chất lượng cao.
- 📍 **Thông Tin Lễ Cưới & Bản Đồ Chỉ Đường**: Thiết kế khung gấm hoàng gia không vỡ dòng.

---

© 2026 Website Thiệp Cưới | Lê Vy & Hoài Bảo
