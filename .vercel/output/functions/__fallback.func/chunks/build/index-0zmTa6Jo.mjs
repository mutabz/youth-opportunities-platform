import { _ as __nuxt_component_1 } from './index-CCCQ-6a_.mjs';
import { ref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import './server.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'perfect-debounce';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref([
      {
        id: 1,
        title: "Youth Leadership Program",
        description: "A 6-month leadership training for youth aged 18-25.",
        type: "Training",
        location: "Kigali, Rwanda"
      },
      {
        id: 2,
        title: "Startup Internship",
        description: "Internship at a tech startup in Kigali.",
        type: "Internship",
        location: "Kigali, Rwanda"
      },
      {
        id: 3,
        title: "Volunteer Opportunity",
        description: "Community volunteer work in education.",
        type: "Volunteer",
        location: "Ruhango, Rwanda"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<!--[--><section class="gen-hero"><h1>Learn From World-Class Mentors</h1><p>Connect with experienced professionals to guide your career and academic journey.</p><div class="card shadow-sm mb-4"><div class="card-body d-flex align-items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fa6-solid:magnifying-glass",
        class: "text-muted"
      }, null, _parent));
      _push(`<input type="text" class="form-control" placeholder="Search mentors by skill, company, or name..."${ssrRenderAttr("value", _ctx.searchQuery)}></div><div class="card-footer"> fdg </div></div></section><section class="filter-bar"><div><strong>Filter by Expertise:</strong></div><select><option>All Fields</option><option>Software Engineering</option><option>Business &amp; Startups</option><option>Scholarship Applications</option><option>Public Speaking</option></select><select><option>Sort by Rating</option><option>Most Experienced</option><option>Recently Joined</option></select></section><section class="grid-2 mx-4 my-2 mb-5"><div class="mentor-card"><div class="mentor-img"></div><h3>Sarah Johnson</h3><div class="role">Software Engineer @ Google</div><div class="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i> (4.8) </div><p class="bio"> Helping students break into Big Tech through mentorship and interview preparation. </p><div class="skills"><span class="skill">Data Structures</span><span class="skill">System Design</span><span class="skill">Interview Prep</span></div><a href="#" class="btn btn-outline-primary rounded-5 mx-5">Book Session</a></div><div class="mentor-card"><div class="mentor-img"></div><h3>David Kim</h3><div class="role">Scholarship Advisor</div><div class="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> (5.0) </div><p class="bio"> Guided 200+ students to win fully-funded scholarships worldwide. </p><div class="skills"><span class="skill">Essay Review</span><span class="skill">CV Optimization</span><span class="skill">Application Strategy</span></div><a href="#" class="btn btn-outline-primary rounded-5 mx-5">Book Session</a></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mentors/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-0zmTa6Jo.mjs.map
