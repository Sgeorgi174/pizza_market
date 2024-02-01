import styles from "./SearchBar.module.scss";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/searchSlice";
import debounce from "lodash.debounce";
import { useCallback, useState } from "react";

export const SearchBar = () => {
  const [localSearchValue, setLocalSearchValue] = useState("");
  const dispatch = useDispatch();

  const onChangeInput = (event) => {
    setLocalSearchValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 500),
    []
  );

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_253)">
          <path
            d="M5.7515 2.99153C4.59282 4.1485 3.91891 5.70376 3.86709 7.34035C3.81528 8.97695 4.38946 10.5717 5.47264 11.7997C6.55581 13.0276 8.06645 13.7963 9.69672 13.9492C11.2973 14.0992 12.8949 13.6446 14.1757 12.6767L17.5069 16.0087L17.5069 16.0087C17.5897 16.0915 17.6881 16.1572 17.7963 16.2021C17.9046 16.2469 18.0206 16.27 18.1377 16.27C18.2549 16.27 18.3709 16.2469 18.4791 16.2021C18.5873 16.1572 18.6857 16.0915 18.7685 16.0087C18.8514 15.9258 18.9171 15.8275 18.9619 15.7192C19.0068 15.611 19.0298 15.495 19.0298 15.3779C19.0298 15.2607 19.0068 15.1447 18.9619 15.0365C18.9171 14.9282 18.8514 14.8299 18.7685 14.747L18.7685 14.747L15.4368 11.4161C16.4021 10.1351 16.8547 8.53858 16.7038 6.93955C16.5501 5.31066 15.7816 3.80151 14.5547 2.71913C13.3277 1.63674 11.7345 1.06244 10.0992 1.11304C8.46381 1.16365 6.90917 1.83536 5.7515 2.99153ZM5.7515 2.99153L5.82216 3.06229L5.7515 2.99153ZM13.5895 4.25378C14.0271 4.68428 14.3751 5.19715 14.6135 5.76281C14.8518 6.32848 14.9758 6.93574 14.9783 7.54956C14.9808 8.16339 14.8618 8.77164 14.628 9.33923C14.3943 9.90681 14.0505 10.4225 13.6164 10.8565C13.1824 11.2906 12.6667 11.6344 12.0991 11.8682C11.5315 12.1019 10.9233 12.221 10.3094 12.2185C9.6956 12.216 9.08834 12.092 8.52268 11.8536C7.95702 11.6152 7.44415 11.2672 7.01365 10.8297C6.15334 9.95522 5.67341 8.77625 5.6784 7.54956C5.6834 6.32288 6.17291 5.14786 7.04032 4.28045C7.90772 3.41304 9.08274 2.92353 10.3094 2.91854C11.5361 2.91354 12.7151 3.39347 13.5895 4.25378Z"
            fill="black"
            stroke="black"
            strokeWidth="0.2"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_253">
            <rect
              width="19"
              height="19"
              fill="white"
              transform="translate(0.800659)"
            />
          </clipPath>
        </defs>
      </svg>
      <input
        onChange={onChangeInput}
        value={localSearchValue}
        className={styles.input}
        placeholder="Поиск пиццы..."
      ></input>
    </div>
  );
};
