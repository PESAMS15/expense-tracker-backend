import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Modal from "react-modal";
import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DashBoard from "./Pages/DashBoard";
import AddExpense from "./components/AddExpense";
import { Routes, Route } from "react-router-dom";
import SetBudget from "./components/SetBudget";
import Main from "./Pages/Main";
import MainAnalysis from "./Pages/MainAnalysis";
import MainSpendAnalysis from "./Pages/MainSpendAnalysis";
import MainDaily from "./Pages/MainDaily";
import Developers from "./Pages/Aboutus";
import ConfirmDelete from "./Pages/ConfirmDelete";
// import { Scrollbars } from "react-custom-scrollbars";
import Contact from "./Pages/contactUs";
import Expense from "./Pages/Expense";
import Home from "./components/Home";
import Goals from "./Pages/Goals";
import Goal from "./components/Goal";
import Goa from "./components/Goa";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";

Modal.setAppElement("#root");

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenGoal, setIsOpenGoal] = useState(false);
  const [modalIsOpenGoa, setIsOpenGoa] = useState(false);
  const [modalIsOpenLogin, setIsOpenLogin] = useState(false);
  const [modalIsOpenPassword, setIsOpenPassword] = useState(false);
  const [modalIsOpenExpense, setIsOpenExpense] = useState(false);
  const [modalIsOpenBudget, setIsOpenBudget] = useState(false);
  const [modalisOpenConfirm, setIsOpenConfirm] = useState(false);
  const [modalIsOpenContact, setIsOpenContact] = useState(false);
  const [id, setid] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState();

  const [deleteId, setDeleteId] = useState();

  function openModalContact() {
    setIsOpenContact(true);
  }

  function closeModalContact() {
    setIsOpenContact(false);
    
  }
 

  function openModalGoal (){
    setIsOpenGoal(true)
  }
  function openModalGoa (){
    setid(localStorage.getItem("goalid"))
    setIsOpenGoa(true)
  }

  function openModalConfirm() {
    setIsOpenConfirm(true);
  }

  function closeModalConfirm() {
    setIsOpenConfirm(false);
  }
  function openModalExpense() {
    setIsOpenExpense(true);
  }

  function closeModalExpense() {
    setIsOpenExpense(false);
  }
  function openModalBudget() {
    setIsOpenBudget(true);
  }

  

  function closeModalBudget() {
    setIsOpenBudget(false);
  }
  function closeModalGoal() {
    setIsOpenGoal(false);
  }
  function closeModalGoa() {
    setIsOpenGoa(false);
  }

  function openModalSignup() {
    setIsOpen(true);
  }

  function closeModalSignup() {
    setIsOpen(false);
  }
  function openModalLogin() {
    setIsOpenLogin(true);
  }

  function closeModalLogin() {
    setIsOpenLogin(false);
  }
  
  function openModalPass() {
    setIsOpenPassword(true);
  }

  function closeModalPass() {
    setIsOpenPassword(false);
    
  }

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(58, 63, 69, 0.71)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#313233",
      // border: "2px solid #FFFFFF",
      color: "#FFFFFF",
      width: `${window.innerWidth > 420 ? "40%" : "95vw"} `,
      // width: "40%",
    },
  };

  const customStylesContact = {
    overlay: {
      // backgroundColor: "rgba(58, 63, 69, 0.71)",
      filter: "blur(10px)"/* Adjust the blur radius as needed */
         },
    content: {
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#1E2329",
      border: "2px solid #FFFFFF",
      color: "#FFFFFF",
      width: "70%", // Default width for all screen sizes
      height: "82%", // Default height for all screen sizes
      '@screen sm': {
        width: "80%", // Adjust width for small screens
        height: "90%", // Adjust height for small screens
      },
      '@screen md': {
        top: "50%",
        left: "50%",
        width: "60%", // Adjust width for medium screens
        height: "80%", // Adjust height for medium screens
      },
      '@screen lg': {
        top: "50%",
        left: "50%",
        width: "50%", // Adjust width for large screens
        height: "70%", // Adjust height for large screens
      },
    },
  };
  

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div className="font-lexend overflow-x-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                openModalContact={openModalContact}
                openModalSignup={openModalSignup}
                openModalLogin={openModalLogin}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              ></LandingPage>
            }
          />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route
            path="dashboard"
            element={
              <DashBoard
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                openModalExpense={openModalExpense}
              />
            }
          >
            <Route
              path=""
              element={
                <Main
                  setDeleteId={setDeleteId}
                  openModalConfirm={openModalConfirm}
                  openModalBudget={openModalBudget}
                />
              }
            ></Route>

            <Route
              path="analysis"
              element={
                <MainAnalysis
                  setDeleteId={setDeleteId}
                  openModalConfirm={openModalConfirm}
                />
              }
            ></Route>

            <Route
              path="dailyspendanalysis"
              element={<MainSpendAnalysis />}
            ></Route>

            <Route
              path="daily"
              element={
                <MainDaily
                  setDeleteId={setDeleteId}
                  openModalConfirm={openModalConfirm}
                />
              }
            ></Route>
            <Route
              path="expense/:id"
              element= {<Expense />}

            
            
            />
            <Route

             path="goals"
            

              element={<Goals 
                openModalGoal={openModalGoal}
                openModalGoa={openModalGoa}
                closeModalGoal={closeModalGoal}
              />} />
          </Route>

          <Route path="/about-us" element={<Developers />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModalSignup}
          style={customStyles}
        >
          <button onClick={closeModalSignup}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <Signup
            closeModalSignup={closeModalSignup}
            openModalLogin={openModalLogin}
          />
        </Modal>
        <Modal
          isOpen={modalIsOpenLogin}
          onRequestClose={closeModalLogin}
          style={customStyles}
        >
          <button onClick={closeModalLogin}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <Login
            closeModalLogin={closeModalLogin}
            openModalSignup={openModalSignup}
            open={openModalPass}
          />
        </Modal>

        <Modal
          isOpen={modalIsOpenExpense}
          onRequestClose={closeModalExpense}
          style={customStyles}
        >
          <button onClick={closeModalExpense}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <AddExpense closeModalExpense={closeModalExpense} />
        </Modal>
        <Modal
        isOpen={modalIsOpenPassword}
        onRequestClose={closeModalPass}
        style={customStyles}
      >
        <button onClick={closeModalPass}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <ForgotPassword
          closeModalPass={closeModalPass}
          openModalLogin={openModalLogin}
        />
      </Modal>
      </div>

    
      <Modal
        isOpen={modalIsOpenPassword}
        onRequestClose={closeModalPass}
        style={customStyles}
      >
        <button onClick={closeModalPass}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <ForgotPassword
          closeModalPass={closeModalPass}
          openModalLogin={openModalLogin}
        />
      </Modal>

      <Modal
        isOpen={modalIsOpenLogin}
        onRequestClose={closeModalLogin}
        style={customStyles}
      >
        <button onClick={closeModalLogin}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <Login
          closeModalLogin={closeModalLogin}
          openModalSignup={openModalSignup}
          open={openModalPass}
        />
      </Modal>

      <Modal
        isOpen={modalIsOpenExpense}
        onRequestClose={closeModalExpense}
        style={customStyles}
      >
        <button onClick={closeModalExpense}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <AddExpense closeModalExpense={closeModalExpense} />
      </Modal>

      <Modal
        isOpen={modalIsOpenBudget}
        onRequestClose={closeModalBudget}
        style={customStyles}
      >
        <button onClick={closeModalBudget}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <SetBudget closeModalBudget={closeModalBudget} />
      </Modal>
      <Modal
        isOpen={modalIsOpenGoal}
        onRequestClose={closeModalGoal}
        style={customStyles}
      >
        <button onClick={closeModalGoal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <Goal closeModalGoal={closeModalGoal} />
      </Modal>
      <Modal
        isOpen={modalIsOpenGoa}
        onRequestClose={closeModalGoa}
        style={customStyles}
      >
        <button onClick={closeModalGoa}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <Goa  closeModalGoa={closeModalGoa} />
      </Modal>

      <Modal
        isOpen={modalisOpenConfirm}
        onRequestClose={closeModalConfirm}
        style={customStyles}
      >
        <button onClick={closeModalConfirm}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <ConfirmDelete
          deleteId={deleteId}
          closeModalConfirm={closeModalConfirm}
        />
      </Modal>
      <Modal
        isOpen={modalIsOpenContact}
        onRequestClose={closeModalContact}
        style={customStylesContact}
      >
        <button onClick={closeModalContact}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <Contact closeModalContact={closeModalContact} />
      </Modal>
    </div>
  );
}

export default App;
