import {coursesArray} from "../../data/data.ts";
import CourseComponent from "../course-component/CourseComponent.tsx";
import "./CoursesStyle.css"

export const CoursesComponents = () => {
  return (

      <div className="cards">
      {
        coursesArray.map((value, index) => <CourseComponent item={value} key={index}/>)

      }
      </div>

  )
}