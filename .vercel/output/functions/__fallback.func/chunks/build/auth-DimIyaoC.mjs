import { q as defineNuxtRouteMiddleware, m as useUserStore, n as navigateTo } from './server.mjs';
import 'vue';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import '@iconify/utils';
import 'node:module';
import 'axios';
import 'vue/server-renderer';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const auth = defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();
  userStore.init();
  if (!userStore.isAuthenticated) {
    return navigateTo("/join-free/LoginPage");
  }
});

export { auth as default };
//# sourceMappingURL=auth-DimIyaoC.mjs.map
