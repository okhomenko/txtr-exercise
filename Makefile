BASEPATH='.'
PHANTOMJS='PhantomJS'
BROWSERS=$(PHANTOMJS)

.PHONY: test coverage e2e

.DEFAULT_GOAL := e2e

init:
	npm install && ./node_modules/protractor/bin/webdriver-manager update --standalone


base_test:
	node ./node_modules/karma/bin/karma start karma.conf.js --basePath $(BASEPATH) $(EXTRA_OPTS)

test:
	$(MAKE) base_test EXTRA_OPTS="--browsers $(BROWSERS) --single-run"

e2e:
	./node_modules/.bin/protractor protractor.conf.js --chromeOnly

coverage:
	rm -rf coverage;
	$(MAKE) base_test EXTRA_OPTS="--browsers $(BROWSERS) --single-run --reporters coverage --port 9888"

