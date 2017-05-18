NAME=scottdover.github.io

.PHONY: jekyll install

install: deps jekyll

deps:
	bundle install

jekyll:
	bundle exec jekyll build

watch:
	bundle exec jekyll serve --port 4001 --incremental --watch
