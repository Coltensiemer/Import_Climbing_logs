import { KayaLogBookHeaders, Rating, BoulderGrades, SportGrades } from '../types/types';


export function generateFakeKayaLogEntry(): KayaLogBookHeaders {
  const gyms = ['Climb Central', 'The Wall', 'Peak Pursuit'];
  const locations = ['Seattle', 'Denver', 'Austin'];
  const countries = ['USA', 'Canada', 'UK'];
  const grades = [...ALL_BOULDER_GRADES, ...ALL_SPORT_GRADES];
  const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Orange', 'Purple'];
  const ascentTypes = ['Flash', 'Redpoint', 'Onsight'];
  const climbNames = ['Dyno King', 'Sloper City', 'Crimp Fest'];
  const ratings: Rating[] = [1, 2, 3, 4, 5];
  const stiffnesses = [0, 1, 2, 3];

  return {
    datee: new Date(),
    stiffness: stiffnesses[Math.floor(Math.random() * stiffnesses.length)],
    rating: ratings[Math.floor(Math.random() * ratings.length)],
    ascent_type: ascentTypes[Math.floor(Math.random() * ascentTypes.length)],
    grade: grades[Math.floor(Math.random() * grades.length)],
    color: colors[Math.floor(Math.random() * colors.length)],
    climb_name: climbNames[Math.floor(Math.random() * climbNames.length)],
    gym: gyms[Math.floor(Math.random() * gyms.length)],
    location: locations[Math.floor(Math.random() * locations.length)],
    country: countries[Math.floor(Math.random() * countries.length)],
  };
}


export function generateFakeKayaLogEntries(count: number): KayaLogBookHeaders[] {
	return Array.from({ length: count }, generateFakeKayaLogEntry);
}

export const ALL_BOULDER_GRADES: BoulderGrades[] = [
  "v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8",
  "v9", "v10", "v11", "v12", "v13", "v14", "v15"
];

export const ALL_SPORT_GRADES: SportGrades[] = [
  "5.10a", "5.10b", "5.10c", "5.10d",
  "5.11a", "5.11b", "5.11c", "5.11d",
  "5.12a", "5.12b", "5.12c", "5.12d",
  "5.13a", "5.13b", "5.13c", "5.13d",
  "5.14a", "5.14b", "5.14c", "5.14d"
];




