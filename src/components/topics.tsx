import React, { useState } from "react";
// import "./styles/TabbedGrid.css"; // Import CSS from the "styles" folder
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

// Define types for the link data
interface Link {
  title: string;
  text?: string; // Text is now optional
  url?: string; // Optional URL for the link
}

interface TabData {
  [key: string]: Link[];
}

const TabbedGrid = () => {
  const [activeTab, setActiveTab] = useState("Privatpersonen");

  const tabData: TabData = {
    Privatpersonen: [
      {
        title: "Privatpersonen, Ausweise & Dokumente",
        text: "Pass, ID, Führerausweis, Beglaubigungen...",
        url: "#",
      },
      {
        title: "Kinder, Jugendliche & Familien",
        text: "Angebote, Unterstützung, Beratung...",
        url: "#",
      },
      {
        title: "Alter, Gesundheit & Soziales",
        text: "Für Seniorinnen und Senioren, Gesundheitsfragen...",
        url: "#",
      },
      {
        title: "Arbeit & Steuern",
        text: "Informationen zu Steuern, Arbeitsbewilligungen...",
        url: "#",
      },
      {
        title: "Bildung & Schule",
        text: "Kindergarten, Primarschule, Weiterbildung...",
        url: "#",
      },
      {
        title: "Freizeit, Sport &Kultur",
        text: "Veranstaltungen, Vereine, Museen...",
        url: "#",
      },
      {
        title: "Planen & Bauen",
        text: "Baubewilligungen, Zonenpläne, Energie...",
        url: "#",
      },
      {
        title: "Sicherheit, Verkehr & Mobilität",
        text: "Polizei, Feuerwehr, Strassenverkehr...",
        url: "#",
      },
      {
        title: "Klima, Umwelt & Natur",
        text: "Nachhaltigkeit, Abfallentsorgung, Naturschutz...",
        url: "#",
      },
    ],
    Unternehmen: [
      { title: "Link 2A", text: "Details for Link 2A.", url: "#" },
      { title: "Link 2B", text: "More info about Link 2B.", url: "#" },
      { title: "Link 2C", text: "Content concerning Link 2C.", url: "#" },
      { title: "Link 2D", text: "Information about Link 2D.", url: "#" },
      { title: "Link 2E", text: "Further details on Link 2E.", url: "#" },
      { title: "Link 2F", text: "Description of Link 2F.", url: "#" },
      { title: "Link 2G", text: "Explanation for Link 2G." },
      { title: "Link 2H", text: "Additional details for Link 2H." },
      { title: "Link 2I", text: "The specifics of Link 2I." },
    ],
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tabbed-grid-container">
      <div className="wrap">
      <div className="tabs">
        <button
          className={activeTab === "Privatpersonen" ? "active" : ""}
          onClick={() => handleTabClick("Privatpersonen")}
        >
          Privatpersonen
        </button>
        <button
          className={activeTab === "Unternehmen" ? "active" : ""}
          onClick={() => handleTabClick("Unternehmen")}
        >
          Unternehmen
        </button>
      </div>

      <div className="tab-content">
        {tabData[activeTab] && (
          <div className="grid-container">
            {tabData[activeTab].map((link: Link, index: number) => (
              <a
                key={index}
                href={link.url || "#"}
                className="grid-item"
                target={link.url ? "_self" : undefined}
                rel={link.url ? "noopener noreferrer" : undefined}
              >
                <h3>{link.title}</h3>
                {link.text && <p>{link.text}</p>}{" "}
                {/* Conditionally render text */}
                <div className="link-icon">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default TabbedGrid;
