const webpack = require("webpack");
const path = require("path");
const { getIfUtils, removeEmpty } = require("webpack-config-utils");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

const rootPath = path.join(__dirname, "..");

function buildConfig(mode) {
	const { ifWatch, ifDocs } = getIfUtils(mode, ["docs", "watch"]);

	const docsEntry = {
		"react-stockcharts-home": "./docs/index.js",
		"react-stockcharts-documentation": "./docs/documentation.js",
	};
	const devServer = {
        liveReload: true,
		port: 3000,
	};

	const context = rootPath;

	console.log("MODE", mode);
	return {
		context,
		entry: docsEntry,
		output: {
			path: path.join(rootPath, "build/"),
			filename: `dist/[name]${ifDocs(".[chunkhash]", "")}.js`,
			publicPath: "",
			library: "ReStock",
			libraryTarget: "umd",
			pathinfo: ifWatch(true, false), // since we have eval as devtool for watch, pathinfo gives line numbers which are close enough
		},
		devtool: ifWatch("cheap-source-map", "source-map"),
		module: {
			rules: removeEmpty([
                { test: /\.jpg$/, use: "file-loader" },
                { test: /\.(png|svg)$/, use: "url-loader?mimetype=image/png" },
                { test: /\.md$/, use: ["html-loader", "remarkable-loader"] },
                { test: /\.scss$/, use: [
                    'style-loader', {
                      loader: 'css-loader',
                      options: {
                        sourceMap: false // Disable source maps
                      }
                    },
                    {
                      loader: 'autoprefixer-loader',
                      options: {
                        sourceMap: false // Disable source maps
                      }
                    },
                    {
                      loader: 'sass-loader',
                      options: {
                        sourceMap: false // Disable source maps
                      }
                    }
                  ]
                },
                { test: /\.(ts|js|tsx|jsx)$/, use: ["babel-loader"], exclude: /node_modules/ }
			])
		},
		performance: {
			hints: false,
		},
		plugins: removeEmpty([
			new ProgressBarPlugin(),
			new webpack.NoEmitOnErrorsPlugin(),

			ifDocs(new webpack.DefinePlugin({
				"process.env": {
					// This has effect on the react lib size
					NODE_ENV: JSON.stringify("production"),
				},
			})),
			// ifProd(new webpack.optimize.DedupePlugin()),
			ifDocs(new TerserPlugin({
                terserOptions: {
				    compress: {
                        drop_console: true,
				    }
                },
			})),
			new HtmlWebpackPlugin({
				template: "./docs/pageTemplate.js",
				inject: false,
				page: "index",
				mode,
                 templateParameters: (compilation, assets, assetTags, options) => {
    const chunks = compilation.chunks.reduce((acc, chunk) => {
      acc[chunk.name] = {
        entry: assets.js.find(js => js.includes(chunk.name)),
      };
      return acc;
    }, {});

    return {
      htmlWebpackPlugin: {
        options: {
          mode: options.mode || "production",
          page: options.page || "index",
        },
        files: {
          chunks
        }
      }
    };
  },
				filename: "index.html"
			}),
			new HtmlWebpackPlugin({
				template: "./docs/pageTemplate.js",
				inject: false,
				page: "documentation",
				mode,
                 templateParameters: (compilation, assets, assetTags, options) => {
    const chunks = compilation.chunks.reduce((acc, chunk) => {
      acc[chunk.name] = {
        entry: assets.js.find(js => js.includes(chunk.name)),
      };
      return acc;
    }, {});

    return {
      htmlWebpackPlugin: {
        options: {
          mode: options.mode || "production",
          page: options.page || "index",
        },
        files: {
          chunks
        }
      }
    };
  },
				filename: "documentation.html"
			}),
			new webpack.LoaderOptionsPlugin({
				options: { remarkable: getRemarkable(), context }
			}),
		]),
		devServer,
		externals: {
			"react": "React",
			"react-dom": "ReactDOM",
		},
		resolve: {
			extensions: [".ts", ".tsx", ".js", ".scss", ".md"],
			alias: {
				"react-stockcharts": path.join(rootPath, "src"),
			},
			modules: ["docs", "node_modules"]
		}
	};
}

function getRemarkable() {

	const Prism = require("prismjs");

	require("prismjs/components/prism-jsx");
	require("prismjs/plugins/line-numbers/prism-line-numbers");

	return {
		preset: "full",
		html: true,
		linkify: true,
		typographer: true,
		highlight: function(str, lang) {
			const grammer = lang === undefined || Prism.languages[lang] === undefined ? Prism.languages.markup : Prism.languages[lang];
			return Prism.highlight(str, grammer, lang);
		}
	};
}

module.exports = buildConfig;

