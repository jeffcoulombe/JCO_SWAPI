class PeopleService {

	url = "https://swapi.dev/api/people/";

	async getPeople() {
		try {
			const response = await fetch(this.url);
			if (!response.ok) throw new Error(response.status);

			return await response.json();
		} catch (e) {
			console.error(e);

			return [];
		}
	}

	async getPeopleWithReturnedUrl(url) {
		try {
			const response = await fetch(url);
			if (!response.ok) throw new Error(response.statusText);
			return await response.json();
		} catch (e) {
			console.error(e);

			return {};
		}
	}

	async getPeopleById(id) {
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

export default PeopleService;