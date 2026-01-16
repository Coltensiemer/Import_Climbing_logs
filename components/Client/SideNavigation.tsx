'use client';

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";


export function SideNavigation() { 
	const router = useRouter();

	function removeLocalStorageData() {
		if (typeof window !== "undefined") {
			localStorage.removeItem('parsedData');
			router.push('/');
		}
	}

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