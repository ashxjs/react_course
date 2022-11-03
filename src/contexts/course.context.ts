import { createContext } from "react";

export const CourseContext = createContext({
    course: "",
    setCourse: (arg: string): void => {}
});
