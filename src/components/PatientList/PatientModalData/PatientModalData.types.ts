import { Patient } from '../../../services/patient/getPatients/getPatients'

export type PatientModalDataProps = {
  patient: Patient
  setClose: (arg: boolean) => void
}
