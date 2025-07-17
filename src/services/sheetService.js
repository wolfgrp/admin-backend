export const fetchInventory = async () => {
  return [
    { item: "Notebook", qty: 1200 },
    { item: "Pen", qty: 800 }
  ];
};

export const updateInventoryStock = async (report) => {
  console.log("Updating stock with report:", report);
};
