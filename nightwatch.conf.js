module.exports = {
    src_folders: ['/Users/shashankkumar/Desktop/pro2/step_definitions/searchProductSteps.js', '/Users/shashankkumar/Desktop/pro2/step_definitions/hooks.js'],
    page_objects_path: '',
    custom_commands_path: '',
    custom_assertions_path: '',
    plugins: [],
    test_settings: {
      default: {
        selenium: {
          start_process: false,
          // server_path: require('geckodriver').path, // Uncomment if you are using Geckodriver
          host: 'hub-cloud.browserstack.com',
          port: 80
        },
        desiredCapabilities: {
          'browserstack.user': process.env.BROWSERSTACK_USER,
          'browserstack.key': process.env.BROWSERSTACK_KEY,
          'browserstack.local': false,
          'browser': 'chrome',
          'browser_version': 'latest',
          'os': 'Windows',
          'os_version': '10',
          'resolution': '1920x1080',
          'build': 'Cucumber Nightwatch Test',
          'name': 'Flipkart Product Search Test',
        },
        skip_testcases_on_fail: false
      }
    }
  };