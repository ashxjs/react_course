# 1. Hello World

The main goal of this exercice is to create a `Hello World` application.
We are going to use React without `Babel`. <br>
`Babel` goal is to translate `JSX` to a vanilla javacript code.
you can try it on [babel compilator](https://babeljs.io/repl)

**Let's start our first course !** <br>
You will need to add the `React` and `ReactDOM` `CDN` to your `header`.

## React and React-Dom libraries

<SyntaxHighlighter language="jsx" style="oneDark">
    &lt;script crossorigin src="&https;://unpkg.com/react@18/umd/react.development.js"></script>
    &lt;script crossorigin src="&https;://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
</SyntaxHighlighter>

## 2. Insert the root tag
To render your application you will need to add in you application `<body>`, an element which will permit to `React` to render in.

<SyntaxHighlighter language="html" style="oneDark">
&lt;div id="root"></div>
</SyntaxHighlighter>

## 3. Render your React Application
Then we will need to get this element to render inside of it.
<SyntaxHighlighter language="javascript" style="oneDark">
    const myRootElement = document.getElementById('root');
    const renderRoot = ReactDOM.createRoot(myRootElement);
    renderRoot.render(
        React.createElement("h1", null, "Hello World")
    );
</SyntaxHighlighter>
