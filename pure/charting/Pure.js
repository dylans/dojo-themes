define(["dojox/charting/SimpleTheme", "dojox/charting/themes/common"], function(SimpleTheme, themes){
	themes.Pure = new SimpleTheme({
		colors: [
			"#f1f3f9",
			"#344579",
			"#d1d7eb",
			"#bec7e3",
			"#e6eaf4",
			"#8a9bcd",
			"#5c6480"
		]
	});
	return themes.Pure;
});
