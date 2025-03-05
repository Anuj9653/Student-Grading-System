# Student Grading System

## 📌 Overview
The **Student Grading System** is a web-based application designed to manage student records, subjects, and grades efficiently. It allows administrators to add students, subjects, and marks while providing an intuitive dashboard to track performance statistics.

## 🚀 Features
- **Admin Dashboard**: View total students, subjects, passed and failed students.
- **Student Management**: Add, update, and delete student records.
- **Subject Management**: Add, update, and delete subjects.
- **Marks Management**: Add, update, and delete marks for students.
- **Result Generation**: Fetch student performance based on subject and semester.
- **Authentication**: Secure admin login/logout functionality.

## 🛠️ Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Libraries**: Font Awesome, MySQL2, Express Static

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```bash
 git clone https://github.com/Anuj9653/Student-Grading-System.git
```
### 2️⃣ Navigate to the Project Directory
```bash
 cd Student-Grading-System
```
### 3️⃣ Install Dependencies
```bash
 npm install
```
### 4️⃣ Configure the Database
- Ensure **MySQL** is installed and running.
- Create a database named `student_db`.
- Import the provided SQL schema.
- Update `pool` connection details in `server.js` if required.

### 5️⃣ Start the Server
```bash
 node server.js
```
Server runs on `http://localhost:3000`

## 📂 Project Structure
```
Student-Grading-System/
│── public/               # Frontend files (HTML, CSS, JS)
│── server.js             # Backend server
│── dashboard.js          # Dashboard data fetching
│── authAdmin.js          # Authentication script
│── database.sql          # SQL schema for database
│── package.json          # Project dependencies
└── README.md             # Project documentation
```

## 📌 API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/dashboard` | Fetch total students, subjects, passed and failed counts |
| POST | `/students/add` | Add a new student |
| POST | `/subjects/add` | Add a new subject |
| POST | `/marks/add` | Add marks for a student |
| GET | `/students/:id` | Get a student by USN |
| GET | `/subjects/:id` | Get a subject by code |
| GET | `/marks/:id` | Get marks by ID |
| PUT | `/students/update/:id` | Update student details |
| DELETE | `/students/delete/:id` | Delete a student |

## 💡 Future Enhancements
- Implement user roles (Admin, Teachers, Students)
- Generate automated student performance reports
- Add graphical representation of student performance

## 📜 License
This project is **open-source** and available under the **MIT License**.

## 🤝 Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue.

## 📬 Contact
- **GitHub**: [Anuj9653](https://github.com/Anuj9653)
- **Email**: anuj9653@example.com (Replace with your email)

---
_Star ⭐ the repository if you found it useful!_


