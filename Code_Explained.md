# Google Earth Engine Code - Osun State NDVI Analysis

This script generates a Normalized Difference Vegetation Index (NDVI) map for Osun State, Nigeria, using Sentinel-2 Surface Reflectance imagery for 2020.

The workflow includes:
- Filtering the study area
- Filtering Sentinel-2 imagery by location, date, and cloud cover
- Creating a median composite
- Calculating NDVI
- Visualizing the results
- Calculating the mean NDVI
- Exporting the final NDVI raster at 10 m resolution in UTM Zone 31N

---

## Functions and Methods Explained

| **Function / Method** | **What it does** | **Why we use it** | **Key Parameters** |
|---|---|---|---|
| `ee.Filter.eq()` | Filters features based on an exact attribute value | Selects Osun State from the Nigeria states dataset | `'ADM1NAME', 'Osun'` |
| `.filterBounds()` | Filters an ImageCollection to images that intersect a specified geometry | Keeps only Sentinel-2 images covering Osun State | `osun` |
| `.filterDate()` | Filters images within a specified date range | Selects Sentinel-2 imagery acquired during 2020 | `"2020-01-01", "2020-12-31"` |
| `.filterMetadata()` | Filters images using a metadata property | Removes images with cloud cover of 30% or more | `"CLOUDY_PIXEL_PERCENTAGE", "less_than", 30` |
| `.median()` | Calculates the median value of each pixel across all images in an ImageCollection | Creates a representative composite while reducing the influence of extreme pixel values and cloud contamination | ImageCollection |
| `.normalizedDifference()` | Calculates the normalized difference between two image bands | Calculates NDVI from the NIR and Red bands | `["B8", "B4"]` |
| `.rename()` | Changes the name of an image band | Names the calculated index as `NDVI` | `"NDVI"` |
| `.reduceRegion()` | Applies a reducer to all pixels within a specified region | Calculates the mean NDVI across Osun State | `reducer`, `geometry`, `scale`, `maxPixels` |
| `ee.Reducer.mean()` | Calculates the arithmetic mean of pixel values | Determines the average NDVI of the study area | — |
| `Map.centerObject()` | Centers the map display on a geometry | Positions the GEE map view over Osun State | `osun, 8` |
| `Map.addLayer()` | Adds an image or feature to the interactive map | Visualizes the true-color image, NDVI, and study-area boundary | Image/geometry, visualization parameters, layer name |
| `.clip()` | Restricts an image to a specified geometry | Limits the displayed imagery and NDVI to Osun State | `osun` |
| `Export.image.toDrive()` | Exports an Earth Engine image to Google Drive | Saves the final NDVI raster for further analysis in ArcGIS Pro | `image`, `region`, `scale`, `crs`, `maxPixels` |
| `crs` | Defines the coordinate reference system of the exported raster | Ensures the NDVI output is exported in UTM Zone 31N | `'EPSG:32631'` |
| `scale` | Defines the nominal pixel size of the export | Preserves the Sentinel-2 10 m spatial resolution | `10` |
| `maxPixels` | Sets the maximum number of pixels allowed during export or computation | Allows export of the large Osun State raster without exceeding the default pixel limit | `1e13` |
| `print()` | Sends information to the GEE Console | Displays the number of images and mean NDVI for checking the analysis | Any EE object/value |
