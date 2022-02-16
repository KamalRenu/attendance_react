import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import StudentList from './StudentList';
import AttendanceList from './AttendanceList';
import Addattendance from './Addattendance';

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/student-list" element={<StudentList />}></Route>
                <Route path="/student/:id" element={<AttendanceList />}></Route>
                <Route path="/add-attendance/:id" element={<Addattendance />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
