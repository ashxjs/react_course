# 2. Playing with `props`

## 1. What is a "props" ?
Props permit to pass parameter to your own component. It works like function parameters
`React` as default props
<SyntaxHighlighter language="jsx" style="oneDark">
    React.createElement(
        type, // HTML Tag
        [props], // Component props
        [...children] // Component Children elements
    );
</SyntaxHighlighter>
As you can see on the above example, we can pass to the second argument the props object.

## 2. Let's try it !
We can try to edit our `Hello World` app to pass the text as `props`.
<SyntaxHighlighter language="jsx" style="oneDark">
    React.createElement(
        "div", { id: "my-div" }, [
            React.createElement("span", null, "Some text")
        ]
    );
</SyntaxHighlighter>
Here we have passe the id in as `props`
<SyntaxHighlighter language="html" style="oneDark">
    &lt;div id="my-div">
        &lt;span>Some text</h1>
    &lt;/div>
</SyntaxHighlighter>

## 3. Now try to reproduce the code below:
<SyntaxHighlighter language="html" style="oneDark">
    &lt;div class="div-class">
        &lt;h1 id="hello">Hello</h1>
        &lt;h1 id="world">World</h1>
    &lt;/div>
</SyntaxHighlighter>
