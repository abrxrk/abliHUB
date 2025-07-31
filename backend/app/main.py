from fastapi import FastAPI
from app.routers.roadmap import router as roadmap_router


app = FastAPI()

app.include_router(roadmap_router , tags=["roadmap"])

@app.get("/")
async def root():
    return {"message" : "AbliHUB backend is running successfully 🚀!!"}