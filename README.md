# AbliHUB 🧠🚀  
AbliHUB is an **AI-powered project-based learning platform** that helps learners choose a skill, generate a personalized roadmap, build mini-projects, and get instant feedback — all in one place.

---

## 🌟 Features

- 🎯 **SkillCard**: Choose a skill like Web Dev, Data Science, ML, etc.
- 🗺️ **AI Roadmap Generator**: Personalized step-by-step roadmap based on your selected skill and current level.
- 🛠️ **Mini Project Creator**: Mini-projects generated dynamically as you progress.
- 🤖 **AI Feedback System**: Upload your code/project and get instant feedback powered by OpenAI.
- 📊 **Progress Dashboard**: Visual dashboard to track learning and project completion.

---

## 📸 Preview

🚧 This is the **Week 2 UI prototype**. Backend and AI features are being actively developed.

![AbliHUB Dashboard Prototype](./UIPrototype.png)

---

## 🧰 Tech Stack

### Frontend
- ⚛️ React + Vite
- 🎨 Tailwind CSS (UI design)

### Backend
- ⚡ FastAPI (Python) – for API, project generation, feedback logic
- 🧠 OpenAI API – for AI roadmap, mini-projects, feedback

### Auth & Database *(planned)*
- 🔐 Firebase or Auth.js – for authentication
- 🗂️ MongoDB or Supabase – for backend data and user progress

---

## 📦 Installation

### 🔧 Frontend Setup (React + Vite)

```bash
# Clone the repository
git clone https://github.com/abrxrk/ablihub.git

# Go into the project directory
cd ablihub/frontend

# Install frontend dependencies
npm install

# Start the development server
npm run dev
```

---

### ⚙️ Backend Setup (FastAPI)

```bash
# Go into the backend directory
cd ../backend

# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install backend dependencies
pip install -r requirements.txt

# Run the FastAPI server
uvicorn main:app --reload
```

API Docs available at:
- Swagger UI: [http://localhost:8000/docs](http://localhost:8000/docs)
- ReDoc: [http://localhost:8000/redoc](http://localhost:8000/redoc)

---

## 📌 Project Status

> ✅ UI Prototype built  
> ⚙️ Backend setup started (FastAPI)  
> 🔮 Upcoming: AI integration, auth, database, and dashboard logic

---

## 🤝 Contributing

This is a solo learning project for now — feel free to explore, suggest, or fork! Contributions are welcome once the backend structure is stable.

---

## 📜 License

MIT License

---

> Made with 💡 by [@abrxrk](https://github.com/abrxrk)