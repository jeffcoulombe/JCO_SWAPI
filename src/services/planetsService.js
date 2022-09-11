class PlanetsService {
	constructor() { }

	url = "https://swapi.dev/api/planets/";

	async getPlanets() {
		try {
			const response = await fetch(this.url);
			if (!response.ok) throw new Error(response.status);

			return await response.json();
		} catch (e) {
			console.error(e);

			return [];
		}
	}

	async getPlanetsWithReturnedUrl(url) {
		try {
			const response = await fetch(url);
			if (!response.ok) throw new Error(response.statusText);
			return await response.json();
		} catch (e) {
			console.error(e);

			return {};
		}
	}

	async getPlanetsById(id) {
		try {
			const response = await fetch(`${this.url}/${id}`);
			if (!response.ok) throw new Error(response.statusText);
			return await response.json();
		} catch (e) {
			console.error(e);

			return {};
		}
	}
}

export default PlanetsService;