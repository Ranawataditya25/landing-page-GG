import { contacts, referrals, newsletters, type Contact, type InsertContact, type Referral, type InsertReferral, type Newsletter, type InsertNewsletter } from "@shared/schema";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  createReferral(referral: InsertReferral): Promise<Referral>;
  createNewsletterSubscription(newsletter: InsertNewsletter): Promise<Newsletter>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private referrals: Map<number, Referral>;
  private newsletters: Map<number, Newsletter>;
  private currentContactId: number;
  private currentReferralId: number;
  private currentNewsletterId: number;

  constructor() {
    this.contacts = new Map();
    this.referrals = new Map();
    this.newsletters = new Map();
    this.currentContactId = 1;
    this.currentReferralId = 1;
    this.currentNewsletterId = 1;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async createReferral(insertReferral: InsertReferral): Promise<Referral> {
    const id = this.currentReferralId++;
    const referral: Referral = {
      ...insertReferral,
      id,
      createdAt: new Date(),
    };
    this.referrals.set(id, referral);
    return referral;
  }

  async createNewsletterSubscription(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const existingSubscription = Array.from(this.newsletters.values()).find(
      subscription => subscription.email === insertNewsletter.email
    );
    
    if (existingSubscription) {
      throw new Error("Email already subscribed");
    }

    const id = this.currentNewsletterId++;
    const newsletter: Newsletter = {
      ...insertNewsletter,
      id,
      createdAt: new Date(),
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }
}

export const storage = new MemStorage();
