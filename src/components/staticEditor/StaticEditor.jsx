import React from "react";
import {
  BoldIcon,
  FormatClearIcon,
  H1Icon,
  H2Icon,
  ItalicIcon,
  LinkIcon,
  OrderedListIcon,
  UnderlineIcon,
  UnorderedListIcon,
} from "../../assets/icons/icons";
import "./StaticEditor.style.css";

const StaticEditor = ({ inputVal, setInputVal }) => {
  return (
    <div className="editorWrapper">
      <textarea
        value={inputVal ? inputVal : ""}
        onChange={(e) => setInputVal(e?.target?.value)}
        className="textArea"
        placeholder="Type or paste (⌘+V) something here."
      />
      <div className="editorFooter">
        <div className="editroFooterStyling">
          <div
            className="editorStylingItem tooltip-wrapper tooltip t-bottom"
            data-tooltip-text="Bold"
          >
            <BoldIcon />
          </div>
          <div
            className="editorStylingItem tooltip-wrapper tooltip t-bottom"
            data-tooltip-text="Italic"
          >
            <ItalicIcon />
          </div>
          <div
            className="editorStylingItem tooltip-wrapper tooltip t-bottom"
            data-tooltip-text="Underline"
          >
            <UnderlineIcon />
          </div>

          <div className="editorFooterDivider"></div>
          <div
            className="editorStylingItem tooltip-wrapper tooltip t-bottom"
            data-tooltip-text="Unordered list"
          >
            <UnorderedListIcon />
          </div>
          <div
            className="editorStylingItem tooltip-wrapper tooltip t-bottom"
            data-tooltip-text="Ordered list"
          >
            <OrderedListIcon />
          </div>

          <div className="editorFooterDivider"></div>

          <div
            className="editorStylingItem tooltip-wrapper tooltip t-bottom"
            data-tooltip-text="H1"
          >
            <H1Icon />
          </div>
          <div
            className="editorStylingItem tooltip-wrapper tooltip t-bottom"
            data-tooltip-text="H2"
          >
            <H2Icon />
          </div>

          <div className="editorFooterDivider"></div>

          <div
            className="editorStylingItem tooltip-wrapper tooltip t-bottom"
            data-tooltip-text="Hyperlink"
          >
            <LinkIcon />
          </div>

          <div className="editorFooterDivider"></div>

          <div
            className="editorStylingItem tooltip-wrapper tooltip t-bottom"
            data-tooltip-text="Format clear"
          >
            <FormatClearIcon />
          </div>
        </div>

        <div className="counter">
          {!!inputVal?.length ? inputVal.length : 0} charcters,{" "}
          {!!inputVal?.length ? inputVal?.split(" ")?.length : 0} word
        </div>
      </div>
    </div>
  );
};

export default StaticEditor;
