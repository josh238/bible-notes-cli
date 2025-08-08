# 📖 Bible Note CLI App (Node.js)

A simple Command-Line Interface (CLI) application that allows users to save Bible verses directly through the terminal into a `.txt` file using Node.js.

---

## 🚀 Features

- Add Bible verses using terminal commands
- Save verses to a `notes.txt` file
- Automatically appends new verses on a new line
- (Upcoming): View all saved verses with `list` command

---

## 📦 Technologies Used

- **Node.js** – JavaScript runtime for building the app
- **fs module** – for writing to and reading from files
- **Terminal (CLI)** – for input/output interaction

---

## 🧠 What I Learned

### `process.argv`
- This is an array of all terminal arguments passed to the Node script.
- `process.argv[2]` captures the user command (e.g., `add`)
- `process.argv.slice(3).join(' ')` captures the full verse, even if it includes spaces

### `fs.appendFile()`
- Appends content to a file (creates it if it doesn’t exist)
- Does **not** overwrite previous content
- I used `\n` to ensure each verse is saved on a new line

---

## 💻 How to Use

1. Clone the repo:
   ```bash
   git clone https://github.com/YOUR_USERNAME/bible-notes-cli.git
Navigate into the project folder:

bash
Copy
Edit
cd bible-notes-cli
Run the app:

bash
Copy
Edit
node app.js add "John 3:16 - For God so loved the world..."
Check notes.txt — it will contain the saved verse.

📌 Example
bash
Copy
Edit
node app.js add "Psalm 23:1 - The Lord is my shepherd"
Output:

Copy
Edit
✅ Verse saved successfully.
Result in notes.txt:

csharp
Copy
Edit
John 3:16 - For God so loved the world...
Psalm 23:1 - The Lord is my shepherd
🛠 Upcoming Features
list command: show all saved verses

delete command: remove a verse

Move to file-based JSON or real database (MongoDB/MySQL)

Convert to REST API for frontend/mobile app

👨‍💻 Author
Jshua Adelere
Backend Engineer in training | Faith-based Software Developer
📌 LinkedIn
🐦 Twitter
💻 GitHub