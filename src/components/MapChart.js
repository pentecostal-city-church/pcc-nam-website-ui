import React, { useState, useEffect, useMemo } from "react";
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
        'rgb(183, 193, 204)',
        'rgb(170, 185, 192)',
        'rgb(163, 178, 191)',
        'rgb(135, 161, 185)',
        'rgb(135, 161, 185)',
        'rgb(100, 135, 170)',
        'rgb(100, 135, 170)',
        'rgb(88, 127, 164)',
        'rgb(61, 106, 149)',
        'rgb(61, 106, 149)'
    ]
);

const colorScaleHover = scaleQuantize(
    [
        1,
        10000000
    ],
    [
        'rgb(198, 208, 219)',
        'rgb(185, 200, 207)',
        'rgb(178, 193, 206)',
        'rgb(150, 176, 200)',
        'rgb(150, 176, 200)',
        'rgb(115, 150, 185)',
        'rgb(115, 150, 185)',
        'rgb(103, 142, 179)',
        'rgb(76, 121, 164)',
        'rgb(76, 121, 164)'
    ]
);

const sizeScale = (width) => {
    if (width > 3000) {
        return {
            // height: 400,
            // width: 300,
            // scale: 1000,
            center: [-21, 35]
        };
    } else if (width > 2000) {
        return {
            // height: 400,
            // width: 300,
            // scale: 500,
            center: [-21, 33]
        };
    } else if (width > 1000) {
        return {
            // height: 400,
            // width: 300,
            // scale: 1000,
            center: [-21, 40]
        };
    } else if (width > 800) {
        return {
            // height: 400,
            // width: 300,
            // scale: 1500,
            center: [-21, 38]
        };
    } else if (width > 600) {
        return {
            // height: 400,
            // width: 300,
            // scale: 1000,
            center: [-21, 40]
        };
    } else {
        return {
            // height: 400,
            // width: 300,
            // scale: 1000,
            center: [-22, 41]
        };
    }
}

const MapChart = () => {
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

  const scaleParameters = useMemo(() => {
    try {
        return sizeScale(window.screen.width);
    } catch (e) {
        return sizeScale(1000);
    }
  });
    // console.log({ data: (data ?? []).filter(county => county?.state_id === 'CA' || county?.state_id === 'NV') })
  return (
      <ComposableMap
        data-tip=""
        width={240}
        height={240}
        // projectionConfig={{
        //   center: [-20, 34.9],
        //   scale: 3800
        // }}
        projectionConfig={{
            // rotate: [0, 0, 0],
            center: scaleParameters.center,
            // scale: 750
            // scale: 1500
        }}
        projection="geoAlbers"
      >
        {/* <ZoomableGroup
            zoom={1}
            onMove={({ x, y, k, dragging }) => {
                console.log(x, y, k, dragging)
            }}
        > */}
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const cur = data.find((s) => s.id === geo.id);
                return (cur?.state_id === 'CA' || cur?.state_id === 'NV') ? (
                    <Geography
                        stroke="rgb(127,127,127)"
                        strokeWidth={0.25}
                        data-tooltip-id={'county-geo'}
                        data-tooltip-content={`${cur ? cur.name : ''}, ${cur ? cur.state_id : ''} — ${
                            cur ? cur.population : ''
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
                                fill: (cur && cur.main) ? colorScale(cur ? cur.population : "#EEE") : (cur && (cur.state_id === 'CA' || cur.state_id === 'NV')) ? 'rgb(235,235,235)' : "#D6D6DA",
                                outline: "none"
                            },
                            hover: {
                                fill: (cur && cur.main) ? colorScaleHover(cur ? cur.population : "#EEE") : (cur && (cur.state_id === 'CA' || cur.state_id === 'NV')) ? 'rgb(247,247,247)' : '#EEE',
                                outline: "none"
                            },
                            pressed: {
                                fill: "#00a4b7",
                                outline: "none"
                            }
                        }}
                    />
                ) : null;
              })
            }
          </Geographies>
        {/* </ZoomableGroup> */}
      </ComposableMap>
  );
};

export default MapChart;