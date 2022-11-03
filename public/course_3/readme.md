# 3. Create our First Component

## Summary

[Instroduction](#introduction) <br>
[Adding Props](#adding-props) <br>
[Particular props](#particular-props) <br>

## Introduction
Now that you understand few concept as `Props` and using `React.createElement`.
But as `React` says it not safe to use this in production.

We are going to learn how can we create React Component.
I am not going to introduce the `Class` way to create component because i think that using `FunctionComponent` is the fastest and the clearest way.

Component is just a javascript function that returns `JSX` elements.
The code below is a function `MyComponent` that returns a `div` element.

<SyntaxHighlighter language="jsx" style="oneDark">
    const MyComponent = () => {
        return(
            &lt;div>My Text&lt;/div>
        );
    };
</SyntaxHighlighter>

## Adding props

`Props` are same as function parameter, in the code bellow we are giving to `MyComponent` a simple Text props.
If you are not yet familiar with the `destructuring notation` you can check [MDN Destructuring assignment documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
Be sure to understand the concept because you will see a lot of destructuring in this project.

<SyntaxHighlighter language="jsx" style="oneDark">
    const MyComponent = (props) => {
        return(
            &lt;div>{ props.text }/div>
        );
    };

    const MyComponentDestructuring = ({ text }) => {
        return(
            &lt;div>{ text }/div>
        );
    };

    &lt;MyComponent text={"some text"}>
</SyntaxHighlighter>

## Particular `Props`
### Children
The `Children` props permit to pass jsx or html tags to our component.
Guess that you whant to render anything in your component as the code Below. 

<SyntaxHighlighter language="jsx" style="oneDark">
    const FlexColumnContainer = ({ children }) => {
        return (
            &lt;div className="flex column">
            {children}
            &lt;/div>
        );
    };
</SyntaxHighlighter>