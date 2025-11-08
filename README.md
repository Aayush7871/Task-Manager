📝 Task Manager Application

A full-stack Task Manager application that allows users to create, update, delete, and manage their daily tasks efficiently.
Built with a React frontend and a Node.js/Express backend, and powered by MongoDB for data storage.

📁 Project Structure
task-manager/
│
├── backend/              # Express & Node.js server
│   ├── src/
│   │   ├── config/       # Database configuration
│   │   ├── controllers/  # API request handlers
│   │   ├── models/       # Mongoose schemas
│   │   ├── routes/       # Express routes
│   │   ├── middleware/   # Auth & error middleware
│   │   └── server.js     # Server entry point
│   └── package.json
│
├── frontend/             # React app
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # App pages (Dashboard, Login, etc.)
│   │   ├── services/     # API calls using Axios
│   │   ├── context/      # Global state management
│   │   └── App.js
│   └── package.json
│
└── README.md

🚀 Features
Frontend

User-friendly UI built with React

React Router for navigation

Axios for API communication

Responsive and modern design (using TailwindCSS or Material UI)

Authentication pages (Login / Register)

Dashboard for task management (CRUD operations)

Backend

Express.js REST API

JWT Authentication & bcrypt password hashing

MongoDB database with Mongoose models

CRUD APIs for task management

Centralized error handling

⚙️ Technologies Used
Frontend

React.js

TailwindCSS / Material UI

Backend

Node.js

Express.js

MongoDB & Mongoose

🧩 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/task-manager.git
cd task-manager

2️⃣ Setup Backend
cd backend
npm install


Create a .env file inside /backend with the following:

PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


Run the backend server:

npm start


The server will start at: http://localhost:4000

3️⃣ Setup Frontend
cd ../frontend
npm install


Create a .env file inside /frontend:

REACT_APP_API_URL=http://localhost:4000


Run the frontend:

npm run dev


Frontend runs on: http://localhost:5173

🔗 API Endpoints
Auth
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login existing user
Tasks
Method	Endpoint	Description
GET	/api/tasks	Get all tasks for a user
POST	/api/tasks	Create a new task
PUT	/api/tasks/:id	Update an existing task
DELETE	/api/tasks/:id	Delete a task
🧪 Example Task Object
{
  "_id": "652ffb1a9f1a3c22a4d6b912",
  "title": "Finish project README",
  "description": "Write a detailed README file for both frontend and backend",
  "status": "pending",
  "dueDate": "2025-10-31",
  "user": "652ffb0b9f1a3c22a4d6b910"
}

🧠 Future Enhancements

Add user profile and role management

Integrate notifications and reminders

Implement drag-and-drop task sorting

🧑‍💻 Author

Aayush Raj

📜 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute this project as per the license terms.



