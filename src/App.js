import React, { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleChangeStorageValue = (e) => {
    setStorageValue(e.target.value);
  };

  const [value, setValue] = useLocalStorage("user", "");
  const [storageValue, setStorageValue] = useState("");
  return (
    <div className="App">
      <div className="user">
        <div>
          <p>Storage value is {JSON.stringify(value)} </p>
        </div>
        <div>
          <input
            className="storageField"
            type="text"
            placeholder="Set a value in LocalStorage"
            value={storageValue}
            onChange={handleChangeStorageValue}
          />
        </div>
        <div>
          <button onClick={() => setValue(storageValue)}>
            Set storage value{" "}
          </button>
          <button onClick={() => setValue(null)}>Remove storage value </button>
          <button
            onClick={() =>
              i18next.language === "en"
                ? changeLanguage("fr")
                : changeLanguage("en")
            }
          >
            Change to {i18next.language === "en" ? "French" : "English"}
          </button>
        </div>
        <div>
          <p> {t("Welcome to React")} </p>
        </div>
      </div>
    </div>
  );
};

export default App;
