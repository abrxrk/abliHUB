from pydantic import BaseModel
from typing import List

class Level(BaseModel):
    name: str
    steps: List[str]

class Roadmap(BaseModel):
    skill: str
    levels: List[Level]

# Skill Generation Schemas
class SkillGenerationRequest(BaseModel):
    goal: str

class Skill(BaseModel):
    id: int
    name: str
    description: str

class SkillGenerationResponse(BaseModel):
    skills: List[Skill]
