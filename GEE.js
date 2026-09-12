// Import the Nigeria State Shapefile and filter it with the study are


//Filter to Osun state

var osun = states.filter(ee.Filter.eq('ADM1NAME', 'Osun'));


//LOAD AND FILTER SENTINEL-2 COLLECTION 
var s2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
              .filterBounds(osun)
              .filterDate("2020-01-01", "2020-12-31")
              .filterMetadata("CLOUDY_PIXEL_PERCENTAGE", "less_than", 30);

//CREATE CLOUD-FREE COMPOSITE
var image = s2.median();


// CALCULATE NDVI  
var ndvi = image.normalizedDifference(["B8", "B4"]).rename("NDVI");


// PRINT INFORMATION 
print("Number of scenes used:", s2.size());

 
print("Mean NDVI (study area):", ndvi.reduceRegion({
  reducer: ee.Reducer.mean(),
  geometry: osun,
  scale: 10,
  maxPixels: 1e9
}));



// Visualize on map
Map.centerObject(osun, 8)

 
var trueColorVis = {
  bands: ["B4", "B3", "B2"],
  min: 0,
  max: 3000
};

var ndviVis = {
  min: -0.2,
  max: 0.8,
  palette: ["#7f1d1d", "#b45309", "#fef08a", "#4ade80", "#166534"]
};

// Clip images to study area only
var clippedImage = image.clip(osun);
var clippedNDVI = ndvi.clip(osun);

Map.addLayer(clippedImage, trueColorVis, "True Color 2020");
Map.addLayer(clippedNDVI, ndviVis, "NDVI 2020");
Map.addLayer(osun, {color: "red"}, "Study Area");


Export.image.toDrive({
  image: clippedNDVI,
  description: 'Osun_NDVI_2020_UTM',
  folder: 'GEE',
  region: osun.geometry(),
  scale: 10,
  crs: 'EPSG:32631',
  maxPixels: 1e13
});

