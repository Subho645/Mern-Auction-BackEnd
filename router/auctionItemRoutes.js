import {
    addNewAuctionItem,getAllItems,getMyAuctionItems,getAuctionDetails,removeFromAuction,republishItem
  } from "../controllers/auctionItemController.js";
  import { isAuthenticated,isAuthorized } from "../middlewares/auth.js";
  import { trackCommissionStatus } from "../middlewares/trackCommissionStatus.js";

  import express from "express";

  
  const router = express.Router();
  
  router.post( "/create",isAuthenticated,isAuthorized("Auctioneer"),trackCommissionStatus,addNewAuctionItem );
  router.get("/auction/:id", isAuthenticated, getAuctionDetails);
  router.get("/allitems", getAllItems);
  router.get(
    "/myitems",
    isAuthenticated,
    isAuthorized("Auctioneer"),
    getMyAuctionItems
  );
  router.delete(
    "/delete/:id",
    isAuthenticated,
    isAuthorized("Auctioneer"),
    removeFromAuction
  );
  router.put(
    "/item/republish/:id",
    isAuthenticated,
    isAuthorized("Auctioneer"),
    republishItem
  );
  export default router;