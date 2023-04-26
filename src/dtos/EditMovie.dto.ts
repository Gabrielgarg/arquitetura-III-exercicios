import z from "zod"

export interface EditCouseInputDTO{
    idToEdit: string,
    id: string,
    name: string,
    lessons: number
}

export interface EditCouseOutputDTO{
    message: string,
    course: {
      id: string,
      name: string,
      lessons: number,
      createdAt: string
    }
}

export const EditCourseSchema = z.object({
    idToEdit: z.string(),
    id: z.string().min(1).optional(),
    name: z.string().min(2).optional(),
    lessons: z.number().positive().gt(1).min(1).optional()
}).transform(data => data as EditCouseInputDTO)