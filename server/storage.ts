import { 
  users, 
  type User, 
  type InsertUser,
  products,
  type Product,
  type InsertProduct,
  waitlist,
  type Waitlist,
  type InsertWaitlist,
  contacts,
  type Contact,
  type InsertContact
} from "@shared/schema";

// Default products to initialize storage with
const defaultProducts = [
  {
    name: "MasterGraze Premium",
    price: "$45.99",
    description: "Our flagship feed formula, designed for optimal cattle growth and weight gain with balanced nutrients.",
    image: "https://images.unsplash.com/photo-1595872883741-8e17d5f84bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    tags: ["High Protein", "Vitamins", "Minerals"]
  },
  {
    name: "CalfStart Formula",
    price: "$52.99",
    description: "Specialized nutrition for young calves, supporting immune development and early growth stages.",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    tags: ["Immune Support", "Growth", "Digestive Health"]
  },
  {
    name: "ProducerPlus",
    price: "$48.99",
    description: "Advanced formula for dairy cattle, enhancing milk production while maintaining optimal health.",
    image: "https://images.unsplash.com/photo-1529756148791-fbf30a8a1245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["Milk Production", "Calcium", "Energy"]
  }
];

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Product methods
  getAllProducts(): Promise<Product[]>;
  getProductById(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Waitlist methods
  addToWaitlist(entry: InsertWaitlist & { createdAt: string }): Promise<Waitlist>;
  getWaitlistEntries(): Promise<Waitlist[]>;
  
  // Contact methods
  addContact(contact: InsertContact & { createdAt: string }): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private products: Map<number, Product>;
  private waitlistEntries: Map<number, Waitlist>;
  private contactMessages: Map<number, Contact>;
  
  private currentUserId: number;
  private currentProductId: number;
  private currentWaitlistId: number;
  private currentContactId: number;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.waitlistEntries = new Map();
    this.contactMessages = new Map();
    
    this.currentUserId = 1;
    this.currentProductId = 1;
    this.currentWaitlistId = 1;
    this.currentContactId = 1;
    
    // Initialize with default products
    this.initDefaultProducts();
  }

  private initDefaultProducts() {
    defaultProducts.forEach(product => {
      this.createProduct(product);
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Product methods
  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }
  
  async getProductById(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }
  
  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }
  
  // Waitlist methods
  async addToWaitlist(entry: InsertWaitlist & { createdAt: string }): Promise<Waitlist> {
    const id = this.currentWaitlistId++;
    
    // Create a proper Waitlist entry with all required fields
    const waitlistEntry: Waitlist = { 
      id,
      fullName: entry.fullName,
      email: entry.email,
      farmName: entry.farmName,
      herdSize: entry.herdSize,
      details: entry.details || null,
      agreesToTerms: entry.agreesToTerms || false,
      createdAt: entry.createdAt
    };
    
    this.waitlistEntries.set(id, waitlistEntry);
    return waitlistEntry;
  }
  
  async getWaitlistEntries(): Promise<Waitlist[]> {
    return Array.from(this.waitlistEntries.values());
  }
  
  // Contact methods
  async addContact(contact: InsertContact & { createdAt: string }): Promise<Contact> {
    const id = this.currentContactId++;
    const contactEntry: Contact = { 
      id,
      name: contact.name,
      email: contact.email,
      phone: contact.phone || null,
      company: contact.company || null,
      message: contact.message,
      createdAt: contact.createdAt
    };
    this.contactMessages.set(id, contactEntry);
    return contactEntry;
  }
  
  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contactMessages.values());
  }
}

export const storage = new MemStorage();
