import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "Home" },
    { path: "/Github", component: "Github" },
  ],
  npmClient: 'pnpm',
  
});
