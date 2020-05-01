export const Routes = {
  // MVP Routes
  HOME: '/',
  FAQ: '/learn-more',
  PRIVACY: '/privacy-policy',
  SERVICE_LOCATION: '/service-location',
  SERVICE_LOCATION_UPDATE: '/service-location/update',
  SERVICE_LOCATION_AVAILABLE: '/service-location/available/:zip?',
  SERVICE_LOCATION_UNAVAILABLE: '/service-location/unavailable',
  SERVICE_LOCATION_UNAVAILABLE_SIGNUP_COMPLETE:
    '/service-location/unavailable/confirm',
  FACILITY: `/facility`,
  LOGIN: '/login',
  LOGOUT: '/logout',
  LOGIN_COMPLETE: '/login/complete',
  WELCOME: `/welcome`,
  EMAIL_SIGNUP_FORM: `/signup`,
  EMAIL_SIGNUP_SENT: `/signup/confirm`,
  // Update firebaseBackend.js if you change this (it can't require this, because
  // this file is outside of the lib package).
  EMAIL_SIGNUP_COMPLETE: `/signup/complete/:zip?/:facility?`,
  CONTACT_FORM: `/contact`,
  CONTACT_CONFIRMATION: `/contact/confirm`,
  SERVICE_TYPE: '/service/:id?',
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
