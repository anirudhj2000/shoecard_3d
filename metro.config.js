const { getDefaultConfig } = require("expo/metro-config");
module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      assetExts: [
        ...assetExts,
        "png",
        "jpg",
        "jpeg",
        "gif",
        "svg",
        "ttf",
        "otf",
        "woff",
        "woff2",
        "obj",
        "mtl",
        "glb",
      ],
      sourceExts: [
        ...sourceExts,
        "cjs",
        "jsx",
        "ts",
        "tsx",
        "mjs",
        "md",
        "mdx",
      ],
    },
  };
})();
