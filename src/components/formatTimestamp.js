//Format timestamps from epoch, to 'M/D/YYYY':
export default function formatTimestamp(timestamp) {
	const date = new Date(timestamp);
	const month = String(date.getMonth() + 1);
	const day = String(date.getDate() + 1);
	const year = date.getFullYear();
	return `${month}/${day}/${year}`;
}
