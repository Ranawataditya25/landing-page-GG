import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertReferralSchema, insertNewsletterSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, message: "Thank you for contacting us. Our team will reach out shortly.", contact });
    } catch (error) {
      console.error("Contact submission error:", error);
      res.status(400).json({ success: false, message: "Failed to submit contact form. Please try again." });
    }
  });

  // Referral submission
  app.post("/api/referral", async (req, res) => {
    try {
      const referralData = insertReferralSchema.parse(req.body);
      const referral = await storage.createReferral(referralData);
      res.json({ success: true, message: "Referral sent successfully! You will earn ₹500 when your friend joins.", referral });
    } catch (error) {
      console.error("Referral submission error:", error);
      res.status(400).json({ success: false, message: "Failed to submit referral. Please try again." });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const newsletterData = insertNewsletterSchema.parse(req.body);
      const subscription = await storage.createNewsletterSubscription(newsletterData);
      res.json({ success: true, message: "Thank you for subscribing to our newsletter!", subscription });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      res.status(400).json({ success: false, message: "Failed to subscribe. Please try again." });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
