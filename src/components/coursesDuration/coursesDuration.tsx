import type {ICourseModel} from "../../models/course.model.ts";
import {CourseComponent} from "../courseDuration/courseComponent.tsx";
import "./coursesStyle.css"

const coursesAndDurationArray:ICourseModel[] = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];

export const CoursesComponetns = () => {
  return (
    <ul>
      {
        coursesAndDurationArray.map((course:ICourseModel, index:number) => {
          return <CourseComponent course={course} key={index} />
        })
      }
    </ul>
  )
}