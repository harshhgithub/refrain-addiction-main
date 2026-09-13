import React, { useRef, useState } from "react";
import "./Testbuttons.scss";
import axios from "axios";
import fileDownload from "js-file-download";

const url = "http://localhost:8000/api/routes";

let web_set = new Set();
let boolArr = [false, false, false, false, false, false, false, false, false];

function Testbuttons() {
  const [classname0, setClassname0] = useState("white");
  const [classname1, setClassname1] = useState("white");
  const [classname2, setClassname2] = useState("white");
  const [classname3, setClassname3] = useState("white");
  const [classname4, setClassname4] = useState("white");
  const [classname5, setClassname5] = useState("white");
  const [classname6, setClassname6] = useState("white");
  const [classname7, setClassname7] = useState("white");
  const [classname8, setClassname8] = useState("white");

  const [downloadMessage, setDownloadMessage] = useState(
    "Create and Download File"
  );

  const websiteAdd = (i, element) => {
    if (boolArr[i] === false) {
      web_set.add(element);
      boolArr[i] = true;
    } else {
      web_set.delete(element);
      boolArr[i] = false;
    }

    console.log(web_set);
  };

  function buttonUpdate(i) {
    switch (i) {
      case 0:
        setClassname0(classname0 === "white" ? "orange" : "white");
        break;

      case 1:
        setClassname1(classname1 === "white" ? "orange" : "white");
        break;

      case 2:
        setClassname2(classname2 === "white" ? "orange" : "white");
        break;

      case 3:
        setClassname3(classname3 === "white" ? "orange" : "white");
        break;

      case 4:
        setClassname4(classname4 === "white" ? "orange" : "white");
        break;

      case 5:
        setClassname5(classname5 === "white" ? "orange" : "white");
        break;

      case 6:
        setClassname6(classname6 === "white" ? "orange" : "white");
        break;

      case 7:
        setClassname7(classname7 === "white" ? "orange" : "white");
        break;

      case 8:
        setClassname8(classname8 === "white" ? "orange" : "white");
        break;

      default:
        console.log("error");
    }
  }

  const add_web = (i, element) => {
    websiteAdd(i, element);
    buttonUpdate(i);
  };

  const inputText = useRef(null);

  const addCustomUrl = () => {
    const value = inputText.current.value.trim();

    if (!value) return;

    if (value.includes(".")) {
      let urlValue = value;

      let urlArr = urlValue.split("/");

      let websiteArr;

      if (urlArr.length > 2 && urlArr[2]) {
        websiteArr = urlArr[2].split(".");
      } else {
        websiteArr = urlValue.split(".");
      }

      if (websiteArr.length === 2) {
        web_set.add(websiteArr[0]);
      } else {
        web_set.add(websiteArr[1]);
      }
    } else {
      web_set.add(value);
    }

    inputText.current.value = "Input Received";

    setTimeout(() => {
      inputText.current.value = "";
    }, 2000);
  };

  // Existing download functionality
  const on_createfile = async (e) => {
  e.preventDefault();

  const arr = Array.from(web_set);

  if (arr.length === 0) {
    setDownloadMessage("Select at least one website");

    setTimeout(() => {
      setDownloadMessage("Create and Download File");
    }, 2000);

    return;
  }

  try {
    setDownloadMessage("Creating blocker...");

    const response = await axios.post(
      url,
      {
        web_arr: arr,
      },
      {
        responseType: "blob",
      }
    );

    /*
      Create a downloadable ZIP file
    */
    fileDownload(
      response.data,
      "refrain-website-blocker.zip"
    );

    /*
      Clear selected websites
    */
    web_set.clear();

    /*
      Reset UI
    */
    setDownloadMessage("Download started");

    setTimeout(() => {
      setDownloadMessage("Create and Download File");
    }, 2000);

  } catch (error) {

    console.error(
      "Website blocker error:",
      error
    );

    setDownloadMessage(
      "Failed to create blocker"
    );

    setTimeout(() => {
      setDownloadMessage(
        "Create and Download File"
      );
    }, 3000);
  }

  /*
    Reset selected button states
  */
  setClassname0("white");
  setClassname1("white");
  setClassname2("white");
  setClassname3("white");
  setClassname4("white");
  setClassname5("white");
  setClassname6("white");
  setClassname7("white");
  setClassname8("white");

  boolArr = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ];
};
        

  const websites = [
    {
      name: "YouTube",
      value: "youtube",
      id: 0,
      className: classname0,
    },
    {
      name: "Facebook",
      value: "facebook",
      id: 1,
      className: classname1,
    },
    {
      name: "Discord",
      value: "discord",
      id: 2,
      className: classname2,
    },
    {
      name: "Instagram",
      value: "instagram",
      id: 3,
      className: classname3,
    },
    {
      name: "Prime Video",
      value: "primevideo",
      id: 4,
      className: classname4,
    },
    {
      name: "Hotstar",
      value: "hotstar",
      id: 5,
      className: classname5,
    },
    {
      name: "Netflix",
      value: "netflix",
      id: 6,
      className: classname6,
    },
    {
      name: "Voot",
      value: "voot",
      id: 7,
      className: classname7,
    },
    {
      name: "Sony LIV",
      value: "sonyliv",
      id: 8,
      className: classname8,
    },
  ];

  return (
    <div className="blocker-page" id="download">

      <div className="blocker-container">

        {/* Header */}
        <div className="blocker-header">

          <div className="blocker-eyebrow">
            WEBSITE BLOCKER
          </div>

          <h1>
            Select Websites to Block
          </h1>

          <p>
            Choose the websites you want to restrict and create your
            personalized browser extension.
          </p>

        </div>

        {/* Website Selection */}
        <div className="website-card">

          <div className="card-heading">

            <div>
              <h2>
                Popular Websites
              </h2>

              <p>
                Select one or more websites
              </p>
            </div>

            <span className="selection-info">
              9 options
            </span>

          </div>

          <div className="buttons">

            {websites.map((website) => (
              <button
                key={website.value}
                onClick={() => add_web(website.id, website.value)}
                className={`website-button ${website.className}`}
              >
                <span className="website-number">
                  {String(website.id + 1).padStart(2, "0")}
                </span>

                <span>
                  {website.name}
                </span>

                {website.className === "orange" && (
                  <span className="selected-mark">
                    ✓
                  </span>
                )}
              </button>
            ))}

          </div>

          {/* Custom URL */}
          <div className="custom-url-section">

            <div className="custom-heading">
              <div>
                <h3>
                  Add another website
                </h3>

                <p>
                  Enter a website name or URL
                </p>
              </div>
            </div>

            <div className="custom-url-div">

              <input
                type="text"
                id="custom_url"
                ref={inputText}
                placeholder="Enter website name or URL"
              />

              <button
                onClick={addCustomUrl}
                id="custom_url_add_button"
              >
                Add Website
              </button>

            </div>

          </div>

          {/* Download */}
          <div className="download-section">

            <div className="download-info">

              <div className="download-icon">
                ↓
              </div>

              <div>
                <h3>
                  Create your blocker
                </h3>

                <p>
                  Your extension will be packaged as a ZIP file.
                </p>
              </div>

            </div>

            <button
              onClick={on_createfile}
              id="create_download"
            >
              {downloadMessage}
              <span>→</span>
            </button>

          </div>

        </div>

        {/* Footer note */}
        <p className="blocker-note">
          You can select multiple websites before creating your extension.
        </p>

      </div>

    </div>
  );
}

export default Testbuttons;