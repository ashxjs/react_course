import { useState } from "react";
import { CourseContext } from "../../contexts/course.context";
import { CourseMenu } from "./components/CourseMenu/CourseMenu";
import { ExerciceRenderer } from "./components/ExerciceRenderer/ExerciceRenderer";
import { MarkdownRenderer } from "./components/MarkdownRenderer/MarkdownRenderer";
import { SplitView } from "@ashxjs/split-view";
import "./style.css";

const courses = [
  {
      id: 1,
      name: "Hello World",
      path: "course_1"
  },
  {
      id: 2,
      name: "Use State",
      path: "course_2"
  },
  {
      id: 3,
      name: "First Component",
      path: "course_3"
  }
];

export const Viewer = () => {
  const DEFAULT_LEFT_PANEL_WIDTH = window.screen.width / 3;
  const DEFAULT_COURSE = localStorage.getItem("current_course") ?? courses[0].path;
  const [course, setCourse] = useState(DEFAULT_COURSE);

  return (
    <CourseContext.Provider value={{course, setCourse}}>
      <div className="viewer-container">
        <CourseMenu
          courses={courses}/>
        <SplitView
          defaultLeftPanelWidth={DEFAULT_LEFT_PANEL_WIDTH}
          left={<MarkdownRenderer defaultFile={"readme.md"}/>}
          right={<ExerciceRenderer />} />
      </div>
    </CourseContext.Provider>
  );
};

Viewer.displayName = "Viewer";
