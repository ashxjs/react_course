import Markdown from "markdown-to-jsx";
import { useFetchCourse } from "../../../../hooks/useFetchCourse.hook";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import "./styles.css";
import { FunctionComponent, useContext } from "react";
import { CourseContext } from "../../../../contexts/course.context";

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('jsx', jsx);

export type MarkdownRendererProps = {
    defaultFile: string;
};

export const MarkdownRenderer: FunctionComponent<MarkdownRendererProps> = ({ defaultFile }) => {
    const { course: courseContextValue } = useContext(CourseContext);
    const { course } = useFetchCourse({
        coursePath: `${courseContextValue}/${defaultFile}`
    });

    return (
        <>
            <Markdown
                id="markdown-renderer-container"
                children={course}
                options={{
                    namedCodesToUnicode:{
                        https: "https"
                    },
                    overrides: {
                        SyntaxHighlighter: {
                            component: SyntaxHighlighter,
                            props: {
                                style: dracula
                            }
                        }
                    }
                }} />
        </>
    );
};

MarkdownRenderer.displayName = "MarkdownRenderer";
