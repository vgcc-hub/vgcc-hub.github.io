
import yaml from "js-yaml";

export default function (eleventyConfig) {
	eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));
};

