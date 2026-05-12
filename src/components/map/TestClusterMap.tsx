import { useState } from "react";
import { Card } from "../ui/card";
import {
  Map,
  MapClusterLayer,
  MapPopup,
  MapControls,
} from "~/components/ui/map";

interface EarthquakeProperties {
  mag: number;
  tsunami: number;
}

import { EarthquakeData } from "~/data/universal/earthquakes";

export default function TestClusterMap() {
  const [selectedPoint, setSelectedPoint] = useState<{
    coordinates: [number, number];
    properties: EarthquakeProperties;
  } | null>(null);

  return (
    <Card className="h-96 w-full overflow-hidden p-0">
      <Map center={[-103.59, 40.66]} zoom={3.4} fadeDuration={0}>
        <MapClusterLayer<EarthquakeProperties>
          data={EarthquakeData}
          clusterRadius={50}
          clusterMaxZoom={14}
          clusterColors={["#1d8cf8", "#6d5dfc", "#e23670"]}
          pointColor="#1d8cf8"
          onPointClick={(feature, coordinates) => {
            setSelectedPoint({
              coordinates,
              properties: feature.properties,
            });
          }}
        />

        {selectedPoint && (
          <MapPopup
            key={`${selectedPoint.coordinates[0]}-${selectedPoint.coordinates[1]}`}
            longitude={selectedPoint.coordinates[0]}
            latitude={selectedPoint.coordinates[1]}
            onClose={() => setSelectedPoint(null)}
            closeOnClick={false}
            focusAfterOpen={false}
            closeButton
            className="w-34"
          >
            <div className="text-[13px]">
              <p className="text-muted-foreground">
                Magnitude:{" "}
                <span className="font-medium text-foreground">
                  {selectedPoint.properties.mag}
                </span>
              </p>
              <p className="text-muted-foreground">
                Tsunami:{" "}
                <span className="font-medium text-foreground">
                  {selectedPoint.properties?.tsunami === 1 ? "Yes" : "No"}
                </span>
              </p>
            </div>
          </MapPopup>
        )}

        <MapControls />
      </Map>
    </Card>
  );
}
