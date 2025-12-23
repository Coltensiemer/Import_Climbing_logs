export function formatDateCell(value: string | Date | undefined): string {
  if (!value) return '';
  const dateObj = typeof value === 'string' ? new Date(value) : value;
  if (!dateObj || isNaN(dateObj.getTime())) return '';
  const dd = String(dateObj.getDate()).padStart(2, '0');
  const mm = String(dateObj.getMonth() + 1).padStart(2, '0');
  const yyyy = dateObj.getFullYear();
  return `${mm}-${dd}-${yyyy}`;
}


