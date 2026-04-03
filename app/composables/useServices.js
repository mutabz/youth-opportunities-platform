import { ApiService } from '~/services/apiService'

export const useServices = () => {
  const { $api } = useNuxtApp()

  return {
    UserService: new ApiService('users', $api),
    OpportunityService: new ApiService('opportunities', $api),
    ApplicationService: new ApiService('applications', $api),
    OrganizationService: new ApiService('organizations', $api),
    JobService: new ApiService('jobs', $api),
    // Add others here
  }
}