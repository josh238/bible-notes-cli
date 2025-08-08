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
   `git clone https://github.com/YOUR_USERNAME/bible-notes-cli.git`

2. Navigate into the project folder:

cd bible-notes-cli
Run the app:


node app.js add "John 3:16 - For God so loved the world..."
Check notes.txt — it will contain the saved verse.

📌 Example

node app.js add "Psalm 23:1 - The Lord is my shepherd"
Output:


✅ Verse saved successfully.
Result in notes.txt:


John 3:16 - For God so loved the world...
Psalm 23:1 - The Lord is my shepherd

## 🛠 Upcoming Features
list command: show all saved verses

delete command: remove a verse

Move to file-based JSON or real database (MongoDB/MySQL)

Convert to REST API for frontend/mobile app

## 👨‍💻 Author
- Joshua Adelere
- Backend Engineer in training | Faith-based Software Developer
- 📌 LinkedIn
- 🐦 Twitter
- 💻 GitHub

## 🧠 Why I'm Building This
I'm on a 6-month mission to master backend development using Node.js, JavaScript, and databases — starting from the ground up. I'm learning deeply, building intentionally, and documenting everything along the way.

This is the first of many projects in my faith-based developer journey. ✝️