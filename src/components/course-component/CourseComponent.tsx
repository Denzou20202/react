import type {CourseType} from "../../model/CoursesType.ts";
import type {FC} from "react";
import "./CourseStyle.css"

type CoursesTypeProps ={
  item: CourseType
}

const CourseComponent:FC<CoursesTypeProps> = ({item}) => {
  return (
    <div className= "courseCard">
      <h2> {item.title} </h2>
      <p>monthDuration - {item.monthDuration} hourDuration - {item.hourDuration}</p>
      <h3>Modules</h3>
      <ul>{item.modules.map((module, i) =>(
        <li key={i}>{module}</li>
        ))}
      </ul>
    </div>
  )
}

export default CourseComponent