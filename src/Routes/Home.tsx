import { Outlet } from "react-router-dom";
function Home() {
    return (
        <div>
            <Outlet />
            <div style={{ backgroundColor: "whitesmoke", height: "200vh" }}></div>
        </div>

    );
}
export default Home;