import type {FC} from "react";
import type {ICourseModel} from "../../models/course.model.ts";
import "./courseStyle.css"

type PropsType = {
  course: ICourseModel
}

export const CourseComponent:FC<PropsType> = ({course}) => {
  return (
    <li>
      {course.title} {course.monthDuration}
    </li>
  )
}