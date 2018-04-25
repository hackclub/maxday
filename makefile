build:
	yarn
	git submodule init && git submodule update
	gatsby build
