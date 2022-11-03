import { useEffect, useState } from "react";

export type UseFetchCourseReturType = {
    course: string;
};

export type UseFetchCourseProps = {
    coursePath: string;
};

export const useFetchCourse = ({ coursePath }: UseFetchCourseProps) => {
    const [course, setCourse] = useState<string>("");

    useEffect(() => {
        fetch(coursePath)
            .then(async(file) => {
                const text = await file.text();
                setCourse(text);
            });
    },[coursePath]);

    return {
        course
    };
};