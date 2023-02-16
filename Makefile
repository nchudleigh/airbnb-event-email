.PHONY: dev build setup
install:
	npm i
dev:
	npx email dev
build:
	npx email export
