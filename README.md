# angular-phonecat Using TypeScript

This is a simple conversion of Google's angular-phonecat application to TypeScript. I (John Baur) wrote this while
learning TypeScript for our projects at Oasis Digital (http://oasisdigital.com).

The original angular-phonecat repository can be found here: https://github.com/angular/angular-phonecat.git

## Installing dependencies

The application relies upon various node.js tools, such as Bower, Karma and Protractor.  You can
install these by running:

```
npm install
```

This will also run bower and tsd. Bower will download the angular files needed for the current step of the
tutorial. Tsd will download type definitions for the angular files.

## Running the app during development

- Run `npm start`
- navigate your browser to `http://localhost:8000/app/index.html` to see the app running in your browser.

## Running unit tests

We recommend using [Jasmine][jasmine] and [Karma][karma] for your unit tests/specs, but you are free
to use whatever works for you.

- Start Karma with `npm test`
  - A browser will start and connect to the Karma server. Chrome is the default browser, others can
  be captured by loading the same url as the one in Chrome or by changing the `test/karma.conf.js`
  file.
- Karma will sit and watch your application and test JavaScript files. To run or re-run tests just
  change any of your these files.

## End to end testing

We recommend using [Jasmine][jasmine] and [Protractor][protractor] for end-to-end testing.

Requires a webserver that serves the application. See Running the app during development, above.

- Serve the application: run `npm start`.
- In a separate console run the end2end tests: `npm run protractor`. Protractor will execute the
  end2end test scripts against the web application itself.
  - The configuration is set up to run the tests on Chrome directly. If you want to run against
    other browsers then you must install the webDriver, `npm run update-webdriver`, and modify the
  configuration at `test/protractor-conf.js`.  
  
[protractor]: https://github.com/angular/protractor
[jasmine]: http://pivotal.github.com/jasmine/
[karma]: http://karma-runner.github.io
  