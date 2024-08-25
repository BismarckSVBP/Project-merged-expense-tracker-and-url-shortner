const UI = require("../models/expenseui");

async function handleUI(req, res) {
  const body = req.body;
  if (!body.expenseamount | !body.incomeamount) return res.status(400).json({ Error: "Entering expenseamount & incomeamount is required" });
 
  await UI.create({
    uname:body.uname,
    expenseamount: body.expenseamount,
    incomeamount: body.incomeamount,
    expensedescription: body.expensedescription,
    expensecategory: body.expensecategory,
    createdBy:req.user._id
  })
  // const data = await UI.find({});
  // return res.render("expanse", {
  //   det: data,
  // });
  // res.json({
  //   det: data,
  //      });
  return res.render("expense");
  // return res.end("Return the previous page & refresh the page you will get the your previous expanse track.",
    //  );
}


module.exports = {
  handleUI,
 
};


