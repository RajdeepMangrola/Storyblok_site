# 🚀 Storyblok React Site

A modern, dynamic website built with **React**, **Storyblok (Headless CMS)**, and **Framer Motion**. This project demonstrates a seamless integration between a powerful CMS and a high-performance frontend, featuring smooth route transitions and responsive design.

Link: https://rajdeeptask1devfinal.netlify.app/about

## ✨ Features

* **Dynamic CMS Integration:** All content (Pages, Grids, Features, Teasers) is managed via Storyblok.
* **Smooth Animations:** Utilizes `framer-motion` for elegant page transitions and UI interactions.
* **Fully Responsive:** Custom CSS optimized for desktop, tablet, and mobile devices.
* **Live Preview:** Real-time content editing using the Storyblok Visual Editor.
* **Clean Architecture:** Separated logic and styling for better maintainability.

## 🛠️ Tech Stack

* **Frontend:** [React](https://reactjs.org/)
* **CMS:** [Storyblok](https://www.storyblok.com/)
* **Routing:** [React Router](https://reactrouter.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Styling:** Pure CSS (Centralized in `App.css`)

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v14 or higher)
* A Storyblok account and a Space created.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/RajdeepMangrola/Storyblok_site.git
    cd Storyblok_site
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Setup Environment Variables:**
    Create a `.env` file in the root directory and add your Storyblok Access Token:
    ```env
    REACT_APP_STORYBLOK_TOKEN=your_preview_token_here
    ```

4.  **Run the application:**
    ```bash
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📂 Project Structure

```text
src/
├── components/      # Storyblok components (About, Feature, Grid, Teaser, etc.)
├── App.js           # Main application logic & Framer Motion setup
├── App.css          # Centralized global & component styling
├── index.js         # Entry point & Storyblok initialization
└── ...
