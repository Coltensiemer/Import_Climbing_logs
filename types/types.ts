export interface KayaLogBookHeaders {
    date?: string | Date;
    stiffness?: number;
    rating?: number;
    ascent_type?: string;
    grade?: string;
    color?: string;
    climb_name?: string;
    gym?: string;
    location?: string;
    country?: string;
}

export type KayaLogBookHeadersRawData = {
  date?: string | Date;
  stiffness?: string | number;
  rating?: string | number;
  ascent_type?: string;
  grade?: string;
  color?: string;
  climb_name?: string;
  gym?: string;
  location?: string;
  country?: string;
}

export type tensionLogBookHeaders = {
  board: Boards;
  angle: string;
  climb_name: string;
  date?: Date;
  logged_grade?: string;
  is_benchmark?: boolean;
  tires?: string | number;
  is_mirror?: boolean;
  session_count?: number;
  tries_total?: number;
  is_repeat?: boolean;
  is_accent?: boolean;
}

//Need to create a convert function to convert string data to match the types
export function convertKayaLogBookHeaders(data: KayaLogBookHeadersRawData ): KayaLogBookHeaders {
    return {
        date: data.date ? new Date(data.date) : undefined,
        stiffness: data.stiffness !== undefined ? Number(data.stiffness) : undefined,
        rating: data.rating !== undefined ? Number(data.rating) as Rating : undefined,
        ascent_type: data.ascent_type,
        grade: data.grade,
        color: data.color,
        climb_name: data.climb_name,
        gym: data.gym,
        location: data.location,
        country: data.country,
    };
} 
export type Rating = 1 | 2 | 3 | 4 | 5;

export type BoulderGrades =
  "v0" | "v1" | "v2" | "v3" | "v4" | "v5" | "v6" | "v7" | "v8"
  | "v9" | "v10" | "v11" | "v12" | "v13" | "v14" | "v15";

export type SportGrades =
  | "5.10a" | "5.10b" | "5.10c" | "5.10d"
  | "5.11a" | "5.11b" | "5.11c" | "5.11d"
  | "5.12a" | "5.12b" | "5.12c" | "5.12d"
  | "5.13a" | "5.13b" | "5.13c" | "5.13d"
  | "5.14a" | "5.14b" | "5.14c" | "5.14d";

  export type fontGrade = 
    "5a" | "5b" | "5c" | "6a" | "6a+" | "6b" | "6b+" |
    "6c" | "6c+" | "7a" | "7a+" | "7b" | "7b+" |
    "7c" | "7c+" | "8a" | "8a+" |
    "8b" | "8b+" | "8c" | "8c+" |
    "9a" 
    
  export type fontAndVGrade =
    | fontGrade
    | BoulderGrades;

export type Boards = "Tension" | "Kaya" | "MoonBoard" | "KilterBoard"; 