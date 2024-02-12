# Sử dụng ảnh chứa Node.js
FROM node

# Thiết lập thư mục làm việc trong container
WORKDIR /usr/src/app

# Sao chép package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép mã nguồn của ứng dụng vào thư mục làm việc
COPY . .

# Build the TypeScript code
RUN npm run build


# Khởi chạy ứng dụng khi container được khởi động 
CMD ["node", "dist/main"]
