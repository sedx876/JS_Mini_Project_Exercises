// JSC.Chart('chartDiv', {
//     type: 'vertical column',
//     series: [
//        {
//           name:'Andy',
//           points: [
//              {x: 'Apples', y: 50},
//              {x: 'Oranges', y: 32},
//              {x: 'Lemons', y: 94}
//           ]
//        },{
//           name:'Anna',
//           points: [
//              {x: 'Apples', y: 30},
//              {x: 'Oranges', y: 22},
//              {x: 'Lemons', y: 400}
//           ]
//        },{
//            name: 'Tootie',
//            points: [
//             {x: 'Apples', y: 100},
//             {x: 'Oranges', y: 69},
//             {x: 'Lemons', y: 250}
//            ]
//        }
//     ]
//  });

fetch('https://data.cdc.gov/resource/w9j2-ggv5.csv')
	.then(function (response) {
		return response.text();
	})
	.then(function (text) {
		let series = csvToSeries(text);
		renderChart(series);
	})
	.catch(function (error) {
		//Something went wrong
		console.log(error);
	});

function csvToSeries(text) {
	const lifeExp = 'average_life_expectancy';
	let dataAsJson = JSC.csv2Json(text);
	let male = [], female = [];
	dataAsJson.forEach(function (row) {
		//add either to male, female, or discard.
		if (row.race === 'All Races') {
			if (row.sex === 'Male') {
				male.push({x: row.year, y: row[lifeExp]});
			} else if (row.sex === 'Female') {
				female.push({x: row.year, y: row[lifeExp]});
			}
		}
	});
	return [
		{name: 'Male', points: male},
		{name: 'Female', points: female}
	];
}

function renderChart(series){
	JSC.Chart('chartDiv', {
		title_label_text: 'Life Expectancy in the United States',
		annotations: [{
			label_text: 'Source: National Center for Health Statistics',
			position: 'bottom left'
		}],
		series: series
	});
}

