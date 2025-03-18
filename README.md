# Word Counter Playwright Test Suite

This project contains a Playwright-based test suite to validate the functionalities of the [WordCounter](https://wordcounter.net) website, including:
- The correct display of the **number of words**.
- The correct display of the **number of characters**.
- The correct display of the **top 3 most repeated words** and their frequency in the **Keyword Density** section.

## Prerequisites

Before running the project, ensure that the following tools are installed on your system:

1. **Node.js**: Install the latest version of Node.js from [nodejs.org](https://nodejs.org).
2. **Playwright**: Playwright can be installed via npm (Node Package Manager).
3. **Allure CLI**: Allure is used to generate and display the test reports.

### Installing Allure CLI
You can install Allure Commandline via npm:

```bash
npm install -g allure-commandline --save-dev
```
Alternatively, download Allure from [Allure Framework](https://docs.qameta.io/allure/#_installing_a_commandline).

## Project Setup
To set up the project and install the necessary dependencies, follow these steps:

1. Clone or download this repository.
2. Install the dependencies by running:

    ```bash
    npm install
    ```

    This will install Playwright, Allure, and other required dependencies.

## Running the Tests
There are several scripts available to run the tests and generate reports:

### Running Tests and Generating Allure Reports
1. Run the tests with Allure reporting enabled:

    ```bash
    npm run test:allure
    ```

    This will:

    * Clean any previous results and reports (allure-results, allure-report).
    * Run the test suite.
    * Generate the Allure report and open it in your browser.

2. Manual Test Execution: You can also manually run the Playwright tests and generate the Allure reports step-by-step:
    
    ```bash
    npx playwright test wordcounter --reporter=allure-playwright
    ```

    After the test execution, generate the Allure report with:

    ```bash
    allure generate allure-results --clean
    ```

    Finally, serve the report:

    ```bash
    allure open allure-report
    ```

### Running Individual Tests
To run specific tests, you can use the following command, modifying the test file or path accordingly:

```bash
npx playwright test tests/wordcounter.spec.ts --reporter=allure-playwright
```

### Generating Allure Reports

If you want to generate a report after running the tests, use:

```bash
allure generate allure-results --clean
```

To open the generated Allure report in a browser, run:

```bash
allure open allure-report
```



