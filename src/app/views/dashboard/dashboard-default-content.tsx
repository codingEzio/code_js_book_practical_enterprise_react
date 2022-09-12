import React, { useEffect, useState } from 'react';

import { getSalesAxios } from 'services/saleService';
import { SaleType } from 'models/sale-type';

const DashboardDefaultContent = () => {
  const [sales, setSales] = useState<SaleType[]>([]);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    const { data } = await getSalesAxios();

    setSales(data);
    console.log(data);
  };

  return (
    <div>
      <h1>DashboardDefaultContent</h1>
      <h2>{sales.length}</h2>
    </div>
  );
};

export default DashboardDefaultContent;
