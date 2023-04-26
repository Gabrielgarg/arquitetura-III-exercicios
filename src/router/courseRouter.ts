import express from "express"
import { CourseController } from "../controller/CourseController"
import { CourseBusiness } from "../business/CourseBusiness"

export const courseRouter = express.Router()

const courseController = new CourseController(
    new CourseBusiness()
)

courseRouter.get("/", courseController.getCourses)
courseRouter.post("/", courseController.createCourse)
courseRouter.put("/:id", courseController.editCourse)
courseRouter.delete("/:id", courseController.deleteCourse)
