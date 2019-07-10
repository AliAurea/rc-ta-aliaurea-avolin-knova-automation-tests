const defaultConfigSetup = require('./core/config-setup/default-config-setup');
const reportersSetup = require('./core/config-setup/reporters-setup');
const { chrome } = defaultConfigSetup.keywords;
exports.config = {
    restartBrowserBetweenTests: defaultConfigSetup.restartBrowserBetweenTests,
    SELENIUM_PROMISE_MANAGER: defaultConfigSetup.SELENIUM_PROMISE_MANAGER,
    allScriptsTimeout: defaultConfigSetup.allScriptsTimeout,
    suites: defaultConfigSetup.suites,
    autoStartStopServer: defaultConfigSetup.autoStartStopServer,
    localSeleniumStandaloneOpts: defaultConfigSetup.localSeleniumStandaloneOpts,
    multiCapabilities: defaultConfigSetup.multiCapabilities(chrome),
    params: defaultConfigSetup.params,
    baseUrl: defaultConfigSetup.baseUrl,
    framework: defaultConfigSetup.framework,
    jasmineNodeOpts: defaultConfigSetup.jasmineNodeOpts,
    onPrepare() {
        reportersSetup.configureAllReporters();
    }
};
