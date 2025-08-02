from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers.roadmap import router as roadmap_router

app = FastAPI(
    title="AbliHUB API",
    description="AI-powered skill-building platform API",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],  # Frontend URLs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(roadmap_router, tags=["Roadmap"])

@app.get("/")
async def root():
    return {"message": "AbliHUB backend is running successfully 🚀!!"}