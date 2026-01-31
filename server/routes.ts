import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      
      // 1. Store submission
      await storage.createContactSubmission(input);
      
      // 2. Send email via SMTP
      // Note: In a real environment, these credentials should be environment variables.
      // We will check for them, or log if missing.
      const smtpHost = process.env.SMTP_HOST;
      const smtpPort = parseInt(process.env.SMTP_PORT || '587');
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;
      const emailTo = process.env.EMAIL_TO || smtpUser; // Default to sending to oneself if not specified

      if (smtpHost && smtpUser && smtpPass) {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465, // true for 465, false for other ports
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Aadesh Impex Website" <${smtpUser}>`,
          to: emailTo,
          subject: `New Contact Inquiry: ${input.subject}`,
          text: `
            Name: ${input.name}
            Email: ${input.email}
            Phone: ${input.phone}
            Subject: ${input.subject}
            
            Message:
            ${input.message}
          `,
          html: `
            <h3>New Contact Inquiry</h3>
            <p><strong>Name:</strong> ${input.name}</p>
            <p><strong>Email:</strong> ${input.email}</p>
            <p><strong>Phone:</strong> ${input.phone}</p>
            <p><strong>Subject:</strong> ${input.subject}</p>
            <br/>
            <p><strong>Message:</strong></p>
            <p>${input.message.replace(/\n/g, '<br>')}</p>
          `,
        });
        console.log("Email sent successfully");
      } else {
        console.warn("SMTP credentials not provided. Email not sent.");
        console.log("Contact Submission:", input);
      }

      res.json({ success: true, message: "Message sent successfully" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({
          message: "Invalid input",
          field: err.errors[0].path.join('.'),
        });
      } else {
        console.error("Contact submission error:", err);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  return httpServer;
}
