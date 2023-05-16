import { Theme } from '@nivo/core';

export const theme: Theme = {
  axis: {
    domain: {
      line: {
        strokeWidth: 0,
        stroke: '#526271',
      },
    },
    ticks: {
      line: {
        strokeWidth: 1,
        stroke: '#526271',
      },
      text: {
        fill: '#8d9cab',
        fontSize: 11,
      },
    },
    legend: {
      text: {
        fill: '#ccd7e2',
        fontSize: 13,
        fontWeight: 500,
      },
    },
  },
  grid: {
    line: {
      stroke: '#444',
    },
  },
  tooltip: {
    container: {
      color: 'black',
    },
  },
};
