.PHONY: build

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(PATH)

build:
	parcel build packages/@ahem-components/*/ --no-optimize
