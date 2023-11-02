import { BACKEND_PATIENT_LIST_V1, privateHttpClient } from '../../../settings'

export async function getPatients() {
  try {
    const data = await privateHttpClient.get<any>(BACKEND_PATIENT_LIST_V1)
    return data
  } catch (error) {
    throw error
  }
}
