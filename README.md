# CRUDAPP

# CRUD Application (Node.js + Express + MongoDB)

A simple **CRUD (Create, Read, Update, Delete)** web application built using **Node.js, Express.js, MongoDB, and EJS**.  
This project allows users to add, view, edit, and delete user details along with image upload functionality.

---

## 🚀 Features
- Add new user (Create)
- View user list (Read)
- Update existing user details (Update)
- Delete user with confirmation (Delete)
- Image upload support
- Clean UI with navigation menu
- MongoDB database integration

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js  
- **Frontend:** EJS, HTML, CSS, Bootstrap  
- **Database:** MongoDB  
- **Others:** Multer (image upload), Method-Override, Dotenv  

---

## 📂 Project Structure

CRUD-APP
├── config
│ └── mongoConfig.js
├── models
│ └── userSchema.js
├── routes
│ └── routes.js
├── views
│ ├── layouts
│ │ ├── header.ejs
│ │ └── footer.ejs
│ ├── index.ejs
│ ├── addUser.ejs
│ ├── editUser.ejs
│ ├── deleteUser.ejs
│ ├── about.ejs
│ └── contact.ejs
├── public
│ └── uploads
├── main.js
├── package.json
└── README.md

---

## 🔄 CRUD Functionality with Screenshots

### ➕ Create User
Users can add a new user by filling the form with name, email, phone number, and image.

![Add User Screenshot]<img width="1919" height="1025" alt="image" src="https://github.com/user-attachments/assets/e3cc5fec-6880-4105-88c5-5345f7a435fd" />


---

### 📖 Read Users
Displays the list of all users stored in the MongoDB database.

![User List Screenshot](./screenshots/user-list.png)

---

### ✏️ Update User
Edit existing user details using the edit form.

![Edit User Screenshot](./screenshots/edit-user.png)

---

### ❌ Delete User
Delete a user with confirmation to avoid accidental deletion.

![Delete User Screenshot](./screenshots/delete-user.png)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/CRUD-APP.git
2️⃣ Install dependencies
npm install

3️⃣ Setup environment variables

Create a .env file:

PORT=8080
MONGO_URL=mongodb://127.0.0.1:27017/CRUDAPP
SESSION_SECRET=secret

4️⃣ Start the application
node main.js

5️⃣ Open in browser
http://localhost:8080

🗄️ Database

MongoDB is used to store user data.

Image files are stored locally in public/uploads.

👤 Author

Nikhil Rajput
📧 Email: nikhilrajput3006@gmail.com

⭐ Future Enhancements

Authentication (Login / Signup)

Pagination & Search

REST API version

Deployment on cloud (Render / Railway)


