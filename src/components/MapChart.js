import React, { useState, useEffect, useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";
import { scaleQuantize } from "d3-scale";
import { csv } from "d3-fetch";
import { censusData } from '../cms/census';

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
            center: [-19, 35]
        };
    } else if (width > 2500) {
        return {
            // height: 400,
            // width: 300,
            scale: 1225,
            center: [-20, 39]
        };
        
    } else if (width > 2400) {
        return {
            // height: 400,
            // width: 300,
            scale: 1200,
            center: [-22, 39]
        };
        
    } else if (width > 2200) {
        return {
            // height: 400,
            // width: 300,
            scale: 1250,
            center: [-22, 39]
        };
        
    } else if (width > 2000) {
        return {
            // height: 400,
            // width: 300,
            scale: 1250,
            center: [-21, 38.5]
        };
        
    } else if (width > 1800) {
        return {
            // height: 400,
            // width: 300,
            scale: 1300,
            center: [-22, 38.5]
        };
        
    } else if (width > 1600) {
        return {
            // height: 400,
            // width: 300,
            scale: 1300,
            center: [-22, 38.5]
        };
        
    } else if (width > 1400) {
        return {
            // height: 400,
            // width: 300,
            scale: 1300,
            center: [-22, 38.5]
        };
        
    } else if (width > 1300) {
        return {
            // height: 400,
            // width: 300,
            // scale: 500,
            scale: 1400,
            center: [-22.5, 38.5]
        };
    } else if (width > 1200) {
        return {
            // height: 400,
            // width: 300,
            // scale: 500,
            scale: 1400,
            center: [-22.5, 38.5]
        };
    } else if (width > 1000) {
        return {
            // height: 400,
            // width: 300,
            scale: 1500,
            center: [-22, 38.25]
        };
    } else if (width > 924) {
        return {
            // height: 400,
            // width: 300,
            scale: 1550,
            center: [-22, 38.5]
        };
    } else if (width > 800) {
        return {
            // height: 400,
            // width: 300,
            scale: 1250,
            center: [-22.5, 39]
        };
    } else if (width > 600) {
        return {
            // height: 400,
            // width: 300,
            scale: 1250,
            center: [-23, 38.5]
        };
    } else if (width > 500) {
        return {
            // height: 400,
            // width: 300,
            scale: 1250,
            center: [-21, 38.5]
        };
    } else if (width > 400) {
        return {
            // height: 400,
            // width: 300,
            scale: 1250,
            center: [-23, 38.5]
        };
    } else if (width > 300) {
        return {
            // height: 400,
            // width: 300,
            scale: 1250,
            center: [-22, 39]
        };
    } else {
        return {
            // height: 400,
            // width: 300,
            // scale: 1000,
            center: [-20, 41]
        };
    }
}

const populationTextFormatter = (str) => {
    try {
        if (Number(str)) {
            return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
            return '';
        }
    } catch (e) {
        return '';
    }
}

const MapChart = (props) => {
  const scaleParameters = useMemo(() => {
    try {
        return sizeScale(props.widthScale);
    } catch (e) {
        return sizeScale(1000);
    }
  });

  return (
      <ComposableMap
        data-tip=""
        width={225}
        height={225}
        // projectionConfig={{
        //   center: [-20, 34.9],
        //   scale: 3800
        // }}
        projectionConfig={{
            // rotate: [0, 0, 0],
            center: scaleParameters.center,
            scale: scaleParameters.scale ?? 1000
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
                const cur = censusData[geo.id]
                // const cur = data.find((s) => s.id === geo.id);
                // if (cur?.state_id) {
                //     console.log({ cur })
                // }
                return (cur?.state_id === 'CA' || cur?.state_id === 'NV') ? (
                    <Geography
                        stroke="rgb(157,157,157)"
                        strokeWidth={0.25}
                        data-tooltip-id={'county-geo'}
                        data-tooltip-html={`<div class="hover-tooltip-container"><b>${cur ? cur.name : ''}, ${cur ? cur.state_id : ''} </b><br /><p class="population-text">Population: ${
                            cur ? populationTextFormatter(cur.population) : ''
                        }</p></div>`}
                        // data-tooltip-content={`${cur ? cur.name : ''}, ${cur ? cur.state_id : ''} — pop. ${
                        //     cur ? cur.population : ''
                        // }`}
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
                                fill: (cur && cur.main) ? colorScale(cur ? cur.population : "#EEE") : (cur && (cur.state_id === 'CA' || cur.state_id === 'NV')) ? 'rgba(0,0,0,0)' : "#D6D6DA",
                                outline: "none"
                            },
                            hover: {
                                fill: (cur && cur.main) ? colorScaleHover(cur ? cur.population : "#EEE") : (cur && (cur.state_id === 'CA' || cur.state_id === 'NV')) ? 'rgba(0,0,0,0)' : '#EEE',
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