
export function getInitials(fullName) {
  if (!fullName) return ''

  // Split by spaces and remove empty values
  const parts = fullName.trim().split(/\s+/)

  if (parts.length === 1) {
    return parts[0][0].toUpperCase()
  }

  // Take first letter of first two names
  return (
    parts[0][0].toUpperCase() +
    parts[1][0].toUpperCase()
  )
}

export const formatDate = (date)=>{
  if(!date) return ""
  return new Date(date).toLocaleDateString()
}

export const truncate = (text, len) => {
  if (!text) return ''
  return text.length > len ? text.slice(0, len) + '...' : text
}

export const length = (data) => {
  return data.length
}


export function generateMetaTitle(opportunity) {
  const type = opportunity.opportunity_type
  const title = opportunity.title
  const city = opportunity.details.job_location?.city || opportunity.details.training_location?.city || opportunity.details.study_destination?.[0] || ''
  const country = opportunity.host_country || ''
  return `${title} - ${type.charAt(0).toUpperCase()+type.slice(1)} in ${city} ${country}`.trim()
}

export function generateMetaDescription(opportunity) {
  let desc = opportunity.details.benefits?.join(', ') || ''
  const reqs = opportunity.details.requirements?.join(', ')
  if(reqs) desc += '. Requirements: ' + reqs
  const deadline = opportunity.details.application?.deadline
  if(deadline) desc += `. Apply before ${deadline}`
  return desc
}

// ~/composables/utils.js

export function generateStructuredData(opportunity) {
  const type = opportunity.opportunity_type
  const details = opportunity.details || {}
  const provider = opportunity.provider || {}
  const location = details.job_location || details.training_location || {}

  switch(type) {

    case 'job':
    case 'internship':
      return {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: opportunity.title,
        description: (opportunity.description || []).join(" ") || details.benefits?.join(", "),
        datePosted: opportunity.created_at,
        validThrough: details.application?.deadline,
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
          name: details.eligibility?.eligible_nationalities || ""
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
      }

    case 'scholarship':
      return {
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalProgram",
        name: opportunity.title,
        description: (opportunity.description || []).join(" ") || details.benefits?.join(", "),
        provider: {
          "@type": "Organization",
          name: provider.organization_name || ""
        },
        educationalProgramMode: details.study_levels?.join(", ") || "Full-time",
        programPrerequisites: details.requirements?.join(", ") || "",
        url: details.application?.application_link || "",
        startDate: details.application?.start_date || "",
        endDate: details.application?.deadline || ""
      }

    case 'training':
      return {
        "@context": "https://schema.org",
        "@type": "Course",
        name: opportunity.title,
        description: (opportunity.description || []).join(" ") || details.topics_covered?.join(", "),
        provider: {
          "@type": "Organization",
          name: provider.organization_name || ""
        },
        courseMode: details.training_location?.mode || "Online",
        startDate: details.training_details?.start_date || "",
        endDate: details.training_details?.deadline || "",
        offers: {
          "@type": "Offer",
          price: 0,
          priceCurrency: "USD"
        }
      }

    case 'competition':
      return {
        "@context": "https://schema.org",
        "@type": "Event",
        name: opportunity.title,
        description: (opportunity.description || []).join(" ") || details.prizes?.join(", "),
        startDate: details.application?.start_date || "",
        endDate: details.application?.deadline || "",
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
      }

    case 'funding':
      return {
        "@context": "https://schema.org",
        "@type": "FinancialProduct",
        name: opportunity.title,
        description: (opportunity.description || []).join(" ") || details.benefits?.join(", "),
        provider: {
          "@type": "Organization",
          name: provider.organization_name || ""
        },
        amount: details.funding_details?.amount || "",
        fundingType: details.funding_details?.funding_type || ""
      }

    default:
      return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: opportunity.title,
        description: (opportunity.description || []).join(" ")
      }
  }
}