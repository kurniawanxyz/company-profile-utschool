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
  