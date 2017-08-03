
export default class GetDataFile {

	constructor(dataFile){
		this.dataFile = dataFile;
		this.data = [];
	}

	getData = (str, title, year, format, actors) => {
		let actor = actors.split(', '),
			id = Math.ceil(Math.random() * (50000 - 1) + 1);

		actors = actor.map((name) => {
			let arrName = name.split(' ');
			return { firstName: arrName[0], lastName: arrName[1] }
		})
		this.data.push({ 
			title, 
			year: +year, 
			format, 
			actors, 
			id, 
		})
	}

	parseData = () => {
		let regex = /\s*Title: ([^\n].+)\s+Release Year: (\d+)\s*Format: ([^\s].+)\s+Stars:\s?([^\n].+)/g;
		this.dataFile.replace(regex, this.getData);
		localStorage.setItem('movies', JSON.stringify(this.data));
		return this.data;
	}
}
