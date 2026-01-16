'use client';

import { Button } from "../ui/button";


function removeLocalStorageData() {
  if (typeof window !== "undefined") {
    localStorage.removeItem('parsedData');
    window.location.reload(); // Optional: refresh after clearing
  }
}


export function SideNavigation() { 
	return (
		<div>
			<Button
				onClick={removeLocalStorageData}
				className="w-full py-2 px- text-white rounded hover:bg-red-600"
			>
				Clear Data
			</Button>
		</div>
	)
}