# Spatiotemporal-Analysis-of-Vegetation-Dynamics-in-Osun-State-2020-2025

This project investigates vegetation dynamics across Osun State, Nigeria, using Sentinel-2 satellite imagery, Normalized Difference Vegetation Index (NDVI), and Vegetation Index Difference (VID) analysis between 2020 and 2025.

# Spatiotemporal Analysis of Vegetation Dynamics in Osun State, Nigeria (2020–2025)

![GIS](https://img.shields.io/badge/Field-GIS-blue)
![Remote Sensing](https://img.shields.io/badge/Skill-Remote%20Sensing-green)
![Google Earth Engine](https://img.shields.io/badge/Tool-Google%20Earth%20Engine-orange)
![ArcGIS Pro](https://img.shields.io/badge/Tool-ArcGIS%20Pro-red)
![Focus](https://img.shields.io/badge/Focus-Vegetation%20Dynamics-brightgreen)

---

## Table of Contents

* [Project Overview](#project-overview)
* [Objectives](#objectives)
* [Study Area](#study-area)
* [Data Sources](#data-sources)
* [Tools and Technologies](#tools-and-technologies)
* [Methodology](#methodology)
* [Results and Insights](#results-and-insights)
* [Vegetation Change Analysis](#vegetation-change-analysis)
* [Spatial Analysis](#spatial-analysis)
* [Interpretation](#interpretation)
* [Conclusion](#conclusion)
* [Recommendations](#recommendations)
* [Project Visualization](#project-visualization)

---

## Project Overview

Vegetation is an important indicator of environmental conditions and landscape change. However, vegetation conditions are not static and can change over time due to variations in climate, rainfall, land-use activities, agricultural practices, development, and vegetation recovery.

This project investigates the spatial and temporal dynamics of vegetation across **Osun State, Southwestern Nigeria**, by comparing vegetation conditions between **2020 and 2025**.

The analysis uses the **Normalized Difference Vegetation Index (NDVI)** derived from Sentinel-2 satellite imagery to represent vegetation conditions for both years. A **Vegetation Index Difference (VID)** was subsequently calculated to identify areas of vegetation gain, vegetation loss, and relatively stable vegetation conditions.

The analysis reveals three major patterns across the study area:

* Areas of **vegetation gain** were more extensive than areas of vegetation loss.
* A substantial portion of the study area showed **little or no vegetation change**.
* Vegetation loss and gain occurred simultaneously across different parts of Osun State.

The final results show that:

* **53.61%** of the classified area experienced vegetation gain.
* **34.66%** showed little or no vegetation change.
* **21.91%** experienced vegetation loss.

These results demonstrate how satellite-derived vegetation indices can be used to quantify and visualize environmental change across a large geographic area.

---

## Objectives

* Generate NDVI maps for Osun State for **2020 and 2025** using Sentinel-2 imagery.
* Examine the spatial distribution of vegetation conditions across the study area.
* Calculate the **Vegetation Index Difference (VID)** between 2020 and 2025.
* Classify vegetation changes into vegetation loss, little/no change, and vegetation gain categories.
* Quantify the area and percentage occupied by each vegetation-change category.
* Interpret the spatial patterns of vegetation dynamics across Osun State.
* Demonstrate the application of Remote Sensing and GIS for environmental change monitoring.

---

## Study Area

**Osun State, Southwestern Nigeria**

Osun State is located in southwestern Nigeria and is characterized by a mixture of agricultural landscapes, forested areas, grassland, settlements, and other land-cover types.

The state experiences a tropical climate with seasonal variations in rainfall and vegetation conditions. These environmental characteristics make Osun State suitable for examining vegetation dynamics using satellite-based vegetation indices.

The analysis focuses on the spatial distribution and changes in vegetation conditions across the state between **2020 and 2025**.

 
---

## Data Sources

| Data | Source | Purpose |
| --------------------------------- | -------------------------------- | ------------------------------------------------ |
| Sentinel-2 Surface Reflectance | Google Earth Engine | NDVI calculation for 2020 and 2025 |
| Osun State Boundary | Administrative boundary dataset | Definition of study area |
| NDVI 2020 | Derived from Sentinel-2 | Representation of vegetation condition in 2020 |
| NDVI 2025 | Derived from Sentinel-2 | Representation of vegetation condition in 2025 |
| Vegetation Index Difference | Derived from NDVI 2020 and 2025 | Detection of vegetation change |

---

## Tools and Technologies

* **Google Earth Engine**
* **ArcGIS Pro**
* **Sentinel-2 Surface Reflectance**
* **Normalized Difference Vegetation Index (NDVI)**
* **Vegetation Index Difference (VID)**
* Raster Classification
* Raster Attribute Table
* Spatial Analysis
* Remote Sensing
* GIS Visualization

---

## Methodology

### 1. Sentinel-2 Image Collection

**Aim:**

* Obtain satellite imagery suitable for assessing vegetation conditions across Osun State.

**Objective:**

* Acquire Sentinel-2 Surface Reflectance imagery for 2020 and 2025 while reducing the influence of cloudy observations.

Sentinel-2 Surface Reflectance imagery was obtained from the **COPERNICUS/S2_SR_HARMONIZED** collection in Google Earth Engine.

The imagery was filtered spatially to Osun State and temporally to the respective study years. Images with cloud cover greater than **30%** were excluded from the collection.

---

### 2. NDVI Generation

**Aim:**

* Quantify vegetation conditions across Osun State.

**Objective:**

* Generate spatially continuous NDVI surfaces for 2020 and 2025.

NDVI was calculated using the Near-Infrared (NIR) and Red bands of Sentinel-2:

$$
NDVI = \frac{NIR - Red}{NIR + Red}
$$

For Sentinel-2:

* **B8** = Near-Infrared (NIR)
* **B4** = Red

The NDVI calculation was performed separately for the 2020 and 2025 imagery.

The resulting NDVI rasters were exported at a **10 m × 10 m spatial resolution** for subsequent analysis.

---

### 3. NDVI Visualization

The generated NDVI rasters were imported into ArcGIS Pro for visualization and classification.

The NDVI maps were classified into five vegetation-condition classes to visualize the spatial distribution of vegetation across Osun State.

The final NDVI ranges were:

| Year | NDVI Range |
|---|---:|
| **2020** | −0.262 to 0.846 |
| **2025** | −0.417 to 0.862 |

Higher NDVI values generally represent areas with greater vegetation density, while lower or negative values represent areas with limited vegetation or non-vegetated surfaces.

---

### 4. Vegetation Index Difference (VID)

**Aim:**

* Detect vegetation changes between 2020 and 2025.

**Objective:**

* Identify areas where vegetation conditions increased, decreased, or remained relatively stable.

The Vegetation Index Difference was calculated using:

$$
VID = NDVI_{2025} - NDVI_{2020}
$$

The resulting raster represents the direction and magnitude of vegetation change.

* **Positive VID values** indicate an increase in NDVI and therefore vegetation gain.
* **Negative VID values** indicate a decrease in NDVI and therefore vegetation loss.
* Values close to zero indicate relatively little or no change.

---

### 5. Vegetation Change Classification

The VID raster was classified into five vegetation-change categories:

| VID Category | Interpretation |
|---|---|
| **Strong Vegetation Loss** | Large negative change in NDVI |
| **Moderate Vegetation Loss** | Moderate negative change in NDVI |
| **Little/No Change** | Relatively small change in NDVI |
| **Moderate Vegetation Gain** | Moderate positive change in NDVI |
| **Strong Vegetation Gain** | Large positive change in NDVI |

The classified raster was subsequently analyzed in ArcGIS Pro using the raster attribute table to determine the number of pixels, area, and percentage represented by each class.

---

## Results and Insights

### Key Finding: Vegetation Gain Dominated the Observed Changes

The analysis shows that vegetation gain was the largest overall change category between 2020 and 2025.

Approximately **53.61%** of the classified area experienced vegetation gain, comprising:

* **37.18% Moderate Vegetation Gain**
* **16.44% Strong Vegetation Gain**

This indicates that vegetation improvement occurred across a substantial proportion of the classified area during the study period.

---

### Quantitative Vegetation Change Findings

| Vegetation Change Category | Area (km²) | Percentage |
|---|---:|---:|
| **Strong Vegetation Loss** | 966.805 | **11.31%** |
| **Moderate Vegetation Loss** | 906.423 | **10.60%** |
| **Little/No Change** | 2,963.148 | **34.66%** |
| **Moderate Vegetation Gain** | 3,178.625 | **37.18%** |
| **Strong Vegetation Gain** | 1,405.486 | **16.44%** |
| **Total** | **=8,420.49** | **100%** |

---

## Vegetation Change Analysis

### 1. Vegetation Gain

Vegetation gain accounted for **53.61%** of the classified area.

Moderate vegetation gain represented the largest individual change class at **37.18%**, while strong vegetation gain accounted for **16.44%**.

Together, these categories indicate that vegetation improvement was the dominant change pattern across the classified area.

---

### 2. Little or No Vegetation Change

Approximately **34.66%** of the classified area showed little or no vegetation change.

This suggests that a substantial proportion of the landscape maintained relatively similar vegetation conditions between 2020 and 2025.

---

### 3. Vegetation Loss

Vegetation loss accounted for **21.91%** of the classified area.

This comprised:

* **11.31% Strong Vegetation Loss**
* **10.60% Moderate Vegetation Loss**

Although vegetation gain was dominant overall, the presence of vegetation-loss areas demonstrates that vegetation conditions did not change uniformly across the state.

---

## Spatial Analysis

The VID analysis reveals three major spatial patterns:

### 1. Areas of Vegetation Gain

Positive VID values were distributed across different parts of Osun State, indicating areas where NDVI increased between 2020 and 2025.

These areas may reflect vegetation recovery, seasonal/environmental differences, agricultural conditions, or other landscape processes.

### 2. Areas of Vegetation Stability

Large portions of the state exhibited VID values close to zero.

These areas represent relatively stable vegetation conditions over the study period.

### 3. Areas of Vegetation Loss

Negative VID values occurred across several parts of the state, indicating locations where NDVI declined between 2020 and 2025.

These areas require further investigation to determine the specific drivers of vegetation decline.

---

## Interpretation

### Vegetation Dynamics

The analysis demonstrates that vegetation change across Osun State was **not unidirectional**.

Although vegetation gain dominated the overall change pattern, vegetation loss and stable vegetation conditions were also widespread.

This highlights the importance of using change-detection techniques rather than relying only on individual NDVI maps.

---

### Possible Environmental Drivers

Vegetation dynamics can be influenced by several environmental and human factors, including:

* Rainfall variability
* Agricultural activities
* Land-use and land-cover change
* Vegetation recovery
* Urban expansion
* Deforestation or vegetation disturbance
* Seasonal differences in environmental conditions

However, the present analysis identifies the **spatial pattern of vegetation change** but does not establish the specific causes of the observed changes.

Rainfall would therefore be an important dataset to incorporate in a future analysis to investigate whether variations in precipitation are associated with the observed vegetation response.

---

### Importance of Remote Sensing

The analysis demonstrates how satellite imagery can provide a spatially consistent method for monitoring vegetation across large areas.

Rather than relying solely on field observations, NDVI and VID provide a means of identifying:

* Vegetation improvement
* Vegetation decline
* Stable vegetation areas
* Spatial patterns of environmental change

This makes satellite-based monitoring valuable for environmental assessment, land management, agricultural monitoring, and ecological studies.

---

## Conclusion

This project demonstrates the use of **Sentinel-2 satellite imagery, NDVI, and GIS-based change detection** to examine vegetation dynamics in Osun State between 2020 and 2025.

The analysis revealed that:

* **53.61%** of the classified area experienced vegetation gain.
* **34.66%** showed little or no vegetation change.
* **21.91%** experienced vegetation loss.

Vegetation gain was therefore the dominant observed change pattern during the study period.

However, the presence of both vegetation gain and vegetation loss demonstrates that vegetation dynamics varied spatially across Osun State.

The broader insight from this analysis is that **detecting vegetation change is only the first step. Understanding the environmental and human factors responsible for that change requires integrating additional datasets.**

This provides an opportunity for further analysis using rainfall, land-use/land-cover, temperature, agricultural, and other environmental datasets.

---

## Recommendations

* Integrate rainfall datasets with NDVI change analysis to investigate the relationship between precipitation and vegetation dynamics.
* Incorporate land-use/land-cover data to identify areas where vegetation change may be associated with agricultural expansion, urban development, or other land-use transitions.
* Conduct multi-year NDVI analysis rather than relying on only two observation years.
* Investigate areas with strong vegetation loss for possible environmental or anthropogenic drivers.
* Use higher-frequency satellite observations to distinguish seasonal variability from longer-term vegetation trends.
* Combine Remote Sensing and GIS analysis with field observations where possible for improved interpretation and validation.
* Continue using satellite-based vegetation monitoring to support environmental management and landscape assessment across Osun State.

---

 

 


<img width="..." height="..." alt="Osun Vegetation Index Difference" src="YOUR_GITHUB_IMAGE_LINK" />

### Final Project Map

<img width="..." height="..." alt="Spatiotemporal Analysis of Vegetation Dynamics in Osun State" src="YOUR_GITHUB_IMAGE_LINK" />

---
