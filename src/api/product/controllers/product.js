"use strict";

/**
 * product controller
 */

const createMedusaDefaultController =
  require("../../../utils/utils").createMedusaDefaultController;
const uid = "api::product.product";
module.exports = createMedusaDefaultController(uid);
