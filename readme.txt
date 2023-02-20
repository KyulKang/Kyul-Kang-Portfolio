npm init
git init

Install express (if using DB)

npm install --save-dev webpack webpack-cli @babel/core babel-loader @babel/preset-react @babel/preset-env nodemon
npm install --save react react-dom react-router-dom express path

-----------------------------------------------

How this works:

1. Webpack compiles the project and builds bundle.js which opens
the entry file defined in webpack.config.js.

2. Node(mon) starts the server by listening for port specified in
./server/index.js through app.listen(PORT, callbackFn).

3. The router uses the middleware (app.get(express.static(...))), which
makes all files in ./public, including, bundle.js, accessible through
e.g. localhost:PORT/bundle.js.

4. index.html calls up the localhost:PORT/bundle.js, whose entry file is
./client/index.js, containing the ReactDOM call.

Chronological steps:

1. Install all dev/app dependencies.
2. Create client/index.js (ReactDOM) and server/index.js (express router).
3. Use middleware on express router to allow it access to ALL assets in
    public, including bundle.js and style.css.
4. Build with webpack and node(mon) server(/index.js).
5. ???
6. PROFIT!

Alternative to express:

In webpack.config.js, add:

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },

and npm run webpack-dev-server

--------------------------------------------

Adding Tailwind with React and Webpack

npm install tailwindcss autoprefixer postcss --save-dev
npm install style-loader css-loader postcss-loader

Create tailwind.config.js in root and put in:

module.exports = {
    content: ['./src/**/*.{js,jsx}', './public/index.html'],
    ...
};

In your main css file (can be named anything and placed in any folder),

@tailwind base;
@tailwind components;
@tailwind utilities;

and import this .css file in the .js with RenderDOM.

webpack.config.js can have more than one rule. Put in:

{
  test: /\.css$/i,
  use: ['style-loader', 'css-loader', 'postcss-loader'],
},