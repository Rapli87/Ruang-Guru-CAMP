function salesReport(data, correction) {
  const salesNames = ["Adi", "Budi", "Poltak", "Sri", "Udin"];
  const salesData = {
    Adi: 0,
    Budi: 0,
    Poltak: 0,
    Sri: 0,
    Udin: 0,
  };
  let monthlySales = 0;

  function rekapSalesByName() {
    data.forEach((sales) => {
      salesData[sales.salesName] += sales.totalSales;
    });
  }

  rekapSalesByName();
  monthlySales = Object.values(salesData).reduce(
    (total, sales) => total + sales,
    0
  );

  correction.forEach((item) => {
    if (item.type === "tambah") {
      salesData[item.salesName] += item.totalSales;
      monthlySales += item.totalSales;
      data.push({
        salesName: item.salesName,
        salesDate: item.salesDate,
        totalSales: item.totalSales,
      });
    } else {
      const index = data.findIndex(
        (sales) =>
          sales.salesName === item.salesName &&
          sales.salesDate === item.salesDate
      );
      if (index !== -1 && data[index]) {
        salesData[item.salesName] += item.totalSales - data[index].totalSales;
        monthlySales += item.totalSales - data[index].totalSales;
        data[index].totalSales = item.totalSales;
      } else {
        console.log("Data not found");
      }
    }
  });

  const bestSales = Object.keys(salesData).reduce((a, b) =>
    salesData[a] > salesData[b] ? a : b
  );

  return {
    monthlySales,
    totalSalesByName: Object.fromEntries(Object.entries(salesData).sort()),
    bestSalesman: `Penjualan terbanyak dilakukan oleh ${bestSales} dengan total penjualan dalam 1 bulan sebesar ${salesData[bestSales]}`,
  };
}

module.exports = {
  salesReport,
};
