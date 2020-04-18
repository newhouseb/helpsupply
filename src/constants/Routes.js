export const Routes = {
  DROPSITE_ADMIN: `/dropsite/:id/admin`,
  DROPSITE_CONTACT: `/dropsite/:id/contact`,
  DROPSITE_CONTACT_CONFIRMATION: `/dropsite/:id/contact/confirmation`,
  DROPSITE_DETAIL: `/dropsite/:id`,
  DROPSITE_NEW_ADMIN: `/dropsite/new/admin/:id`,
  FACILITY_CONFIRMATION: '/facility/confirmation',
  FACILITY_EDIT: '/facility/:id/edit',
  FAQ: '/learn-more',
  HOME: '/',
  LOGOUT: '/logout',
  PENDING_DOMAINS: '/pending-domains',
  PROFILE: '/profile',
  NEW_FACILITY: '/new-facility',
  REQUEST_SERVICES: '/request-services',
  REQUEST_SUPPLIES: '/request',
  SIGNUP_DROPSITE: `/signup/:id`,
  SIGNUP_DROPSITE_CONFIRMATION: `/signup/:id/confirmation`,
  SIGNUP_FINISH_DROPSITE: `/signup/finish/:id`,
  STYLE_GUIDE: '/style-guide',
  SUPPLY_NEW_ADMIN: `/new/admin/supply/:id`,
  SUPPLY_NEW_ADMIN_CONFIRMATION: `/new/admin/supply/:id/confirmation/:requestId`,

  // MVP Routes
  SERVICE_LOCATION: '/service-location',
  SERVICE_LOCATION_AVAILABLE: '/service-location/available',
  SERVICE_LOCATION_UNAVAILABLE: '/service-location/unavailable',
  FACILITY: `/facility`,
  LOGIN: '/login',
  EMAIL_SIGNUP_FORM: `/signup`,
  EMAIL_SIGNUP_SENT: `/signup/confirm`,
  // Update firebaseBackend.js if you change this (it can't require this, because
  // this file is outside of the lib package).
  EMAIL_SIGNUP_COMPLETE: `/signup/complete`,
  CONTACT_FORM: `/contact`,
  CONTACT_CONFIRMATION: `/contact/confirm`,
  SERVICE_TYPE: '/service',
  SERVICE_GROCERIES_WHERE: '/service/grocery/location/:id',
  SERVICE_GROCERIES_WHEN: '/service/grocery/date/:id',
  SERVICE_GROCERIES_WHAT: '/service/grocery/items/:id',
  SERVICE_CHILDCARE_WHERE: '/service/childcare/location/:id',
  SERVICE_CHILDCARE_WHEN: '/service/childcare/date/:id',
  SERVICE_CHILDCARE_DETAILS: '/service/childcare/details/:id',
  SERVICE_CHILDCARE_WHAT: '/service/childcare/options/:id',
  SERVICE_PETCARE_WHERE: '/service/petcare/location/:id',
  SERVICE_PETCARE_WHEN: '/service/petcare/date/:id',
  SERVICE_PETCARE_DETAILS: '/service/petcare/details/:id',
  SERVICE_EMOTIONAL_WHEN: '/service/help/date/:id',
  SERVICE_EMOTIONAL_WHAT: '/service/help/type/:id',
  SERVICE_ADDITIONAL_INFO: '/service/additionalinfo/:id',
  SERVICE_REVIEW: '/service/review/:id',
  SERVICE_CONFIRMATION: '/service/confirmation/:id',
  DASHBOARD: '/dashboard',

  // Admin and Debugging routes
  DEBUG_REQUESTS: '/requests/debug',
};
