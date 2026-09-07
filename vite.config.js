import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // تنظیمات برای جدا کردن فایل‌ها
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith(".css")) {
            return "css/[name]-[hash][extname]"; // CSS در پوشه css
          } else if (
            assetInfo.name.endsWith(".woff") ||
            assetInfo.name.endsWith(".woff2") ||
            assetInfo.name.endsWith(".ttf") ||
            assetInfo.name.endsWith(".eot")
          ) {
            return "fonts/[name]-[hash][extname]"; // فونت‌ها در پوشه fonts
          }
          return "assets/[name]-[hash][extname]"; // JS در پوشه js
        },
        entryFileNames: "js/[name]-[hash].js", // JS در پوشه js
      },
    },
  },

  plugins: [vue()],
});
