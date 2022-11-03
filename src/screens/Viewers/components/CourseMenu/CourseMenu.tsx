import { FunctionComponent, MouseEvent, useContext, useState } from "react";
import { CourseContext } from "../../../../contexts/course.context";
import { Course } from "../../../../types/Course.type";
import { MenuButton } from "./MenuButton/MenuButton";
import "./styles.css";

export type CourseMenuProps = {
    courses: Course[];
};

export const CourseMenu: FunctionComponent<CourseMenuProps> = ({ courses }) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const { setCourse } = useContext(CourseContext);

    const handleOpenClick = () => setIsOpen(!isOpen);
    const handleLoadContent = (event: MouseEvent<HTMLSpanElement>): void => {
        const courseId = (event.target as HTMLSpanElement).id;
        localStorage.setItem("current_course", courseId);
        setCourse(courseId);
    };

    return (
        <div
            className="course-menu">
            <MenuButton
                handleOpenClick={handleOpenClick}
                isOpen={isOpen} />
            <div
                className="course-menu-content">
                {
                    isOpen && courses.map(({ name, id }) => (
                        <span
                            id={`course_${id}`}
                            key={`course_${id}`}
                            onClick={handleLoadContent}>{name}
                        </span>
                    ))
                }
            </div>
        </div>
    );
};
