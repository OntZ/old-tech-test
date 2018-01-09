// Quick and dirty templating to save us copy+pasting the article list item
// markup and means we don't need to include a templating framework
function fillArticleList() {
	var templateElement = document.getElementById("template");
	var template = templateElement.innerHTML;
	var articles = [
		{
			imageSource: "https://res.cloudinary.com/spotlightuk/image/fetch/w_400,c_limit/https://spotlight-cmsmedia.s3-eu-west-1.amazonaws.com/media/1656/6063491826_b22879c63b_o.jpg",
			title:"An Actor's Guide to Fulfilling Your Potential",
			category:"Tips and Advice",
			href:"someotherpage.html"
		},
		{
			imageSource: "https://res.cloudinary.com/spotlightuk/image/fetch/w_400,c_limit/https://spotlight-cmsmedia.s3-eu-west-1.amazonaws.com/media/1650/spotlight-roomslaunchparty-web-026.jpg",
			title:"Edinburgh Fringe: A Survival Guide",
			category:"Tips and Advice",
			href:"someotherpage.html"
		},
		{
			imageSource: "https://res.cloudinary.com/spotlightuk/image/fetch/w_400,c_limit/https://spotlight-cmsmedia.s3-eu-west-1.amazonaws.com/media/1467/umbraco-header.jpg",
			title:"Supercalifragilisticexpialidocious",
			category:"Tips and Advice",
			href:"someotherpage.html"
		},
		{
			imageSource: "https://res.cloudinary.com/spotlightuk/image/fetch/w_400,c_limit/https://spotlight-cmsmedia.s3-eu-west-1.amazonaws.com/media/1649/spotlightdaythree-32.jpg",
			title:"BBC Launches Opportunity for Disabled Actors",
			category:"News",
			href:"someotherpage.html"
		},
		{
			imageSource: "https://res.cloudinary.com/spotlightuk/image/fetch/w_400,c_limit/https://spotlight-cmsmedia.s3-eu-west-1.amazonaws.com/media/1170/spotlight-roomslaunchparty-web-004.jpg",
			title:"How to Stay Motivated",
			category:"Interviews & Podcasts",
			href:"someotherpage.html"
		},
		{
			imageSource: "https://res.cloudinary.com/spotlightuk/image/fetch/w_400,c_limit/https://spotlight-cmsmedia.s3-eu-west-1.amazonaws.com/media/1571/day-1-audience-laughing-2.jpg",
			title:"Spotlight Career Advice - August 2017",
			category:"Events",
			href:"someotherpage.html"
		},
		{
			imageSource: "https://res.cloudinary.com/spotlightuk/image/fetch/w_400,c_limit/https://spotlight-cmsmedia.s3-eu-west-1.amazonaws.com/media/1656/6063491826_b22879c63b_o.jpg",
			title:"Edinburgh Fringe: A Survival Guide",
			category:"Tips and Advice",
			href:"someotherpage.html"
		},
		{
			imageSource: "https://res.cloudinary.com/spotlightuk/image/fetch/w_400,c_limit/https://spotlight-cmsmedia.s3-eu-west-1.amazonaws.com/media/1656/6063491826_b22879c63b_o.jpg",
			title:"Edinburgh Fringe: A Survival Guide",
			category:"Tips and Advice",
			href:"someotherpage.html"
		}
	];
	
	var markup = articles.map(function (x) { 
			return (
				template.
				replace(/IMAGESOURCE/,x.imageSource).
				replace(/TITLE/,x.title).
				replace(/HREF/,x.href).
				replace(/CATEGORY/g,x.category)
			);
		}).join("");
	
	templateElement.parentNode.innerHTML = markup;
}
fillArticleList();