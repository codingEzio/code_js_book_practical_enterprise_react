import React, { useEffect, useState } from 'react';

import { Theme, useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

import { getSalesAxios } from 'services/saleService';
import { SaleType } from 'models/sale-type';

const useStyles = makeStyles(() => ({
  root: { minHeight: '100%' },
}));

const getChartStyling = (theme: Theme) => ({
  chart: {
    background: theme.palette.background.paper,
    toolbar: { show: false },
  },
  colors: ['#13affe', '#fbab49'],
  dataLabels: { enabled: false },
  grid: {
    borderColor: theme.palette.divider,
    yaxis: { lines: { show: false } },
  },
  legend: {
    show: true,
    labels: { colors: theme.palette.text.secondary },
  },
  plotOptions: { bar: { columnWidth: '40%' } },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  theme: {
    mode: theme.palette.type,
  },
  tooltip: {
    theme: theme.palette.type,
  },
  xaxis: {
    axisBorder: {
      show: true,
      color: theme.palette.divider,
    },
    axisTicks: {
      show: true,
      color: theme.palette.divider,
    },
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    labels: {
      style: {
        colors: theme.palette.text.secondary,
      },
    },
  },
  yaxis: {
    axisBorder: {
      show: true,
      color: theme.palette.divider,
    },
    axisTicks: {
      show: true,
      color: theme.palette.divider,
    },
    lables: {
      style: {
        colors: theme.palette.text.secondary,
      },
    },
  },
});

const DashboardDefaultContent = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [sales, setSales] = useState<SaleType[]>([]);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    const { data } = await getSalesAxios();

    setSales(data);
  };

  return (
    <div>
      <h1>DashboardDefaultContent</h1>
    </div>
  );
};

export default DashboardDefaultContent;
