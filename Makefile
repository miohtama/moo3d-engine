
BASE=$(shell pwd)

BROWSERIFY:=$(BASE)/node_modules/browserify/bin/cmd.js

BROWSERIFY_FLAGS:=--debug

all: install-deps build

#
# Pull in dependencies
#
install-deps:
	npm install jquery-browserify
	npm install browserify

build:
	$(BROWSERIFY) $(BROWSERIFY_FLAGS) examples/demo1.js -o examples/demo1.bundle.js

