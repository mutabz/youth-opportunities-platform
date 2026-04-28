function getInitials(fullName) {
  if (!fullName) return "";
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0][0].toUpperCase();
  }
  return parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
}
const formatDate = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString();
};
const truncate = (text, len) => {
  if (!text) return "";
  return text.length > len ? text.slice(0, len) + "..." : text;
};
function generateMetaTitle(opportunity) {
  var _a, _b, _c;
  const type = opportunity.opportunity_type;
  const title = opportunity.title;
  const city = ((_a = opportunity.details.job_location) == null ? void 0 : _a.city) || ((_b = opportunity.details.training_location) == null ? void 0 : _b.city) || ((_c = opportunity.details.study_destination) == null ? void 0 : _c[0]) || "";
  const country = opportunity.host_country || "";
  return `${title} - ${type.charAt(0).toUpperCase() + type.slice(1)} in ${city} ${country}`.trim();
}
function generateMetaDescription(opportunity) {
  var _a, _b, _c;
  let desc = ((_a = opportunity.details.benefits) == null ? void 0 : _a.join(", ")) || "";
  const reqs = (_b = opportunity.details.requirements) == null ? void 0 : _b.join(", ");
  if (reqs) desc += ". Requirements: " + reqs;
  const deadline = (_c = opportunity.details.application) == null ? void 0 : _c.deadline;
  if (deadline) desc += `. Apply before ${deadline}`;
  return desc;
}
function generateStructuredData(opportunity) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
  const type = opportunity.opportunity_type;
  const details = opportunity.details || {};
  const provider = opportunity.provider || {};
  const location = details.job_location || details.training_location || {};
  switch (type) {
    case "job":
    case "internship":
      return {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: opportunity.title,
        description: (opportunity.description || []).join(" ") || ((_a = details.benefits) == null ? void 0 : _a.join(", ")),
        datePosted: opportunity.created_at,
        validThrough: (_b = details.application) == null ? void 0 : _b.deadline,
        employmentType: type.charAt(0).toUpperCase() + type.slice(1),
        hiringOrganization: {
          "@type": "Organization",
          name: provider.organization_name,
          sameAs: "https://yoursite.com",
          logo: provider.organization_logo || ""
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: location.city || "",
            addressCountry: opportunity.host_country || ""
          }
        },
        applicantLocationRequirements: {
          "@type": "Country",
          name: ((_c = details.eligibility) == null ? void 0 : _c.eligible_nationalities) || ""
        },
        baseSalary: {
          "@type": "MonetaryAmount",
          currency: "USD",
          value: {
            "@type": "QuantitativeValue",
            value: 0,
            unitText: "MONTH"
          }
        }
      };
    case "scholarship":
      return {
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalProgram",
        name: opportunity.title,
        description: (opportunity.description || []).join(" ") || ((_d = details.benefits) == null ? void 0 : _d.join(", ")),
        provider: {
          "@type": "Organization",
          name: provider.organization_name || ""
        },
        educationalProgramMode: ((_e = details.study_levels) == null ? void 0 : _e.join(", ")) || "Full-time",
        programPrerequisites: ((_f = details.requirements) == null ? void 0 : _f.join(", ")) || "",
        url: ((_g = details.application) == null ? void 0 : _g.application_link) || "",
        startDate: ((_h = details.application) == null ? void 0 : _h.start_date) || "",
        endDate: ((_i = details.application) == null ? void 0 : _i.deadline) || ""
      };
    case "training":
      return {
        "@context": "https://schema.org",
        "@type": "Course",
        name: opportunity.title,
        description: (opportunity.description || []).join(" ") || ((_j = details.topics_covered) == null ? void 0 : _j.join(", ")),
        provider: {
          "@type": "Organization",
          name: provider.organization_name || ""
        },
        courseMode: ((_k = details.training_location) == null ? void 0 : _k.mode) || "Online",
        startDate: ((_l = details.training_details) == null ? void 0 : _l.start_date) || "",
        endDate: ((_m = details.training_details) == null ? void 0 : _m.deadline) || "",
        offers: {
          "@type": "Offer",
          price: 0,
          priceCurrency: "USD"
        }
      };
    case "competition":
      return {
        "@context": "https://schema.org",
        "@type": "Event",
        name: opportunity.title,
        description: (opportunity.description || []).join(" ") || ((_n = details.prizes) == null ? void 0 : _n.join(", ")),
        startDate: ((_o = details.application) == null ? void 0 : _o.start_date) || "",
        endDate: ((_p = details.application) == null ? void 0 : _p.deadline) || "",
        location: {
          "@type": "Place",
          name: location.city || "",
          address: {
            "@type": "PostalAddress",
            addressLocality: location.city || "",
            addressCountry: opportunity.host_country || ""
          }
        },
        eventStatus: "https://schema.org/EventScheduled",
        organizer: {
          "@type": "Organization",
          name: provider.organization_name || ""
        }
      };
    case "funding":
      return {
        "@context": "https://schema.org",
        "@type": "FinancialProduct",
        name: opportunity.title,
        description: (opportunity.description || []).join(" ") || ((_q = details.benefits) == null ? void 0 : _q.join(", ")),
        provider: {
          "@type": "Organization",
          name: provider.organization_name || ""
        },
        amount: ((_r = details.funding_details) == null ? void 0 : _r.amount) || "",
        fundingType: ((_s = details.funding_details) == null ? void 0 : _s.funding_type) || ""
      };
    default:
      return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: opportunity.title,
        description: (opportunity.description || []).join(" ")
      };
  }
}

export { generateMetaTitle as a, generateMetaDescription as b, generateStructuredData as c, formatDate as f, getInitials as g, truncate as t };
//# sourceMappingURL=utils-C8zi-Gnd.mjs.map
