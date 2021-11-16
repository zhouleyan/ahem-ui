.PHONY: build

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(PATH)

build:
	parcel build packages/components/* --no-optimize

#build:
#	parcel build button --no-optimize
