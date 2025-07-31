from pydantic import BaseModel
from typing import List

class Level(BaseModel):
    name: str
    steps: List[str]

class Roadmap(BaseModel):
    skill: str
    levels: List[Level]
