export default function add(...params: number[]): number {
	return params.reduce((total, current) => total + current, 0);
}
