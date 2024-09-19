export interface ScheduleType {
    id: string
    learning_point_id: string
    batch_id: string
    training_program_id: string
    start: string
    end: string
    created_at: string
    updated_at: string
    batch: Batch
    training_program: TrainingProgram
    learning_point: LearningPoint
    sobat_school: SobatSchool[]
    registration_form: RegistrationForm[]
  }
  
 interface Batch {
    id: string
    number: number
    training_program_id: string
    created_at: string
    updated_at: string
  }
  
 interface TrainingProgram {
    id: string
    name: string
  }
  
 interface LearningPoint {
    id: string
    name: string
    location: string
  }
  
 interface SobatSchool {
    id: string
    name: string
    location: string
    created_at: string
    updated_at: string
    pivot: Pivot
  }
  
 interface Pivot {
    reg_schedule_id: string
    sobat_school_id: string
  }
  

export interface RegistrationForm {
  id: string
  batch_id: string
  sobat_school_id: string
  learning_point_id: string
  approval: any
  learning_pattern: string
  is_willing_to_relocate: number
  compliance_agreement: number
  motivation: string
  full_name: string
  place_of_birth: string
  date_of_birth: string
  gender: string
  address: string
  telephone_number: string
  email: string
  id_card: string
  hobby: string
  school_type: string
  school_of_origin: string
  major: string
  created_at: string
  updated_at: string
}