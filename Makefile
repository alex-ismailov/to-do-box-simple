dev:
	npx webpack-dev-server --open --config ./build/webpack.dev.conf.js

publish:
	npx webpack --config ./build/webpack.build.conf.js

lint:
	npx eslint --ext .jsx ./src/

log:
	git log --oneline --decorate --graph --all
