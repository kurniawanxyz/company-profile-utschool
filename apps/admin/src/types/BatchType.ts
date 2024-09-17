export interface BatchType {
    id: string
    number: number
    training_program_id: string
    created_at: string
    updated_at: string
    training_program: TrainingProgram
  }
  
interface TrainingProgram {
    id: string
    name: string
  }
  