from fastapi import APIRouter
from app.schemas.roadmap import Roadmap, SkillGenerationRequest, SkillGenerationResponse, Skill
router = APIRouter()

mock_data = {
        "skill": "Backend Development",
        "levels": [
            {"name": "Beginner", "steps": ["Python basics", "APIs", "CRUD project"]},
            {"name": "Intermediate", "steps": ["FastAPI", "DB integration"]},
            {"name": "Advanced", "steps": ["Scaling", "Testing", "Deployment"]}
        ]
    }

@router.get("/roadmap" , response_model=Roadmap)
async def get_roadmap():
    return mock_data

@router.post("/generate-skills", response_model=SkillGenerationResponse, tags=["Skills"])
async def generate_skills(request: SkillGenerationRequest):
    """
    Generate skill suggestions based on user's career goal.
    
    This endpoint analyzes the user's goal and returns relevant skills to learn.
    Currently returns static data - will be replaced with OpenAI integration later.
    """
    goal_lower = request.goal.lower()
    
    # Static skill suggestions based on keywords (will be replaced with OpenAI)
    if any(keyword in goal_lower for keyword in ["frontend", "front-end", "ui", "react", "web design"]):
        skills = [
            {"id": 1, "name": "HTML & CSS", "description": "Foundation of web development"},
            {"id": 2, "name": "JavaScript", "description": "Interactive web programming"},
            {"id": 3, "name": "React.js", "description": "Modern UI framework"},
            {"id": 4, "name": "Tailwind CSS", "description": "Utility-first CSS framework"},
            {"id": 5, "name": "TypeScript", "description": "Type-safe JavaScript"}
        ]
    elif any(keyword in goal_lower for keyword in ["backend", "back-end", "server", "api", "database"]):
        skills = [
            {"id": 1, "name": "Python", "description": "Versatile programming language"},
            {"id": 2, "name": "FastAPI", "description": "Modern Python web framework"},
            {"id": 3, "name": "Database Design", "description": "SQL and NoSQL databases"},
            {"id": 4, "name": "REST APIs", "description": "Web service architecture"},
            {"id": 5, "name": "Docker", "description": "Containerization technology"}
        ]
    elif any(keyword in goal_lower for keyword in ["fullstack", "full-stack", "full stack"]):
        skills = [
            {"id": 1, "name": "JavaScript", "description": "Frontend and backend language"},
            {"id": 2, "name": "React.js", "description": "Frontend framework"},
            {"id": 3, "name": "Node.js", "description": "Backend JavaScript runtime"},
            {"id": 4, "name": "MongoDB", "description": "NoSQL database"},
            {"id": 5, "name": "REST APIs", "description": "Web service design"}
        ]
    elif any(keyword in goal_lower for keyword in ["data", "analytics", "science", "machine learning", "ai"]):
        skills = [
            {"id": 1, "name": "Python", "description": "Data science language"},
            {"id": 2, "name": "Pandas", "description": "Data manipulation library"},
            {"id": 3, "name": "SQL", "description": "Database querying"},
            {"id": 4, "name": "Data Visualization", "description": "Charts and graphs"},
            {"id": 5, "name": "Machine Learning", "description": "AI and ML basics"}
        ]
    elif any(keyword in goal_lower for keyword in ["mobile", "app", "ios", "android", "flutter", "react native"]):
        skills = [
            {"id": 1, "name": "React Native", "description": "Cross-platform mobile development"},
            {"id": 2, "name": "Flutter", "description": "Google's mobile framework"},
            {"id": 3, "name": "Mobile UI/UX", "description": "App design principles"},
            {"id": 4, "name": "API Integration", "description": "Connecting to backend services"},
            {"id": 5, "name": "App Store Deployment", "description": "Publishing mobile apps"}
        ]
    else:
        # Default/general skills for unclear goals
        skills = [
            {"id": 1, "name": "Programming Fundamentals", "description": "Core programming concepts"},
            {"id": 2, "name": "Problem Solving", "description": "Algorithmic thinking"},
            {"id": 3, "name": "Git & GitHub", "description": "Version control systems"},
            {"id": 4, "name": "Command Line", "description": "Terminal and shell basics"},
            {"id": 5, "name": "Project Management", "description": "Planning and execution"}
        ]
    
    return SkillGenerationResponse(skills=skills)