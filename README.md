# TỔNG QUAN DỰ QUÁN
## 1. Cấu trúc thư mục 

1. **routes** – Nơi định nghĩa các địa chỉ (endpoint) mà Frontend sẽ gọi để lấy hoặc gửi dữ liệu.  
   > Ví dụ: `/users`, `/products`  

2. **controllers** – “Người điều phối” giữa route và service.  
   - Nhận dữ liệu từ request (params, body, query)  
   - Gọi **service** để xử lý  
   - Gửi response về cho client  

3. **services** – Nơi xử lý logic chính của ứng dụng.  
   - Làm việc với **model** để truy vấn hoặc cập nhật database  
   - Thực hiện các thao tác nghiệp vụ  

4. **models** – Là tầng giao tiếp trực tiếp với **database**.  
   - Chứa các hàm tạo, đọc, cập nhật, xóa dữ liệu (CRUD)  

5. **schemas** – Định nghĩa cấu trúc bảng hoặc collection trong database (tên cột, kiểu dữ liệu, ràng buộc...).  

6. **helpers** – Các hàm tiện ích nhỏ hỗ trợ cho service hoặc controller.  
   > Ví dụ: Hàm kiểm tra năm nhuận, định dạng ngày giờ, mã hóa mật khẩu.  

7. **middlewares** – Đoạn code chạy trước khi request tới controller.  
   > Ví dụ: Kiểm tra người dùng đã đăng nhập chưa, xác thực token, ghi log.  

8. **config** – Chứa các file cấu hình chung của dự án.  
   > Ví dụ: cấu hình kết nối database, cấu hình cổng server, biến môi trường.

## 2. Sơ đồ làm việc 
- Sử dụng mô hình MVC 

```mermaid
flowchart LR
    A[Views (ReactJS)] -- Request --> B[Routes]
    B -- CALL --> C[Controllers]
    C -- CALL --> D[Services]
    D --> E[Models]
    E --> C
    C --> A
```

## 3. Hướng dẫn kết nối CSDL - ORM 
- Đường link cho db chạy ở localhost (.env) `type_db://user:pwd@localhost:port/db`

*Ví dụ*: mongodb://cloudian:powerful@localhost:3306/BLOG
#### 3.1. Prisma mongodb 
B1. Dowload Prisma và cài đặt Prisma tại đường link: 

Mặc định Prisma sẽ chạy ở port `27017` 

B2. Tạo mới 1 user trong mongodb ở collection admin 

>admin: **db.getUsers():** Lấy danh sách tất cả người dùng 

>admin: **db.auth("username" , "pwd")**: Xác thực một người dùng 

>admin: **db.createUsert({user: "name" , pwd: "password" , roles: [role: 'root' , db:'admin']})**: Cấp quyền cao nhất cho user mới khởi tạo 

B3. Sử dụng file được cung cấp để tạo dữ liệu mẫu và .env

B4. Tại thư mục prisma/mongodb. Chạy lệnh `npx prisma db push` để đồng bộ hóa giữa schema và db 

#### 3.2. Prisma mysql 
B1. Dowload mysql và cài đặt tại đường link 

Mặc định mysql sẽ chạy ở port 3306 

B2. Sử dụng file được cung cấp để tạo dữ liệu mẫu và .env 

B3. Tại thư mục prisma/mysql. Chạy lệnh `npx prisma migrate dev` để đồng bộ giữa schema và db

Mongodb Atlas: mongodb+srv://cloud:cloud@cluster0.b7l7uxh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0