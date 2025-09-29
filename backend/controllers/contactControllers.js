import Contact from "../models/Contact.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body; 

    if (!name || !email || !mobile || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMessage = new Contact({ name, email, mobile, message }); 
    await newMessage.save();

    res.status(201).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact POST error:", error); 
    res.status(500).json({ error: "Server error" });
  }
};
