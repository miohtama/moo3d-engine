
BASE=$(shell pwd)

BROWSERIFY:=$(BASE)/node_modules/browserify/bin/cmd.js

all: install-deps build

#
# Pull in dependencies
#
install-deps:
	npm install jquery-browserify
	npm install browserify

build:
	$(BROWSERIFY) examples/demo1.js -o examples/demo1.bundle.js

