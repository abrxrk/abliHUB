from fastapi import APIRouter

router = APIRouter()

mock_data = {
        "skill": "Backend Development",
        "levels": [
            {"name": "Beginner", "steps": ["Python basics", "APIs", "CRUD project"]},
            {"name": "Intermediate", "steps": ["FastAPI", "DB integration"]},
            {"name": "Advanced", "steps": ["Scaling", "Testing", "Deployment"]}
        ]
    }
@router.get("/roadmap")
async def get_roadmap():
    return mock_data