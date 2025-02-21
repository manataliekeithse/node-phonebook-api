import express from "express";
import {
  getAllContacts,
  getContactById,
  addContact,
  deleteContact,
  updateContact,
} from "../../controllers/contactsController.js";
import { authenticateToken } from "../../middlewares/auth.js"; // Import the authenticateToken middleware

const router = express.Router();

// corresponds to listContacts
/**
 * /api/contacts:
 *  get:
 *   summary: Retrieve a list of contacts
 *   tags: [Contacts]
 *   parameters:
 *     - name: contactId
 *       in: path
 *       required: true
 *       description: ID of the contact to retrieve
 *       schema:
 *        type: string
 *   responses:
 *     200:
 *      description: Successfully retrieved list of contacts
 *      content:
 *       application/json:
 *       schema:
 *         type: array
 *         items:
 *           $ref:'#/components/schemas/Contact'
 */

router.get("/", authenticateToken, getAllContacts);

// corresponds to getContactById
router.get("/:contactId", authenticateToken, getContactById);

// corresponds to addContact
router.post("/", authenticateToken, addContact);

// corresponds to removeContact
router.delete("/:contactId", authenticateToken, deleteContact);

// corresponds to updateContact
router.put("/:contactId", authenticateToken, updateContact);

export { router };
