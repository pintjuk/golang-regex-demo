
# Golang Regex Demo

👉 **[Golang Regex Demo]([https://github.com/pintjuk/golang-regex-demo](https://pintjuk.github.io/golang-regex-demo/))**

This project demonstrates the usage of the `@pintjuk/golang-regex` package, which provides regex matching with full compatibility with Go's regex syntax. The demo includes a form where users can test regex patterns against input text.



## Prerequisites

Ensure you have the following installed:
- Node.js (version 14 or later)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/golang-regex-demo.git
   cd golang-regex-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

### 1. Generate CSS

The project uses **TailwindCSS** for styling. To compile the TailwindCSS styles:

```bash
npm run build:css
```

This command compiles the `src/styles.css` file into the `dist/styles.css` file.

If you want to watch for changes and rebuild automatically:

```bash
npm run build:css -- --watch
```

---

### 2. Run the Bundler

The project uses Webpack to bundle the JavaScript files. To build the JavaScript bundle:

```bash
npm run build
```

The bundled JavaScript file will be output to the `dist/` directory as `bundle.js`.

---

### 3. Start the Server

To serve the demo, you can use a lightweight static server like `http-server`. Start the server with:

```bash
npm run start
```

By default, the server will run on `http://127.0.0.1:8080`.

---

### 4. Open the Demo

Once the server is running, open your browser and navigate to:

```
http://127.0.0.1:8080
```

You should see the demo interface. Enter a regex pattern and some text to test the matching functionality.

---

## Why WebAssembly is Loaded Asynchronously

The `@pintjuk/golang-regex` package uses WebAssembly (WASM) to execute regex operations, leveraging Go's regex engine. WebAssembly modules are binary files that the browser must download and compile before they can be used. 

### Why Async Loading?

1. **Non-blocking Execution**: Downloading and compiling the WASM module can take time. Asynchronous loading prevents the page from freezing while the browser performs these operations.
2. **Streaming Compilation**: The `WebAssembly.instantiateStreaming` method allows browsers to compile the WASM module while it is still being downloaded, improving performance.
3. **Network Considerations**: Loading the WASM asynchronously ensures that the rest of the page resources can load and render without waiting for the WASM module.

---

## Configuring Webpack to Use `@pintjuk/golang-regex`

If you want to integrate the `@pintjuk/golang-regex` package into your own project, configure your Webpack bundler as follows:

### Webpack Configuration Example

```javascript
const path = require('path');

module.exports = {
  entry: './src/main.js', // Your JavaScript entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.wasm$/, // Handles `.wasm` files
        type: 'asset/resource', // Ensures WebAssembly files are handled correctly
      },
    ],
  },
  experiments: {
    asyncWebAssembly: true, // Enable asynchronous WebAssembly loading
  },
};
```

### Key Configuration Points
1. **`type: 'asset/resource'` for `.wasm` Files**:
   - This ensures that Webpack emits `.wasm` files as separate assets and includes them in the output directory.

2. **Enable `asyncWebAssembly`**:
   - This allows Webpack to handle asynchronous WebAssembly imports, ensuring the module is loaded efficiently.

---

## Project Structure

```
golang-regex-demo/
├── dist/                  # Compiled assets (CSS and JS)
│   ├── bundle.js          # Bundled JavaScript
│   └── styles.css         # Compiled TailwindCSS
├── src/                   # Source files
│   ├── styles.css         # TailwindCSS source file
│   └── main.js            # JavaScript entry point
├── public/                # Static assets
│   ├── wasm_exec.js       # WebAssembly runtime
│   └── goregex.wasm       # Compiled WebAssembly module
├── index.html             # HTML file for the demo
├── tailwind.config.js     # TailwindCSS configuration
├── webpack.config.js      # Webpack configuration
├── package.json           # Project dependencies and scripts
```

---

## Scripts Overview

| Command              | Description                                       |
|----------------------|---------------------------------------------------|
| `npm run build:css`  | Compile TailwindCSS into `dist/styles.css`.       |
| `npm run build`      | Bundle JavaScript into `dist/bundle.js`.          |
| `npm run start`      | Start the HTTP server to serve the demo locally.  |

---

## License

This project is licensed under the [MIT License](LICENSE).
