import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      "@chakra-ui/react",
      "@chakra-ui/icons",
      "@chakra-ui/utils",
      "@chakra-ui/theme-tools",
      "hoist-non-react-statics",
      "lodash.mergewith",
      "react-fast-compare",
    ],
    exclude: ["@chakra-ui/system"],
  },
  build: {
    rollupOptions: {
      external: ["@chakra-ui/system"],
    },
  },
  server: {
    historyApiFallback: true,
  },
});
