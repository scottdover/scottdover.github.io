NAME=scottdover.github.io

BIN := node_modules/.bin
CONCURRENTLY := $(BIN)/concurrently
ENVIRONMENT := development

.PHONY: jekyll webpack watch install

install: deps webpack jekyll

deps:
	bundle install

webpack:
	yarn install && \
	yarn build

jekyll:
	gem install bundler && \
	bundle exec jekyll build

watch:
	$(CONCURRENTLY) 'yarn watch' 'bundle exec jekyll serve --port 4001 --incremental --watch'
