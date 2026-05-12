import { useState } from "react";
import { Card } from "../ui/card";
import {
  Map,
  MapClusterLayer,
  MapPopup,
  MapControls,
} from "~/components/ui/map";

export interface TeamProperties {
  location: string;
  name: string;
}

import { NBApoints } from "~/data/universal/depMapData";

export default function SportClusterMap() {
  const [selectedPoint, setSelectedPoint] = useState<{
    coordinates: [number, number];
    properties: TeamProperties;
  } | null>(null);

  console.log("EarthquakeData, NBApoints");

  return (
    <Card className="h-96 w-full overflow-hidden p-0">
      <Map center={[-103.59, 40.66]} zoom={3.4} fadeDuration={0}>
        <MapClusterLayer<TeamProperties>
          data={NBApoints}
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
                  {selectedPoint.properties.location}
                </span>
              </p>
              <p className="text-muted-foreground">
                Tsunami:{" "}
                <span className="font-medium text-foreground">
                  {selectedPoint.properties.name}
                </span>
              </p>
            </div>
          </MapPopup>
        )}

        <MapControls
          position="top-right"
          showZoom
          showCompass
          showLocate
          showFullscreen
        />
      </Map>
    </Card>
  );
}
