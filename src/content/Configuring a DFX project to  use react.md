---
title: Configuring a DFX project to use React
author: Dare O.
date: 2022-05-26
tag: Lessons
---

<h2 style="color:#92BA92; padding-bottom:1rem">Introduction</h2>

IC (Internet computer) is a blockchain that enables developers, organizations and entrepreneurs to build and deploy secure autonomous canisters otherwise known as smart contracts. To a dapp developer, IC provides the features such as:

- Globally accessible, public blockchain to help run smart contracts at web speed and very interactive web content to users.

- Secure cryptographic protocols that guarantees secure executions of smart contracts.

- A network of blockchains connected using chain key cryptography with great scalability.

To develop and deploy dapp projects to the internet computer, you would need to install the difinity canister SDK also known as DFX. Below are the steps to help successfully configure your development environment as well as configurations to use React on an ubuntu machine.

<h2 style="color:#92BA92; padding-top:2rem; padding-bottom:1rem">Step 1: Installing SDK </h2>

To install the difinty canister SDK, also known as "dfx" copy-paste the command below into your terminal and hit enter.

<div className="code-highlight">
<pre className=code-text>
DFX_VERSION=0.9.3 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
</pre>
</div>

Depending on the version of dfx you are using, you can change the version number. To confirm the installation was successful, the output of the command below should be a version number of dfx installed.

<div className="code-highlight">
<pre className=code-text>
dfx --version
</pre>
</div>

<h2 style="color:#92BA92;padding-top:2rem; padding-bottom:1rem">Installing code editor</h2>

To design and develop dfx project you would need a source code editor. A famous and user-friendly source code editor is a visual studio code. Depending on your distribution, you can find the right command to install VScode on your machine <a className="post-links" target="_blank" href="https://code.visualstudio.com/docs/setup/linux"> *here*.</a>

<h2 style="color:#92BA92; padding-bottom:1rem">Installing Node</h2>

DFX requires node version 16 or higher so the application works properly. To install node on your machine, please see the installation process <a className="post-links" target="_blank" href="https://nodejs.org/en/download/"> *here*.</a> Once the installation is complete, you can confirm the installation is successful, the output of the command below should be the node version you have installed.

<div className="code-highlight">
<pre className=code-text>
node --version
</pre>
</div>

<h2 style="color:#92BA92; padding-top:2rem; padding-bottom:1rem">Step 2: Create dfx project</h2>

To create a default/template dfx project run the command below. Where "project-name" is the name of your project.

<div className="code-highlight">
<pre className=code-text>
dfx new {project name}
</pre>
</div>

Open a new VSCode window and open the newly created project to edit the project settings.

<h4 style="color:#92BA92; padding-top:2rem; padding-bottom:1rem">Rename index.js</h4>

Expand the dir {"project name"_assets} and rename the index.js file to "index.jsx". Depending on your file structure, you can create your components and frontend dir in the src dir.

<h4 style="color:#92BA92; padding-top:2rem; padding-bottom:1rem">Edit webpack.config</h4>

In the web-pack config file, find the "module.exports" block, in the "entry" object change the .js option to ".jsx". Example below

<div className="code-highlight">
<pre className=code-text>
 entry: {
      // The frontend.entrypoint points to the HTML file for this build, so we need
      // to replace the extension to `.js`.
      index: path.join(__dirname, asset_entry).replace(/\.html$/, ".jsx"),
   },
</pre>
</div>

Scroll down to the file and uncomment the module loaders block. Example below.

<div className="code-highlight">
<pre className=code-text>
   // Depending in the language or framework you are using for
   // front-end development, add module loaders to the default
   // webpack configuration. For example, if you are using React
   // modules and CSS as described in the "Adding a stylesheet"
   // tutorial, uncomment the following lines:
   module: {
      rules: [
         { test: /\.(ts|tsx|jsx)$/, loader: "ts-loader" },
         { test: /\.css$/, use: ["style-loader", "css-loader"] },
      ],
   },
</pre>
</div>

<h4 style="color:#92BA92; padding-top:2rem; padding-bottom:1rem">Create tsconfig.json file</h4>

On the root level of your project dir, create a file named "tsconfig.json" and enter the code below in the file.

<div className="code-highlight">
<pre className=code-text>
   {
  "compilerOptions": {
    "target": "es2018",        /*Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'.*/
    "lib": ["ES2018", "DOM"],  /*Specify library files to be included in the compilation.*/
    "allowJs": true,           /*Allow javascript files to be compiled.*/
    "jsx": "react",            /*Specify JSX code generation: 'preserve', 'react-native', or 'react'.*/
  },
  "include": ["src/**/*"],
}
</pre>
</div>

<h2 style="color:#92BA92; padding-top:2rem; padding-bottom:1rem">Step 3: Starting dfx project</h2>

Once the configuration is done, the next step is to start the project so you can interact with your application.

<h4 style="color:#92BA92; padding-top:2rem; padding-bottom:1rem">Start canister</h4>

<div className="code-highlight">
<pre className=code-text>
dfx start --emulator
</pre>
</div>

<h4 style="color:#92BA92; padding-top:2rem; padding-bottom:1rem">Expose your actor</h4>

To expose your actor(s) to your app.jsx or index.jsx file, run the command below. Where "canister name" is your project name.

<div className="code-highlight">
<pre className=code-text>
dfx generate {Canister Name}
</pre>
</div>

<h4 style="color:#92BA92; padding-top:2rem; padding-bottom:1rem">Install npm packages</h4>

<div className="code-highlight">
<pre className=code-text>
npm install
</pre>
</div>

<h4 style="color:#92BA92; padding-top:2rem; padding-bottom:1rem">Deploy canister</h4>

<div className="code-highlight">
<pre className=code-text>
dfx deploy
</pre>
</div>

<h4 style="color:#92BA92; padding-top:2rem; padding-bottom:1rem">Start frontend</h4>

To start your react app, run the command below

<div className="code-highlight">
<pre className=code-text>
npm start
</pre>
</div>

Once the application starts, you can view it on your local browser via URL: *<http://localhost:8080/>*
