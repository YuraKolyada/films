import movies from './sample_movies.txt';


class GetDataFile {

	constructor(dataFile){
		this.dataFile = dataFile;
		this.data = [];
	}

	getData = (str, title, year, format, actors, id) => {
		this.data.push({ 
			title, 
			year: +year, 
			format, 
			actors: actors.split(', '), 
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

export default () => new GetDataFile(movies).parseData();