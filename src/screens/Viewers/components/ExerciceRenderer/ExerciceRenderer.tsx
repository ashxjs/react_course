import { useContext } from "react";
import { CourseContext } from "../../../../contexts/course.context";
import "./styles.css";

export const ExerciceRenderer = () => {
    const { course: currentCoursePath } = useContext(CourseContext);

    return (
            <iframe
                title="exercice-renderer"
                className="exercice-renderer"
                src={`${currentCoursePath}/index.html`}>
            </iframe>
    );
};

ExerciceRenderer.displayName = "ExerciceRenderer";