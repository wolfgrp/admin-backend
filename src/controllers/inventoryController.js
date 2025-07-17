import { fetchInventory, updateInventoryStock } from "../services/sheetService.js";

export const getInventory = async (req, res) => {
  const data = await fetchInventory();
  res.json(data);
};

export const updateStock = async (req, res) => {
  const { report } = req.body;
  await updateInventoryStock(report);
  res.json({ success: true });
};
