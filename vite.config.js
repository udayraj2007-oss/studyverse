import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({

  plugins: [

    react(),

    VitePWA({

      registerType: "autoUpdate",

      includeAssets: [

        "favicon.png"

      ],

      manifest: {

        name: "StudyVerse",

        short_name: "StudyVerse",

        description:
          "Free Notes, Quiz & Mock Tests for Class 7 to 12",

        theme_color: "#198754",

        background_color: "#ffffff",

        display: "standalone",

        orientation: "portrait",

        start_url: "/",

        icons: [

          {
            src: "favicon.png",
            sizes: "192x192",
            type: "image/png",
          },

          {
            src: "favicon.png",
            sizes: "512x512",
            type: "image/png",
          },

          {
            src: "favicon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },

        ],

      },

    }),

  ],

});