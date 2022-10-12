import React, { useRef, useEffect, useContext } from "react";

import esriConfig from "@arcgis/core/config.js";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

import { AppContext } from "../state/context";
import "../App.css";

const MapComponent = () => {
  const context = useContext(AppContext);
  // Required: Set this property to insure assets resolve correctly.
  esriConfig.assetsPath = "./assets";
  const mapDiv = useRef(null);

  // Opprett kartet
  useEffect(() => {
    if (mapDiv.current) {
      // Det første vi trenger er et Map objekt med bakgrunnskart
      // Konstruktøren er allerede i koden, men vi må velge bakgrunnskartet
      // En liste med valg inner vi i API dokumentasjonen:
      // https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap
      const map = new Map({
        basemap: "gray-vector",
      });

      // Hent dataen
      const featureLayer = new FeatureLayer({
        url: "https://services-eu1.arcgis.com/zci5bUiJ8olAal7N/arcgis/rest/services/OSM_Tourism_EU/FeatureServer/0",
      });

      // Legg til dataen i kartet
      map.add(featureLayer);

      // Legg til dataen i context
      context.featureLayer.set(featureLayer);

      // For å kunne vise kartet må dette legges til i et MapView
      // Dokumentasjonen for MapView finnes her:
      // https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html
      new MapView({
        map: map,
        container: mapDiv.current,
        extent: {
          ymin: 63.40182257265643,
          xmin: 10.227928161621094,
          ymax: 63.453731595863324,
          xmax: 10.560264587402344,
        },
      }).when((mapView) => {
        // Esri har mange widgets som er enkle å legge til i kartet
        // En av disse er locate widgeten, som flytter kartet til din possisjon
        // Widgeten må først opprettes, så plasseres på kartet
        // Dokumentasjon for dette er på:
        // https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Locate.html
        // En god idé er å sette zoom nivået med scale attributten, f. eks scale 5000
        // Vi har også lagd en egen widget som kan legges til i kartet
        // Denne ligger i components/RouteWidget, men den er ikke helt ferdig enda
        // Den må først legges til i App.js fila, men det er noen feil med den
        // Det første vi må gjøre er å sørge for at Widgeten har tilgang til MapViewet
        // Dette kan gjøres ved å legge den til i contexten vår
        // Resten av feilene må løses i RouteWidget fila
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="mapDiv" ref={mapDiv}></div>;
};

export default MapComponent;
