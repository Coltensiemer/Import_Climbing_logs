export interface KayaLogBookHeaders {
    datee?: Date;
    stiffness?: number;
    rating?: Rating;
    ascent_type?: string;
    grade?: BoulderGrades | SportGrades;
    color?: string;
    climb_name?: string;
    gym?: string;
    location?: string;
    country?: string;
}

export type Rating = 1 | 2 | 3 | 4 | 5;

export type BoulderGrades =
  | "v1" | "v2" | "v3" | "v4" | "v5" | "v6" | "v7" | "v8"
  | "v9" | "v10" | "v11" | "v12" | "v13" | "v14" | "v15";

export type SportGrades =
  | "5.10a" | "5.10b" | "5.10c" | "5.10d"
  | "5.11a" | "5.11b" | "5.11c" | "5.11d"
  | "5.12a" | "5.12b" | "5.12c" | "5.12d"
  | "5.13a" | "5.13b" | "5.13c" | "5.13d"
  | "5.14a" | "5.14b" | "5.14c" | "5.14d";