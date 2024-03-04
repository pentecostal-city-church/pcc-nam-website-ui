import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";
import { scaleQuantize } from "d3-scale";
import { csv } from "d3-fetch";


const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const colorScale = scaleQuantize(
    [
        1,
        10000000
    ],
    [
        "#ffedea",
        "#ffcec5",
        "#ffad9f",
        "#ff8a75",
        "#ff5533",
        "#e2492d",
        "#be3d26",
        "#9a311f",
        "#782618"
      ]
    );
const MapChart = ({ setTooltipContent }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // https://www.bls.gov/lau/
    const csvFilePath = '/data/uscounties.csv';
    try {
        csv(csvFilePath).then((counties) => {
            setData(counties);
          });
    } catch (e) {
        console.log('csv error', e);
    }
  }, []);

  return (
    <>
      <ComposableMap data-tip="" projection="geoAlbersUsa">
        <ZoomableGroup zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const cur = data.find((s) => s.id === geo.id);
                return cur?.id ? (
                    <>
                        <Geography
                            data-tooltip-id={'county-geo'}
                            data-tooltip-content={`${cur ? cur.name : null}, ${cur ? cur.state_id : null} — ${
                                cur ? cur.population : null
                            }`}
                            // data-tooltip-id={cur.id}
                            key={geo.rsmKey}
                            geography={geo}
                            onMouseEnter={() => {
                                // setTooltipContent(
                                //     {
                                //         id: cur.id,
                                //         label: `${cur ? cur.name : null} — ${
                                //         cur ? cur.unemployment_rate : null
                                //         }`
                                //     }
                                // );
                            }}
                            onMouseLeave={() => {
                                // setTooltipContent({
                                //     id: '',
                                //     label: ''
                                // });
                            }}
                            style={{
                                default: {
                                    fill: "#D6D6DA",
                                    outline: "none"
                                },
                                hover: {
                                    fill: colorScale(cur ? cur.population : "#EEE"),
                                    outline: "none"
                                },
                                pressed: {
                                    fill: "#00a4b7",
                                    outline: "none"
                                }
                            }}
                        />
                            {/* <div data-tooltip-id={555} data-tooltip-content="Hello to you too!"/> */}
                        </>
                ) : null;
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default MapChart;