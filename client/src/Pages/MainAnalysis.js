import React, { useState } from "react";
import Analysis from "../components/Analysis";
import List from "../components/List";
import ProfileExpand from "../components/ProfileExpand";

export default function MainAnalysis(props) {
  const [listExpense, setListExpense] = useState([]);
  const [clicked, setClicked] = useState(true);

  const renderListSection = () => (
    <div>
      {listExpense
        ? listExpense.map((item) => (
            <List
              key={item.id} // Make sure to use a unique key
              setDeleteId={props.setDeleteId}
              openModalConfirm={props.openModalConfirm}
              expense={item}
            />
          ))
        : null}
    </div>
  );

  const renderAnalysisSection = () => (
    <div className="col-span-2 bg-jp-black mt-10 lg:mt-0">
      <Analysis
        clicked={clicked}
        setClicked={setClicked}
        setListExpense={setListExpense}
        listExpense={listExpense}
      />
    </div>
  );

  const renderProfileExpand = () => (
    <div className={` w-fit h-fit hidden bg-jp-black`}>
      <ProfileExpand />
    </div>
  );

  return (
    <>
      {window.innerWidth > 420 ? (
        <>
          <div className="col-span-2 md:pl-10 bg-jp-black">
            {clicked ? renderListSection() : null}
          </div>
          {renderAnalysisSection()}
          {renderProfileExpand()}
        </>
      ) : (
        <>
          {renderAnalysisSection()}
          <div className="col-span-2 bg-jp-black">
            {clicked ? renderListSection() : null}
          </div>
          {renderProfileExpand()}
        </>
      )}
    </>
  );
}
