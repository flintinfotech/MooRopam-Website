import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema, insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get API_URL from environment or default to /api
  const API_URL = process.env.API_URL || '/api';
  console.log(`API URL: ${API_URL}`);
  
  // Products API
  app.get(`${API_URL}/products`, async (req, res) => {
    try {
      const products = await storage.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });

  // Waitlist API
  app.post(`${API_URL}/waitlist`, async (req, res) => {
    try {
      const waitlistData = insertWaitlistSchema.parse(req.body);
      
      // Add timestamp
      const waitlistEntry = {
        ...waitlistData,
        createdAt: new Date().toISOString()
      };
      
      const result = await storage.addToWaitlist(waitlistEntry);
      res.status(201).json({ message: "Successfully added to waitlist", id: result.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Failed to add to waitlist" });
      }
    }
  });

  // Contact API
  app.post(`${API_URL}/contacts`, async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      
      // Add timestamp
      const contactEntry = {
        ...contactData,
        createdAt: new Date().toISOString()
      };
      
      const result = await storage.addContact(contactEntry);
      res.status(201).json({ message: "Message sent successfully", id: result.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Failed to send message" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
